import { type NextRequest, NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

export async function POST(request: NextRequest) {
  try {
    if (!supabase) {
      return NextResponse.json(
        {
          error:
            "Supabase not configured. Please add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY environment variables.",
        },
        { status: 500 },
      )
    }

    const formData = await request.formData()
    const file = formData.get("file") as File

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 })
    }

    // Generate unique filename
    const fileExt = file.name.split(".").pop()
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`
    const filePath = `travel-images/${fileName}`

    // Convert file to buffer
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Upload to Supabase storage
    const { data, error } = await supabase.storage.from("travel-images").upload(filePath, buffer, {
      contentType: file.type,
      upsert: false,
    })

    if (error) {
      console.error("Storage upload error:", error)
      return NextResponse.json(
        {
          error: `Failed to upload image: ${error.message}. Please check your storage bucket configuration and RLS policies.`,
        },
        { status: 500 },
      )
    }

    // Get public URL
    const { data: urlData } = supabase.storage.from("travel-images").getPublicUrl(filePath)

    return NextResponse.json({
      success: true,
      filePath: data.path,
      publicUrl: urlData.publicUrl,
    })
  } catch (error) {
    console.error("Upload error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
