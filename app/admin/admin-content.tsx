"use client";

import type React from "react";
import { useState, useEffect, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "@/hooks/use-toast";

// UI Components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Icons
import {
  Upload,
  Plus,
  Save,
  ArrowLeft,
  Loader2,
  LogOut,
  Pencil,
  Trash2,
  XCircle,
} from "lucide-react";

// Types
import type { TravelDestination, BlogPost } from "@/lib/content";

interface FormData {
  id: string;
  title: string;
  location: string;
  description: string;
  fullDescription: string;
  date?: string;
  excerpt?: string;
  content?: string;
  type: "destination" | "blog";
  image?: string;
}

const INITIAL_FORM_DATA: FormData = {
  id: "",
  title: "",
  location: "",
  description: "",
  fullDescription: "",
  date: "",
  excerpt: "",
  content: "",
  type: "destination",
  image: "",
};

// Helper function to generate ID from title
const generateId = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
};

// Custom hook for form validation
const useFormValidation = (
  formData: FormData,
  hasImage: boolean,
  editingItem: FormData | null
) => {
  return useMemo(() => {
    const hasValidImage = hasImage || !!editingItem;
    const hasTitle = !!formData.title;

    const isDestinationValid =
      formData.type === "destination"
        ? !!formData.location && !!formData.description
        : true;

    const isBlogValid =
      formData.type === "blog"
        ? !!formData.date && !!formData.excerpt && !!formData.content
        : true;

    return hasValidImage && hasTitle && isDestinationValid && isBlogValid;
  }, [formData, hasImage, editingItem]);
};

