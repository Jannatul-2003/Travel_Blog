import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import { blogPosts } from "@/lib/content";
import { notFound } from "next/navigation";
import ClientImage from "@/components/ClientImage";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.id === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-emerald-600">
            Mamun The Nomad
          </Link>
          <Link href="/">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Image */}
      <div className="relative h-96">
        <ClientImage
          src={post.image || "/placeholder.svg"}
          fallbackSrc="/placeholder.svg?height=400&width=800"
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-8 left-8 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-lg">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              {post.date}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8 font-medium">
                {post.excerpt}
              </p>
              <div className="text-gray-700 leading-relaxed">
                {post.content?.split("\n").map((paragraph, index) => (
                  <p key={index} className="mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Related Posts */}
            <div className="mt-12 pt-8 border-t">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                More Adventures
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {blogPosts
                  .filter((p) => p.id !== post.id)
                  .slice(0, 2)
                  .map((relatedPost) => (
                    <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`}>
                      <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                        <div className="relative h-48">
                          <ClientImage
                            src={relatedPost.image || "/placeholder.svg"}
                            fallbackSrc="/placeholder.svg?height=400&width=800"
                            alt={relatedPost.title}
                            fill
                            className="object-cover"
                            priority
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold text-lg mb-2">
                            {relatedPost.title}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {relatedPost.excerpt}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Mamun The Nomad</h3>
          <p className="text-gray-300 mb-6">
            Sharing the beauty of Bangladesh and inspiring others to explore
            this incredible country.
          </p>
          <Link href="/">
            <Button
              variant="outline"
              className="bg-white text-gray-800 border-white hover:text-gray-900 hover:shadow-md transition-all duration-200"
            >
              Back to Home
            </Button>
          </Link>
        </div>
      </footer>
    </div>
  );
}
