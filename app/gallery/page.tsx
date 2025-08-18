import { getAllDestinations } from "@/lib/content-fetcher"
import GalleryClient from "./gallery-client"

export default async function GalleryPage() {
  const destinations = await getAllDestinations()
  console.log("[v0] GalleryPage destinations:", destinations.length)
  return <GalleryClient destinations={destinations} />
}

