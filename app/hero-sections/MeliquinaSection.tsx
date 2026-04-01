'use client'

import React from 'react'
import ImageMarquee from '../components/ImageMarquee'
import { FxLinkButton } from '../components/FxButton/FxLinkButton'
import { FxActionButton } from '../components/FxButton/FxActionButton'
import Link from 'next/link'

export default function MeliquinaSection() {
  // Using placeholders as per AboutSection
  const images = [
    '/meliquina/2.jpg',
    '/meliquina/3.jpg',
    '/meliquina/4.jpg',
    '/meliquina/6.jpg',
    '/meliquina/1.jpg', // Replace with real paths
    '/meliquina/7.jpg',
    '/meliquina/8.jpeg',
    '/meliquina/9.jpeg',
    '/meliquina/10.jpeg',
    '/meliquina/11.jpeg',
  ]

  return (
    <section className='layout-wrap relative min-h-screen bg-black text-white py-24 overflow-hidden'>
      <div className='layout-grid gap-y-12'>
        {/* Header Content */}
        <div className='col-span-full md:col-start-1 md:col-end-12 flex flex-col items-start gap-4  mb-12'>
          <h2 className='text-display text-primary uppercase font-bold tracking-tighter leading-none font-oswald'>
            MELIQUINA
          </h2>

          <div className='flex flex-col md:flex-row  justify-between items-end w-full'>
            <div className='flex flex-col  max-w-4xl'>
              <h3 className='text-body '>
                No se trata de conquistar la montaña, sino de permitir que la
                montaña te conquiste a ti
              </h3>
              
            </div>

            <div className='flex flex-wrap gap-4 shrink-0'>
              <Link href='/meliquina/form'>
                <FxActionButton
                  onClick={() => {}}
                  disabled={false}>
                  Reservar
                </FxActionButton>
              </Link>
              <FxLinkButton href='/meliquina'>Ver más</FxLinkButton>
            </div>
          </div>
        </div>

        {/* Marquees */}
        <div className='col-span-full flex flex-col gap-8'>
          <ImageMarquee
            images={images}
            height={350}
          />
          
        </div>
      </div>
    </section>
  )
}
