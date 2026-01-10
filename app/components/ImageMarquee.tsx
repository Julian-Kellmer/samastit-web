'use client'

import Image from 'next/image'
import React from 'react'

interface ImageMarqueeProps {
  images: string[]
  reverse?: boolean
  height?: number
}

const ImageMarquee: React.FC<ImageMarqueeProps> = ({
  images,
  reverse = false,
  height = 375,
}) => {
  if (!images || images.length === 0) return null

  return (
    <div
      className='w-full overflow-hidden whitespace-nowrap select-none pointer-events-none'
      aria-hidden='true'>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 150s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee 300s linear infinite reverse;
        }
      `}</style>

      {/* 
         Height: custom fixed, clamped, or default 375px.
      */}
      <div
        className='flex items-center'
        style={{ height: `min(${height}px, 60vh)` }}>
        <div
          className={`flex w-max ${
            reverse ? 'animate-marquee-reverse' : 'animate-marquee'
          }`}>
          {/* Render images twice for seamless loop */}
          {[...images, ...images].map((src, index) => (
            <div
              key={index}
              className='flex-shrink-0 mx-2' // 16px gap total (8px per side)
              style={{ height: '100%' }}>
              <Image
                width={750}
                height={height}
                src={src}
                alt=''
                className='grayscale-100 object-cover'
                style={{
                  height: '100%',
                  width: 'auto',
                  maxHeight: `${height}px`,
                  maxWidth: '750px',
                }}
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
