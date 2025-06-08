// "use client"

// import { useState } from "react"
// import Image from "next/image"
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Card } from "@/components/ui/card"
// import { ArrowLeft } from "lucide-react"
// import { destinations } from "@/lib/content"
// import { PhotoLightbox } from "@/components/photo-lightbox"
// import type { TravelDestination } from "@/lib/content"

// export default function GalleryPage() {
//   const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
//   const [isLightboxOpen, setIsLightboxOpen] = useState(false)

//   const handlePhotoClick = (destination: TravelDestination) => {
//     const index = destinations.findIndex((d) => d.id === destination.id)
//     setCurrentPhotoIndex(index)
//     setIsLightboxOpen(true)
//   }

//   const handleNavigate = (index: number) => {
//     setCurrentPhotoIndex(index)
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Navigation */}
//       <nav className="bg-white shadow-sm border-b">
//         <div className="container mx-auto px-4 py-4 flex items-center justify-between">
//           <Link href="/" className="text-2xl font-bold text-emerald-600">
//             Mamun The Nomad
//           </Link>
//           <div className="flex items-center gap-4">
//             <Link href="/">
//               <Button variant="outline" className="flex items-center gap-2">
//                 <ArrowLeft className="w-4 h-4" />
//                 Back to Home
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </nav>

//       {/* Gallery Header */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4 text-center">
//           <h1 className="text-5xl font-bold text-gray-800 mb-6">Complete Photo Gallery</h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
//             Explore all {destinations.length} photographs from my travels across Bangladesh and beyond. Click on any
//             photo to view it in full size with detailed information.
//           </p>
//           <div className="text-emerald-600 font-semibold">
//             {destinations.length} Photos • Multiple Locations • Various Adventures
//           </div>
//         </div>
//       </section>

//       {/* Complete Gallery Grid */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {destinations.map((destination, index) => (
//               <Card
//                 key={destination.id}
//                 className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
//                 onClick={() => handlePhotoClick(destination)}
//               >
//                 <div className="relative h-64">
//                   <Image
//                     src={destination.image || "/placeholder.svg"}
//                     alt={destination.title}
//                     fill
//                     className="object-cover"
//                     onError={(e) => {
//                       e.currentTarget.src = "/placeholder.svg?height=300&width=400"
//                     }}
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
//                   <div className="absolute bottom-4 left-4 right-4 text-white">
//                     <h3 className="font-semibold text-lg mb-1">{destination.title}</h3>
//                     <p className="text-sm opacity-90">{destination.location}</p>
//                   </div>
//                   <div className="absolute top-4 right-4 bg-emerald-600 text-white text-xs px-2 py-1 rounded">
//                     #{index + 1}
//                   </div>
//                 </div>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Gallery Stats */}
//       <section className="py-20 bg-emerald-600">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl font-bold text-white mb-12">Gallery Statistics</h2>
//           <div className="grid md:grid-cols-4 gap-8">
//             <div className="text-white">
//               <div className="text-4xl font-bold mb-2">{destinations.length}</div>
//               <div className="text-lg">Total Photos</div>
//             </div>
//             <div className="text-white">
//               <div className="text-4xl font-bold mb-2">15+</div>
//               <div className="text-lg">Locations</div>
//             </div>
//             <div className="text-white">
//               <div className="text-4xl font-bold mb-2">8</div>
//               <div className="text-lg">Categories</div>
//             </div>
//             <div className="text-white">
//               <div className="text-4xl font-bold mb-2">2+</div>
//               <div className="text-lg">Years of Travel</div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Photo Lightbox */}
//       <PhotoLightbox
//         photos={destinations}
//         currentIndex={currentPhotoIndex}
//         isOpen={isLightboxOpen}
//         onClose={() => setIsLightboxOpen(false)}
//         onNavigate={handleNavigate}
//       />

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white py-12">
//         <div className="container mx-auto px-4 text-center">
//           <h3 className="text-2xl font-bold mb-4">Mamun The Nomad</h3>
//           <p className="text-gray-300 mb-6">Documenting the beauty, culture, and stories of Bangladesh and beyond.</p>
//           <Link href="/">
//             <Button
//               variant="outline"
//               className="bg-white text-gray-800 border-white hover:text-gray-900 hover:shadow-md transition-all duration-200"
//             >
//               Back to Home
//             </Button>
//           </Link>
//         </div>
//       </footer>
//     </div>
//   )
// }
"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import { destinations } from "@/lib/content"
import { PhotoLightbox } from "@/components/photo-lightbox"
import type { TravelDestination } from "@/lib/content"

export default function GalleryPage() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  const handlePhotoClick = (destination: TravelDestination) => {
    const index = destinations.findIndex((d) => d.id === destination.id)
    setCurrentPhotoIndex(index)
    setIsLightboxOpen(true)
  }

  const handleNavigate = (index: number) => {
    setCurrentPhotoIndex(index)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-emerald-600">
            Mamun The Nomad
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Gallery Header */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Complete Photo Gallery</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore all {destinations.length} photographs from my travels across Bangladesh and beyond. Click on any
            photo to view it in full size with detailed information.
          </p>
          <div className="text-emerald-600 font-semibold">
            {destinations.length} Photos • Multiple Locations • Various Adventures
          </div>
        </div>
      </section>

      {/* Complete Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {destinations.map((destination, index) => (
              <Card
                key={destination.id}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => handlePhotoClick(destination)}
              >
                <div className="relative h-64">
                  <Image
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-semibold text-lg mb-1">{destination.title}</h3>
                    <p className="text-sm opacity-90">{destination.location}</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-emerald-600 text-white text-xs px-2 py-1 rounded">
                    #{index + 1}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Stats */}
      <section className="py-20 bg-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-12">Gallery Statistics</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">{destinations.length}</div>
              <div className="text-lg">Total Photos</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-lg">Locations</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">8</div>
              <div className="text-lg">Categories</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-lg">Years of Travel</div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Lightbox */}
      <PhotoLightbox
        photos={destinations}
        currentIndex={currentPhotoIndex}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        onNavigate={handleNavigate}
      />

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Mamun The Nomad</h3>
          <p className="text-gray-300 mb-6">Documenting the beauty, culture, and stories of Bangladesh and beyond.</p>
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
