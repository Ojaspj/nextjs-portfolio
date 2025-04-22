"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

interface ImageGalleryProps {
  images: string[]
  alt: string
}

export default function ImageGallery({ images, alt }: ImageGalleryProps) {
  const [open, setOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleImageClick = (index: number) => {
    setCurrentIndex(index)
    setOpen(true)
  }

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      handlePrevious()
    } else if (e.key === "ArrowRight") {
      handleNext()
    }
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-full h-[200px] rounded-lg overflow-hidden border border-muted/40 cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-primary/30"
            onClick={() => handleImageClick(index)}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`${alt} screenshot ${index + 1}`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-background/0 hover:bg-background/10 transition-colors duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
              <span className="bg-background/80 text-foreground px-3 py-1 rounded-full text-sm font-medium">
                View larger
              </span>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="max-w-[90vw] w-[1200px] p-0 bg-background/95 backdrop-blur-sm"
          onKeyDown={handleKeyDown}
        >
          <DialogClose className="absolute right-4 top-4 z-10">
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-background/80">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </DialogClose>

          <div className="relative h-[80vh] w-full flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative h-full w-full"
              >
                <Image
                  src={images[currentIndex] || "/placeholder.svg"}
                  alt={`${alt} screenshot ${currentIndex + 1}`}
                  fill
                  className="object-contain"
                />
              </motion.div>
            </AnimatePresence>

            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 h-10 w-10 rounded-full bg-background/80"
              onClick={handlePrevious}
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Previous image</span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 h-10 w-10 rounded-full bg-background/80"
              onClick={handleNext}
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Next image</span>
            </Button>
          </div>

          <div className="p-4 bg-background border-t">
            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                Image {currentIndex + 1} of {images.length}
              </div>
              <div className="flex gap-2">
                {images.map((_, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="sm"
                    className={cn(
                      "h-8 w-8 p-0 rounded-full",
                      currentIndex === index && "bg-primary text-primary-foreground hover:bg-primary/90",
                    )}
                    onClick={() => setCurrentIndex(index)}
                  >
                    {index + 1}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
