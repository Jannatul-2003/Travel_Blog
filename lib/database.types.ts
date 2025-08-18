// Database type definitions that match the SQL schema
export interface Database {
  public: {
    Tables: {
      travel_destinations: {
        Row: {
          id: string
          title: string
          location: string
          image: string
          description: string
          full_description: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          title: string
          location: string
          image: string
          description: string
          full_description?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          location?: string
          image?: string
          description?: string
          full_description?: string | null
          updated_at?: string
        }
      }
      blog_posts: {
        Row: {
          id: string
          title: string
          date: string
          image: string
          excerpt: string
          content: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          title: string
          date: string
          image: string
          excerpt: string
          content?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          date?: string
          image?: string
          excerpt?: string
          content?: string | null
          updated_at?: string
        }
      }
    }
  }
}
