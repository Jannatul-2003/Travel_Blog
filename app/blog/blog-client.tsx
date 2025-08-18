"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calendar } from "lucide-react"
import { getAllBlogPosts } from "@/lib/content-fetcher"
import type { BlogPost } from "@/lib/content"
import ClientImage from "@/components/ClientImage"

export default function BlogClient({ blogPosts }: { blogPosts: BlogPost[] }) {

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-emerald-600">
            Mamun The Nomad
          </Link>
          <Link href="/">
            <Button variant="outline" className="flex items-center gap-2 bg-transparent">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-emerald-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Travel Blog</h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            Stories from my adventures across Bangladesh and beyond. Join me as I explore hidden gems and share the
            beauty of South Asia.
          </p>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-48">
                <ClientImage
                  src={post.image}
                  fallbackSrc="/placeholder.svg?height=300&width=400"
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center gap-1 text-sm">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-emerald-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <Link href={`/blog/${post.id}`}>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-all bg-transparent"
                  >
                    Read More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Mamun The Nomad</h3>
          <p className="text-gray-300 mb-6">
            Sharing the beauty of Bangladesh and inspiring others to explore this incredible country.
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
  )
}
