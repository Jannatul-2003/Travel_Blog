
import { getAllBlogPosts } from "@/lib/content-fetcher"
import BlogClient from "./blog-client"

export default async function BlogPage() {
  const blogPosts = await getAllBlogPosts()
  console.log("[v0] BlogPost:", blogPosts.length)
  return <BlogClient blogPosts={blogPosts} />
}

