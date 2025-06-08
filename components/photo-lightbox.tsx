// "use client"
// import { useState, useEffect } from "react"
// import type React from "react"

// import Image from "next/image"
// import { X, ChevronLeft, ChevronRight } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import type { TravelDestination } from "@/lib/content"

// interface PhotoLightboxProps {
//   photos: TravelDestination[]
//   currentIndex: number
//   isOpen: boolean
//   onClose: () => void
//   onNavigate: (index: number) => void
// }

// export function PhotoLightbox({ photos, currentIndex, isOpen, onClose, onNavigate }: PhotoLightboxProps) {
//   const [touchStart, setTouchStart] = useState<number | null>(null)
//   const [touchEnd, setTouchEnd] = useState<number | null>(null)

//   const currentPhoto = photos[currentIndex]

//   // Handle keyboard navigation
//   useEffect(() => {
//     if (!isOpen) return

//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (e.key === "Escape") {
//         onClose()
//       } else if (e.key === "ArrowLeft") {
//         handlePrevious()
//       } else if (e.key === "ArrowRight") {
//         handleNext()
//       }
//     }

//     window.addEventListener("keydown", handleKeyDown)
//     return () => window.removeEventListener("keydown", handleKeyDown)
//   }, [isOpen, currentIndex])

//   const handlePrevious = () => {
//     const newIndex = currentIndex > 0 ? currentIndex - 1 : photos.length - 1
//     onNavigate(newIndex)
//   }

//   const handleNext = () => {
//     const newIndex = currentIndex < photos.length - 1 ? currentIndex + 1 : 0
//     onNavigate(newIndex)
//   }

//   // Handle touch events for swipe
//   const handleTouchStart = (e: React.TouchEvent) => {
//     setTouchEnd(null)
//     setTouchStart(e.targetTouches[0].clientX)
//   }

//   const handleTouchMove = (e: React.TouchEvent) => {
//     setTouchEnd(e.targetTouches[0].clientX)
//   }

//   const handleTouchEnd = () => {
//     if (!touchStart || !touchEnd) return

//     const distance = touchStart - touchEnd
//     const isLeftSwipe = distance > 50
//     const isRightSwipe = distance < -50

//     if (isLeftSwipe) {
//       handleNext()
//     } else if (isRightSwipe) {
//       handlePrevious()
//     }
//   }

//   if (!isOpen || !currentPhoto) return null

//   return (
//     <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
//       {/* Close Button */}
//       <Button
//         onClick={onClose}
//         variant="outline"
//         size="icon"
//         className="absolute top-4 right-4 z-10 bg-white/10 border-white/20 text-white hover:bg-white/20"
//       >
//         <X className="w-4 h-4" />
//       </Button>

//       {/* Navigation Buttons */}
//       <Button
//         onClick={handlePrevious}
//         variant="outline"
//         size="icon"
//         className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 border-white/20 text-white hover:bg-white/20"
//       >
//         <ChevronLeft className="w-6 h-6" />
//       </Button>

//       <Button
//         onClick={handleNext}
//         variant="outline"
//         size="icon"
//         className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 border-white/20 text-white hover:bg-white/20"
//       >
//         <ChevronRight className="w-6 h-6" />
//       </Button>

//       {/* Photo Counter */}
//       <div className="absolute top-4 left-4 z-10 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
//         {currentIndex + 1} / {photos.length}
//       </div>

//       {/* Main Content */}
//       <div
//         className="relative max-w-6xl max-h-[90vh] w-full mx-4"
//         onTouchStart={handleTouchStart}
//         onTouchMove={handleTouchMove}
//         onTouchEnd={handleTouchEnd}
//       >
//         <div className="relative w-full h-[70vh]">
//           <Image
//             src={currentPhoto.image || "/placeholder.svg"}
//             alt={currentPhoto.title}
//             fill
//             className="object-contain"
//             priority
//             onError={(e) => {
//               e.currentTarget.src = "/placeholder.svg?height=600&width=800"
//             }}
//           />
//         </div>

//         <div className="mt-6 text-center text-white">
//           <h2 className="text-3xl font-bold mb-2">{currentPhoto.title}</h2>
//           <p className="text-xl text-gray-300 mb-4">{currentPhoto.location}</p>
//         </div>
//       </div>
//     </div>
//   )
// }
"use client"
import { useState, useEffect } from "react"
import type React from "react"

import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { TravelDestination } from "@/lib/content"

interface PhotoLightboxProps {
  photos: TravelDestination[]
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  onNavigate: (index: number) => void
}

export function PhotoLightbox({ photos, currentIndex, isOpen, onClose, onNavigate }: PhotoLightboxProps) {
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const currentPhoto = photos[currentIndex]

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      } else if (e.key === "ArrowLeft") {
        handlePrevious()
      } else if (e.key === "ArrowRight") {
        handleNext()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, currentIndex])

  const handlePrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : photos.length - 1
    onNavigate(newIndex)
  }

  const handleNext = () => {
    const newIndex = currentIndex < photos.length - 1 ? currentIndex + 1 : 0
    onNavigate(newIndex)
  }

  // Handle touch events for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      handleNext()
    } else if (isRightSwipe) {
      handlePrevious()
    }
  }

  if (!isOpen || !currentPhoto) return null

  return (
    <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
      {/* Close Button */}
      <Button
        onClick={onClose}
        variant="outline"
        size="icon"
        className="absolute top-4 right-4 z-10 bg-white/10 border-white/20 text-white hover:bg-white/20"
      >
        <X className="w-4 h-4" />
      </Button>

      {/* Navigation Buttons */}
      <Button
        onClick={handlePrevious}
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 border-white/20 text-white hover:bg-white/20"
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>

      <Button
        onClick={handleNext}
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 border-white/20 text-white hover:bg-white/20"
      >
        <ChevronRight className="w-6 h-6" />
      </Button>

      {/* Photo Counter */}
      <div className="absolute top-4 left-4 z-10 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
        {currentIndex + 1} / {photos.length}
      </div>

      {/* Main Content */}
      <div
        className="relative max-w-6xl max-h-[90vh] w-full mx-4"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative w-full h-[70vh]">
          <Image
            src={currentPhoto.image || "/placeholder.svg"}
            alt={currentPhoto.title}
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="mt-6 text-center text-white">
          <h2 className="text-3xl font-bold mb-2">{currentPhoto.title}</h2>
          <p className="text-xl text-gray-300 mb-4">{currentPhoto.location}</p>
        </div>
      </div>
    </div>
  )
}
