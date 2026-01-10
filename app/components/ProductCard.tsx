'use client'

import React, { useState, useEffect, useRef } from 'react'

interface ProductCardProps {
  title: string
  description?: string
  price?: number
  tag?: string
  children?: React.ReactNode
  img?: string
}

export default function ProductCard({
  title,
  description,
  price,
  tag,
  children,
  img,
}: ProductCardProps) {
  const [isOpen, setIsOpen] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  // Auto-close when out of viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setIsOpen(false)
        }
      },
      { threshold: 0.1 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  const handleInfoClick = (e: React.MouseEvent) => {
    e.stopPropagation() // Prevent triggering card click if handled elsewhere
    setIsOpen(!isOpen)
  }

  return (
    <div
      ref={cardRef}
      className={`flex flex-col gap-3 group cursor-pointer transition-all duration-300
        ${
          isOpen
            ? 'filter-none scale-105 opacity-100 z-30'
            : 'group-hover/grid:blur-[2px] group-hover/grid:scale-95 group-hover/grid:opacity-50 hover:!filter-none hover:!scale-105 hover:!opacity-100 hover:z-30'
        }
      `}>
      {/* Image Container with Badge */}
      <div className='relative aspect-square w-full rounded-lg overflow-hidden  transition-all duration-300 '>
        {/* Darkening Overlay */}
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 z-10
          ${isOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
        `}
        />

        {/* Content Overlay */}
        <div
          className={`absolute inset-0 p-6 flex flex-col justify-center items-center text-center transition-opacity duration-300 z-20
          ${isOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
        `}>
          <p className='text-body text-white/90'>
            {description || 'Descripción del amuleto...'}
          </p>
        </div>

        {/* Badge */}
        {tag && (
          <div className='absolute top-3 left-3 px-3 py-1 bg-[#D97777] rounded-full z-20'>
            <span className='text-[10px] uppercase font-bold text-black block leading-none'>
              {tag}
            </span>
          </div>
        )}

        {/* Info Button */}
        <div
          onClick={handleInfoClick}
          className={`absolute top-3 right-3 w-8 h-8 rounded-full backdrop-blur-md flex items-center justify-center border transition-colors z-20 cursor-pointer
          ${
            isOpen
              ? 'bg-white/20 border-white/40' // Active state style
              : 'bg-white/10 border-white/20 group-hover:bg-white/20'
          }
        `}>
          <span className='text-xs font-bold text-white'>!</span>
        </div>

        {/* Visual Content (Image or Icon) */}
        <div className='absolute inset-0 flex items-center justify-center'>
          {children}
          {img && (
            <img
              src={img}
              alt={title}
              className='object-cover w-full h-full'
            />
          )}
        </div>
      </div>

      {/* Product Info */}
      <div className='flex flex-col gap-1'>
        {/* Title & Price Row */}
        <div className='flex justify-between items-baseline'>
          <h3 className='text-h6 text-white group-hover:underline decoration-white/50 '>
            {title}
          </h3>
          {price && (
            <div className='relative px-3 py-1 bg-white/10 rounded hover:bg-[var(--color-primary)] transition-all duration-300 overflow-hidden group/price min-w-[70px] text-center'>
              <span className='block text-xs font-mono text-white/80 transition-transform duration-300 group-hover/price:-translate-y-[150%]'>
                {price}
              </span>
              <span className='absolute inset-0 flex items-center justify-center text-[10px] font-bold uppercase text-white translate-y-full group-hover/price:translate-y-0 transition-transform duration-300'>
                Comprar
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
