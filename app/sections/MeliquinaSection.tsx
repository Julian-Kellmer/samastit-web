'use client'

import React from 'react'
import ImageMarquee from '../components/ImageMarquee'
import {FxLinkButton} from '../components/FxButton/FxLinkButton'
import {FxActionButton} from '../components/FxButton/FxActionButton'

export default function MeliquinaSection() {
  // Using placeholders as per AboutSection
  const images = [
    '/images/example1.jpg',
    '/images/example2.jpg',
    '/images/example3.jpg',
    '/images/example4.jpg',
    '/images/example5.jpg',
    '/images/example6.jpg',
    '/images/example7.jpg',
  ]

  return (
    <section className='layout-wrap relative min-h-screen bg-black text-white py-24 overflow-hidden'>
      <div className='layout-grid gap-y-12'>
        {/* Header Content */}
        <div className='col-span-full md:col-start-2 md:col-end-12 flex flex-col items-start gap-8 mb-12'>
          <h2 className='text-[3rem] md:text-[8rem] text-primary uppercase font-bold tracking-tighter leading-none font-oswald'>
            EXP.MELIQUINA
          </h2>

          <div className='flex flex-col md:flex-row gap-12 justify-between items-end w-full'>
            <div className='flex flex-col gap-6 max-w-4xl'>
              <h3 className='text-h4 font-light leading-tight'>
                No se trata de conquistar la montaña, sino de permitir que la
                montaña te conquiste a ti
              </h3>
              <p className='text-body text-white/70 max-w-2xl'>
                Complementando la práctica, ofrezco un espacio natural único en
                Meliquina, Patagonia Argentina. Este entorno, construido de
                manera consciente, es el contenedor ideal para experiencias
                profundas: desde estancias personales, donde cada persona se
                conecta con el medio natural según sus propias necesidades,
                hasta retiros de inmersión Samastit y alquileres para terapeutas
                o facilitadores afines que busquen un lugar que potencie su
                trabajo.
              </p>
            </div>

            <div className='flex gap-4 shrink-0'>
              <FxActionButton onClick={() => {}} disabled={false}>Reservar</FxActionButton>
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
          <ImageMarquee
            images={images}
            reverse={true}
            height={350}
          />
        </div>
      </div>
    </section>
  )
}
