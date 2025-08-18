
import { NextResponse, type NextRequest } from "next/server";
import { supabase } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

// GET all content for the admin panel
export async function GET() {
  try {
    const { data: destinations, error: destError } = await supabase
      .from("travel_destinations")
      .select("*")
      .order("created_at", { ascending: false });

    const { data: blogPosts, error: blogError } = await supabase
      .from("blog_posts")
      .select("*")
      .order("created_at", { ascending: false });

    if (destError || blogError) {
      throw new Error(destError?.message || blogError?.message);
    }

    return NextResponse.json({ destinations, blogPosts });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Internal Server Error" },
      { status: 500 }
    );
  }
}

// POST new content (Create)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, ...contentData } = body;

    // 1. Define a payload object to hold only the relevant data
    let dataToInsert;
    const tableName = type === 'destination' ? 'travel_destinations' : 'blog_posts';

    // 2. Build the payload based on the content type
    if (type === "destination") {
      dataToInsert = {
        id: contentData.id,
        title: contentData.title,
        location: contentData.location,
        image: contentData.image,
        description: contentData.description,
        full_description: contentData.fullDescription || null,
      };
    } else if (type === "blog") {
      dataToInsert = {
        id: contentData.id,
        title: contentData.title,
        date: contentData.date,
        image: contentData.image,
        excerpt: contentData.excerpt,
        content: contentData.content || null,
      };
    } else {
      return NextResponse.json({ error: "Invalid content type" }, { status: 400 });
    }
    
    // 3. Use the clean payload in the Supabase call
    const { data, error } = await supabase
        .from(tableName)
        .insert(dataToInsert)
        .select()
        .single();

    if (error) throw new Error(error.message);

    // Revalidate paths
    revalidatePath("/");
    revalidatePath(type === 'destination' ? "/gallery" : "/blog");
    if(type === 'blog') revalidatePath(`/blog/${data.id}`);

    return NextResponse.json({ success: true, data });

  } catch (error) {
    console.error("API POST Error:", error);
    return NextResponse.json({ error: error instanceof Error ? error.message : "Internal Server Error" }, { status: 500 });
  }
}