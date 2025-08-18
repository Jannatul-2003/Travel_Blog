import { supabase } from "./supabase"
import { destinations as staticDestinations, blogPosts as staticBlogPosts } from "./content"
import type { TravelDestination, BlogPost } from "./content"


console.log("Supabase URL Loaded:", process.env.NEXT_PUBLIC_SUPABASE_URL ? "Yes" : "No");

export async function getAllDestinations(): Promise<TravelDestination[]> {
  if (!supabase) {
    console.log("[v0] Supabase not configured, using static destinations only")
    return staticDestinations
  }

  try {
    // Fetch dynamic destinations from database
    const { data: dynamicDestinations, error } = await supabase
      .from("travel_destinations")
      .select("*")
      

    if (error) {
      console.error("Error fetching travel destinations:", error)
      return staticDestinations
    }

    // Convert database format to TravelDestination format
    const convertedDynamic: TravelDestination[] =
      dynamicDestinations?.map((dest: { id: any; title: any; location: any; image: any; description: any; full_description: any }) => ({
        id: dest.id,
        title: dest.title,
        location: dest.location,
        image: dest.image,
        description: dest.description,
        fullDescription: dest.full_description || undefined,
      })) || []

      console.log({ dynamicDestinations, error })
      console.log("[v0] Fetched dynamic destinations:", convertedDynamic.length)
    return [...convertedDynamic, ...staticDestinations]
  } catch (error) {
    console.error("Error in getAllDestinations:", error)
    return staticDestinations
  }
}



export async function getAllBlogPosts(): Promise<BlogPost[]> {
  if (!supabase) {
    return staticBlogPosts
  }

  try {
    // Fetch dynamic blog posts from database
    const { data: dynamicPosts, error } = await supabase
      .from("blog_posts")
      .select("*")

    if (error) {
      console.error("Error fetching blog posts:", error)
      // Return only static content if database fails
      return staticBlogPosts
    }

    // Convert database format to BlogPost format
    const convertedDynamic: BlogPost[] =
      dynamicPosts?.map((post: { id: any; title: any; date: any; image: any; excerpt: any; content: any }) => ({
        id: post.id,
        title: post.title,
        date: post.date,
        image: post.image,
        excerpt: post.excerpt,
        content: post.content || undefined,
      })) || []

      console.log({ dynamicPosts, error })


      console.log("[v0] Fetched dynamic blog posts:", convertedDynamic.length)
    // Combine dynamic and static content, with dynamic content first
    return [...convertedDynamic, ...staticBlogPosts]
  } catch (error) {
    console.error("Error in getAllBlogPosts:", error)
    return staticBlogPosts
  }
}

export async function getDestinationById(id: string): Promise<TravelDestination | null> {
  if (!supabase) {
    return staticDestinations.find((dest) => dest.id === id) || null
  }

  try {
    // First try to find in dynamic content
    const { data: dynamicDest, error } = await supabase.from("travel_destinations").select("*").eq("id", id).single()

    if (!error && dynamicDest) {
      return {
        id: dynamicDest.id,
        title: dynamicDest.title,
        location: dynamicDest.location,
        image: dynamicDest.image,
        description: dynamicDest.description,
        fullDescription: dynamicDest.full_description || undefined,
      }
    }

    // If not found in dynamic content, check static content
    return staticDestinations.find((dest) => dest.id === id) || null
  } catch (error) {
    console.error("Error in getDestinationById:", error)
    return staticDestinations.find((dest) => dest.id === id) || null
  }
}

export async function getBlogPostById(id: string): Promise<BlogPost | null> {
  if (!supabase) {
    return staticBlogPosts.find((post) => post.id === id) || null
  }

  try {
    // First try to find in dynamic content
    const { data: dynamicPost, error } = await supabase.from("blog_posts").select("*").eq("id", id).single()

    if (!error && dynamicPost) {
      return {
        id: dynamicPost.id,
        title: dynamicPost.title,
        date: dynamicPost.date,
        image: dynamicPost.image,
        excerpt: dynamicPost.excerpt,
        content: dynamicPost.content || undefined,
      }
    }

    // If not found in dynamic content, check static content
    return staticBlogPosts.find((post) => post.id === id) || null
  } catch (error) {
    console.error("Error in getBlogPostById:", error)
    return staticBlogPosts.find((post) => post.id === id) || null
  }
}
