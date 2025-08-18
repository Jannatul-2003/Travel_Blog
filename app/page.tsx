import { getAllDestinations, getAllBlogPosts } from "@/lib/content-fetcher";
import { HomePageClient } from "./homepage-client";

export default async function HomePage() {
  const destinations = await getAllDestinations();
  const blogPosts = await getAllBlogPosts();

  return <HomePageClient destinations={destinations} blogPosts={blogPosts} />;
}