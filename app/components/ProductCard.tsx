'use client'

import React, { useState } from 'react'
import { FxActionButton } from './FxButton/FxActionButton'
import Image from 'next/image'

interface ProductCardProps {
  title: string
  description?: string
  price?: number
  tag?: string
  children?: React.ReactNode
  img?: string
}

function ProductModal({
  title,
  description,
  price,
  tag,
  img,
  children,
  onClose,
}: ProductCardProps & { onClose: () => void }) {
  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm'
      onClick={onClose}>
      <div
        className='relative bg-[#1a1a1a] rounded-xl overflow-hidden max-w-lg w-full max-h-[90vh] overflow-y-auto'
        onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button
          onClick={onClose}
          className='absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors'>
          <span className='text-white text-lg leading-none'>×</span>
        </button>

        {/* Image */}
        <div className='relative aspect-square w-full'>
          {tag && (
            <div className='absolute top-3 left-3 px-3 py-1 bg-[#D97777] rounded-full z-10'>
              <span className='text-[10px] uppercase font-bold text-black block leading-none'>
                {tag}
              </span>
            </div>
          )}
          <div className='absolute inset-0 flex items-center justify-center'>
            {children}
            {img && (
              <Image
                fill
                src={img}
                alt={title}
                className='object-cover w-full h-full'
              />
            )}
          </div>
        </div>

        {/* Info */}
        <div className='flex flex-col gap-2 p-5'>
          <h3 className='text-h6 text-white'>{title}</h3>

          {description && (
            <p className='text-body text-white/70 text-sm'>{description}</p>
          )}

          {price && (
            <div className='flex items-center justify-between mt-2'>
              <span className='text-sm font-mono text-white/80'>
                ${price.toLocaleString('es-AR')}
              </span>
              <FxActionButton
                onClick={() => {
                  window.open(
                    `https://wa.me/+5491158044328?text=Hola,%20quiero%20consultar%20por:%20${encodeURIComponent(title)}`,
                    '_blank'
                  )
                }}
                disabled={false}>
                Contactar
              </FxActionButton>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function ProductCard({
  title,
  description,
  price,
  tag,
  children,
  img,
}: ProductCardProps) {
  const [modalOpen, setModalOpen] = useState(false)

  const isTruncated = description && description.length > 100
  const shortDescription = isTruncated
    ? description!.slice(0, 100).trimEnd() + '…'
    : description

  return (
    <>
      <div className='flex flex-col gap-3 cursor-pointer transition-transform duration-300 hover:scale-105'>
        {/* Image */}
        <div className='relative aspect-square w-full rounded-lg overflow-hidden'>
          {tag && (
            <div className='absolute top-3 left-3 px-3 py-1 bg-[#D97777] rounded-full z-10'>
              <span className='text-[10px] uppercase font-bold text-black block leading-none'>
                {tag}
              </span>
            </div>
          )}
          <div className='absolute inset-0 flex items-center justify-center'>
            {children}
            {img && (
              <Image
                fill
                src={img}
                alt={title}
                className='object-cover w-full h-full'
              />
            )}
          </div>
        </div>

        {/* Info */}
        <div className='flex flex-col gap-1'>
          <h3 className='text-h6 text-white'>{title}</h3>

          {shortDescription && (
            <p className='text-body text-white/70 text-sm'>
              {shortDescription}
              {isTruncated && (
                <button
                  onClick={() => setModalOpen(true)}
                  className='ml-1 text-red-600 underline underline-offset-2 text-sm hover:text-red-500 transition-colors'>
                  ver más
                </button>
              )}
            </p>
          )}

          {price && (
            <div className='flex items-center justify-between mt-1'>
              <span className='text-sm font-mono text-white/80'>
                ${price.toLocaleString('es-AR')}
              </span>
              <FxActionButton
                onClick={() => {
                  window.open(
                    `https://wa.me/+5491158044328?text=Hola,%20quiero%20consultar%20por:%20${encodeURIComponent(title)}`,
                    '_blank'
                  )
                }}
                disabled={false}>
                Contactar
              </FxActionButton>
            </div>
          )}
        </div>
      </div>

      {modalOpen && (
        <ProductModal
          title={title}
          description={description}
          price={price}
          tag={tag}
          img={img}
          onClose={() => setModalOpen(false)}>
          {children}
        </ProductModal>
      )}
    </>
  )
}
