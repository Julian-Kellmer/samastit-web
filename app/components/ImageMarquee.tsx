'use client'

import Image from 'next/image'
import React, { useRef } from 'react'

interface ImageMarqueeProps {
  images: string[]
  height?: number
}

const ImageMarquee: React.FC<ImageMarqueeProps> = ({
  images,
  height = 375,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  if (!images || images.length === 0) return null

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' })
    }
  }

  const displayImages = [...images, ...images, ...images, ...images]

  return (
    <div
      className='relative w-full overflow-hidden group select-none'
      aria-hidden='true'>
      
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <button
        onClick={scrollLeft}
        aria-label="Anterior"
        className='absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/90 hover:scale-105 active:scale-95'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
      </button>

      <button
        onClick={scrollRight}
        aria-label="Siguiente"
        className='absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/90 hover:scale-105 active:scale-95'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </button>

      <div
        className='flex items-center h-[280px] md:h-[var(--marquee-height)]'
        style={{ '--marquee-height': `min(${height}px, 60vh)` } as React.CSSProperties}>
        <div
          ref={scrollContainerRef}
          className='flex w-full h-full py-4 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar'>
          {displayImages.map((src, index) => (
            <div
              key={index}
              className='flex-shrink-0 mx-2 relative h-full snap-center'
              style={{ aspectRatio: '3 / 4' }}>
              <Image
                fill
                sizes="(max-width: 768px) 50vw, 30vw"
                src={src}
                alt=''
                className=' object-cover rounded-md'
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ImageMarquee
