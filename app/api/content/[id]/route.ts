import { NextResponse, type NextRequest } from "next/server";
import { supabase } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

// PUT (Update) a specific piece of content
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const body = await request.json();
    const { type, ...contentData } = body;
    
    // 1. Define a payload object
    let dataToUpdate;
    const tableName = type === 'destination' ? 'travel_destinations' : 'blog_posts';

    // 2. Build the payload based on the content type
    if (type === "destination") {
        dataToUpdate = {
            title: contentData.title,
            location: contentData.location,
            image: contentData.image,
            description: contentData.description,
            full_description: contentData.fullDescription,
        };
    } else if (type === "blog") {
        dataToUpdate = {
            title: contentData.title,
            date: contentData.date,
            image: contentData.image,
            excerpt: contentData.excerpt,
            content: contentData.content,
        };
    } else {
        return NextResponse.json({ error: "Invalid content type" }, { status: 400 });
    }

    // 3. Use the clean payload in the Supabase call
    const { data, error } = await supabase
      .from(tableName)
      .update(dataToUpdate)
      .eq("id", id)
      .select()
      .single();

    if (error) throw new Error(error.message);

    // Revalidate paths
    revalidatePath("/");
    revalidatePath(type === 'destination' ? "/gallery" : "/blog");
    if (type === 'blog') revalidatePath(`/blog/${id}`);

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("API PUT Error:", error);
    return NextResponse.json({ error: error instanceof Error ? error.message : "Internal Server Error" }, { status: 500 });
  }
}

// DELETE a specific piece of content
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');

    if (!type) {
      return NextResponse.json({ error: "Content type is required" }, { status: 400 });
    }

    const tableName = type === 'destination' ? 'travel_destinations' : 'blog_posts';

    const { error } = await supabase.from(tableName).delete().eq("id", id);

    if (error) throw new Error(error.message);

    // Revalidate paths
    revalidatePath("/");
    revalidatePath(type === 'destination' ? "/gallery" : "/blog");
    if (type === 'blog') revalidatePath(`/blog/${id}`); // Revalidate the now-deleted page

    return NextResponse.json({ success: true, message: "Content deleted successfully" });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Internal Server Error" }, { status: 500 });
  }
}