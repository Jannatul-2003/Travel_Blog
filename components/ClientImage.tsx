"use client"

import Image, { ImageProps } from "next/image"
import { useState } from "react"

type ClientImageProps = ImageProps & {
  fallbackSrc?: string
}

export default function ClientImage({
  src,
  fallbackSrc = "/placeholder.svg",
  ...props
}: ClientImageProps) {
  const [imgSrc, setImgSrc] = useState(src)

  return (
    <Image
      {...props}
      src={imgSrc}
      onError={() => setImgSrc(fallbackSrc)}
    />
  )
}
