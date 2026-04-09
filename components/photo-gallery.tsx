"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { ImageWithSkeleton } from "@/components/image-with-skeleton"

export interface GalleryImage {
  src: string
  alt: string
  title: string
  caption: string
}

interface PhotoGalleryProps {
  images: GalleryImage[]
}

export function PhotoGallery({ images }: PhotoGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const lightboxRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const previouslyFocusedElement = useRef<HTMLElement | null>(null)

  const openLightbox = (index: number) => {
    previouslyFocusedElement.current = document.activeElement as HTMLElement
    setCurrentIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false)
    previouslyFocusedElement.current?.focus()
  }, [])

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }, [images.length])

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }, [images.length])

  // Handle keyboard navigation
  useEffect(() => {
    if (!lightboxOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          closeLightbox()
          break
        case "ArrowLeft":
          goToPrevious()
          break
        case "ArrowRight":
          goToNext()
          break
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [lightboxOpen, closeLightbox, goToPrevious, goToNext])

  // Focus trap
  useEffect(() => {
    if (!lightboxOpen || !lightboxRef.current) return

    // Focus the close button when lightbox opens
    closeButtonRef.current?.focus()

    const lightbox = lightboxRef.current
    const focusableElements = lightbox.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault()
          lastElement?.focus()
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault()
          firstElement?.focus()
        }
      }
    }

    document.addEventListener("keydown", handleTabKey)
    return () => document.removeEventListener("keydown", handleTabKey)
  }, [lightboxOpen])

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [lightboxOpen])

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => openLightbox(index)}
            className="group relative aspect-[4/3] overflow-hidden rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-100"
          >
            <ImageWithSkeleton
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-stone-900/0 transition-all duration-300 group-hover:bg-stone-900/50 group-focus-visible:bg-stone-900/50">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                <h3 className="text-lg font-medium text-stone-50 mb-1 text-balance">
                  {image.title}
                </h3>
                <p className="text-sm text-stone-200 text-pretty line-clamp-2">
                  {image.caption}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          ref={lightboxRef}
          role="dialog"
          aria-modal="true"
          aria-label={`Image: ${images[currentIndex].title}`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/95 animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeLightbox()
          }}
        >
          {/* Close Button */}
          <button
            ref={closeButtonRef}
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 p-2 text-stone-400 hover:text-stone-100 transition-colors rounded-full hover:bg-stone-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-500"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 z-10 p-2 text-stone-400 hover:text-stone-100 transition-colors rounded-full hover:bg-stone-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-500"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="absolute right-4 z-10 p-2 text-stone-400 hover:text-stone-100 transition-colors rounded-full hover:bg-stone-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-500"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Image Container */}
          <div className="relative max-w-5xl max-h-[85vh] w-full mx-4 md:mx-16">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                fill
                sizes="100vw"
                className="object-contain"
                quality={100}
                unoptimized
                priority
              />
            </div>
            
            {/* Caption */}
            <div className="mt-4 text-center px-4">
              <h2 className="text-xl font-medium text-stone-100 mb-1">
                {images[currentIndex].title}
              </h2>
              <p className="text-sm text-stone-400">
                {images[currentIndex].caption}
              </p>
              <p className="text-xs text-stone-600 mt-3">
                {currentIndex + 1} / {images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