export default function AdminContent() {
  const router = useRouter();
  const { user, logout: authLogout } = useAuth();

  // Form State
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editingItem, setEditingItem] = useState<FormData | null>(null);

  // Content Management State
  const [destinations, setDestinations] = useState<TravelDestination[]>([]);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isLoadingContent, setIsLoadingContent] = useState(true);

  // Form validation
  const isFormValid = useFormValidation(formData, !!selectedImage, editingItem);

  // Fetch content on component mount
  const fetchContent = useCallback(async () => {
    setIsLoadingContent(true);
    try {
      const response = await fetch("/api/content");
      if (!response.ok) throw new Error("Failed to fetch content");
      const data = await response.json();
      setDestinations(data.destinations || []);
      setBlogPosts(data.blogPosts || []);
    } catch (error) {
      toast({
        title: "Error",
        description:
          error instanceof Error ? error.message : "Could not load content.",
        variant: "destructive",
      });
    } finally {
      setIsLoadingContent(false);
    }
  }, []);

  useEffect(() => {
    fetchContent();
  }, [fetchContent]);

  // Logout handler
  const handleLogout = useCallback(async () => {
    try {
      await authLogout();
      toast({
        title: "Logged out",
        description: "You have been logged out successfully.",
      });
      router.push("/admin/login");
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to logout. Please try again.",
        variant: "destructive",
      });
    }
  }, [authLogout, router]);

  // Image handling
  const handleImageChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;

      setSelectedImage(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    },
    []
  );

  const removeImage = useCallback(() => {
    setSelectedImage(null);
    setImagePreview("");
  }, []);

  // Form handlers
  const handleTitleChange = useCallback(
    (title: string) => {
      setFormData((prev) => ({
        ...prev,
        title,
        id: editingItem ? prev.id : generateId(title),
      }));
    },
    [editingItem]
  );

  const updateFormField = useCallback(
    <K extends keyof FormData>(field: K, value: FormData[K]) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
    },
    []
  );

  // Image upload utility
  const uploadImage = useCallback(async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("/api/upload-image", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) throw new Error("Image upload failed");

    const result = await response.json();
    return result.publicUrl;
  }, []);

  // Form submission
  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!isFormValid || isSubmitting) return;

      setIsSubmitting(true);

      try {
        let imageUrl = editingItem?.image || "";

        if (selectedImage) {
          toast({
            title: "Uploading image...",
            description: "Please wait.",
          });
          imageUrl = await uploadImage(selectedImage);
        }

        if (!imageUrl) {
          throw new Error("An image is required.");
        }

        const finalFullDescription =
          formData.type === "destination" && !formData.fullDescription
            ? formData.description
            : formData.fullDescription;

        const contentData = {
          ...formData,
          fullDescription: finalFullDescription,
          image: imageUrl,
        };

        const apiEndpoint = editingItem
          ? `/api/content/${editingItem.id}`
          : "/api/content";
        const apiMethod = editingItem ? "PUT" : "POST";

        const response = await fetch(apiEndpoint, {
          method: apiMethod,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(contentData),
        });

        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.error || "Failed to save content");
        }

        const savedData = await response.json();

        toast({
          title: "Success!",
          description: `Content "${formData.title}" has been ${
            editingItem ? "updated" : "saved"
          }.`,
        });

        // Update local state for instant feedback
        const updateStateFunction =
          formData.type === "destination" ? setDestinations : setBlogPosts;

        if (editingItem) {
          updateStateFunction((prev: any) =>
            prev.map((item: any) =>
              item.id === savedData.data.id ? savedData.data : item
            )
          );
        } else {
          updateStateFunction((prev: any) => [savedData.data, ...prev]);
        }

        resetForm();
      } catch (error) {
        toast({
          title: "Error",
          description:
            error instanceof Error
              ? error.message
              : "An unknown error occurred.",
          variant: "destructive",
        });
      } finally {
        setIsSubmitting(false);
      }
    },
    [
      formData,
      selectedImage,
      editingItem,
      isFormValid,
      isSubmitting,
      uploadImage,
    ]
  );

  // Delete handler
  const handleDelete = useCallback(
    async (id: string, type: "destination" | "blog") => {
      try {
        const response = await fetch(`/api/content/${id}?type=${type}`, {
          method: "DELETE",
        });

        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.error || "Failed to delete item.");
        }

        toast({
          title: "Success!",
          description: "The item has been deleted.",
        });

        // Update local state for instant feedback
        if (type === "destination") {
          setDestinations((prev) => prev.filter((d) => d.id !== id));
        } else {
          setBlogPosts((prev) => prev.filter((p) => p.id !== id));
        }
      } catch (error) {
        toast({
          title: "Error",
          description:
            error instanceof Error ? error.message : "Could not delete item.",
          variant: "destructive",
        });
      }
    },
    []
  );

  // Edit handler
  const handleEdit = useCallback(
    (item: TravelDestination | BlogPost, type: "destination" | "blog") => {
      const baseFormData = {
        id: item.id,
        title: item.title,
        type,
        image: item.image || "",
        location: "",
        description: "",
        fullDescription: "",
        date: "",
        excerpt: "",
        content: "",
      };

      if (type === "destination" && "location" in item) {
        baseFormData.location = item.location || "";
        baseFormData.description = item.description || "";
        baseFormData.fullDescription = item.fullDescription || "";
      } else if (type === "blog" && "date" in item) {
        baseFormData.date = item.date || "";
        baseFormData.excerpt = item.excerpt || "";
        baseFormData.content = item.content || "";
      }

      setFormData(baseFormData);
      setImagePreview(item.image || "");
      setSelectedImage(null);
      setEditingItem(baseFormData);
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    []
  );

  // Reset form
  const resetForm = useCallback(() => {
    setFormData(INITIAL_FORM_DATA);
    setSelectedImage(null);
    setImagePreview("");
    setEditingItem(null);
  }, []);

  // User display name
  const displayName = useMemo(() => {
    if (user?.email === "almamunurrashid1973@gmail.com") return "Mamun";
    return user?.email || "";
  }, [user?.email]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Left side - Title */}
          <Link
            href="/"
            className="text-lg md:text-2xl font-bold text-emerald-600"
          >
            Admin Panel - Mamun The Nomad
          </Link>

          {/* Right side controls */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            {displayName && (
              <span className="text-sm text-gray-600 text-center sm:text-left">
                Welcome, {displayName}
              </span>
            )}

            <Link href="/" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="flex items-center justify-center gap-2 w-full sm:w-auto bg-transparent"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Website
              </Button>
            </Link>

            <Button
              variant="outline"
              onClick={handleLogout}
              className="flex items-center justify-center gap-2 w-full sm:w-auto bg-transparent"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Form Card */}
          <Card>
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <CardTitle className="flex items-center gap-2">
                  {editingItem ? (
                    <Pencil className="w-5 h-5 text-emerald-600" />
                  ) : (
                    <Plus className="w-5 h-5 text-emerald-600" />
                  )}
                  <span className="font-medium text-gray-800">
                    {editingItem
                      ? `Edit ${editingItem.title}`
                      : "Add New Content"}
                  </span>
                </CardTitle>
                {editingItem && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={resetForm}
                    className="flex items-center gap-2 text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700 transition-colors"
                  >
                    <XCircle className="w-4 h-4" /> Cancel Edit
                  </Button>
                )}
              </div>
              <CardDescription>
                {editingItem
                  ? "Modify the details below and click update."
                  : "Upload a new travel destination or blog post."}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Content Type */}
                {/* <div className="space-y-2">
                  <Label htmlFor="type">Content Type</Label>
                  <Select
                    value={formData.type}
                    onValueChange={(value: "destination" | "blog") =>
                      updateFormField("type", value)
                    }
                    disabled={!!editingItem} // Disable select when editing
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select content type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="destination">
                        Travel Destination
                      </SelectItem>
                      <SelectItem value="blog">Blog Post</SelectItem>
                    </SelectContent>
                  </Select>
                  {editingItem && (
                    <p className="text-xs text-gray-400 mt-1">
                      Content type cannot be changed while editing
                    </p>
                  )}
                </div> */}
                <div className="space-y-2">
                  <Label htmlFor="type">Content Type</Label>
                  <div className="relative group">
                    <Select
                      value={formData.type}
                      onValueChange={(value: "destination" | "blog") =>
                        updateFormField("type", value)
                      }
                      disabled={!!editingItem}
                    >
                      <SelectTrigger
                        className={`${
                          !!editingItem
                            ? "bg-gray-100 border-gray-200 text-gray-700 cursor-not-allowed opacity-75"
                            : ""
                        }`}
                      >
                        <SelectValue placeholder="Select content type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="destination">
                          Travel Destination
                        </SelectItem>
                        <SelectItem value="blog">Blog Post</SelectItem>
                      </SelectContent>
                    </Select>

                    {/* Hover tooltip */}
                    {editingItem && (
                      <div className="absolute left-0 -bottom-8 bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10 whitespace-nowrap">
                        Content type cannot be changed while editing
                      </div>
                    )}
                  </div>
                </div>

                {/* Image Upload */}
                <div className="space-y-2">
                  <Label htmlFor="image">Image *</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                    {imagePreview ? (
                      <div className="space-y-4">
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="w-full h-64 object-cover rounded-lg"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          onClick={removeImage}
                        >
                          Remove Image
                        </Button>
                      </div>
                    ) : (
                      <div className="text-center">
                        <Upload className="mx-auto h-12 w-12 text-gray-400" />
                        <div className="mt-4">
                          <label
                            htmlFor="image-upload"
                            className="cursor-pointer"
                          >
                            <span className="mt-2 block text-sm font-medium text-gray-900">
                              Click to upload an image
                            </span>
                            <span className="mt-1 block text-sm text-gray-500">
                              PNG, JPG, GIF up to 10MB
                            </span>
                          </label>
                          <input
                            id="image-upload"
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="hidden"
                            required={!editingItem}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Title */}
                <div className="space-y-2">
                  <Label htmlFor="title">Title *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    placeholder="Enter title"
                    required
                  />
                </div>

                {/* Destination-specific fields */}
                {formData.type === "destination" && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="location">Location *</Label>
                      <Input
                        id="location"
                        value={formData.location}
                        onChange={(e) =>
                          updateFormField("location", e.target.value)
                        }
                        placeholder="Enter location"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="description">Description *</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) =>
                          updateFormField("description", e.target.value)
                        }
                        rows={4}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="fullDescription">Full Description</Label>
                      <Textarea
                        id="fullDescription"
                        value={formData.fullDescription}
                        onChange={(e) =>
                          updateFormField("fullDescription", e.target.value)
                        }
                        placeholder="Detailed Description"
                        rows={6}
                      />
                    </div>
                  </>
                )}

                {/* Blog-specific fields */}
                {formData.type === "blog" && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="date">Date *</Label>
                      <Input
                        id="date"
                        value={formData.date}
                        onChange={(e) =>
                          updateFormField("date", e.target.value)
                        }
                        placeholder="e.g., April 20, 2024"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="excerpt">Excerpt *</Label>
                      <Textarea
                        id="excerpt"
                        value={formData.excerpt}
                        onChange={(e) =>
                          updateFormField("excerpt", e.target.value)
                        }
                        placeholder="Brief excerpt for the blog post..."
                        rows={3}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="content">Full Content *</Label>
                      <Textarea
                        id="content"
                        value={formData.content}
                        onChange={(e) =>
                          updateFormField("content", e.target.value)
                        }
                        placeholder="Detailed content..."
                        rows={6}
                        required
                      />
                    </div>
                  </>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting || !isFormValid}
                  className="flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Save className="w-4 h-4" />
                  )}
                  {isSubmitting
                    ? "Saving..."
                    : editingItem
                    ? "Update Content"
                    : "Save Content"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Management Card */}
          <Card>
            <CardHeader>
              <CardTitle>Manage Existing Content</CardTitle>
              <CardDescription>
                Edit or delete existing destinations and blog posts.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="destinations">
                <TabsList>
                  <TabsTrigger value="destinations">
                    Destinations ({destinations.length})
                  </TabsTrigger>
                  <TabsTrigger value="blog">
                    Blog Posts ({blogPosts.length})
                  </TabsTrigger>
                </TabsList>
                {isLoadingContent ? (
                  <div className="flex justify-center items-center h-40">
                    <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
                  </div>
                ) : (
                  <>
                    <TabsContent value="destinations">
                      <ContentList
                        items={destinations}
                        onEdit={(item) => handleEdit(item, "destination")}
                        onDelete={(id) => handleDelete(id, "destination")}
                        type="destination"
                      />
                    </TabsContent>
                    <TabsContent value="blog">
                      <ContentList
                        items={blogPosts}
                        onEdit={(item) => handleEdit(item, "blog")}
                        onDelete={(id) => handleDelete(id, "blog")}
                        type="blog"
                      />
                    </TabsContent>
                  </>
                )}
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

// Helper component to render lists of content
type ContentListProps = {
  items: Array<TravelDestination | BlogPost>;
  onEdit: (item: TravelDestination | BlogPost) => void;
  onDelete: (id: string) => void;
  type: "destination" | "blog";
};

function ContentList({ items, onEdit, onDelete, type }: ContentListProps) {
  if (items.length === 0) {
    return <p className="text-center text-gray-500 py-8">No {type}s found.</p>;
  }

  return (
    <div className="space-y-4 mt-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-4 p-2 border rounded-lg"
        >
          <Image
            src={item.image || "/placeholder.svg"}
            alt={item.title}
            width={80}
            height={80}
            className="rounded-md object-cover w-20 h-20"
          />
          <div className="flex-grow">
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-500">
              {"location" in item && item.location
                ? item.location
                : "date" in item && item.date
                ? item.date
                : ""}
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => onEdit(item)}>
              <Pencil className="w-4 h-4" />
              <span className="sr-only">Edit</span>
            </Button>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive" size="sm">
                  <Trash2 className="w-4 h-4" />
                  <span className="sr-only">Delete</span>
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete "
                    {item.title}".
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={() => onDelete(item.id)}>
                    Continue
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      ))}
    </div>
  );
}
