'use client'

import React, { useState } from 'react'
import MeliquinaAccordion from '../meliquina/_components/MeliquinaAccordion'
// import Button from '../components/Button'
import { FxActionButton } from '../components/FxButton/FxActionButton'
import { createCheckout } from '../services/n8n/checkout'
export default function AshtangaSection() {
  const [activeItem, setActiveItem] = useState<string | null>('info')

  const accordionItems = [
    {
      id: 'info',
      number: '01',
      title: 'Ashtanga Info',
      content: (
        <div className='flex flex-col gap-6 w-full min-h-[50svh] text-white'>
          <h3 className='text-h4 md:text-h3 font-light leading-tight'>
            Durante diecisiete años sostuve una comunidad en mi escuela y en
            seminarios internacionales.
          </h3>
          <div className='flex gap-6'>
            <div className='flex-2 relative w-1/2 aspect-video bg-white/10 rounded-lg overflow-hidden flex items-center justify-center group cursor-pointer'>
              {/* Video Placeholder */}
              <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent' />
              <div className='w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                <svg
                  className='w-6 h-6 ml-1 fill-white'
                  viewBox='0 0 24 24'>
                  <path d='M8 5v14l11-7z' />
                </svg>
              </div>
            </div>

            <div className='flex-1 flex flex-col h-full justify-between '>
              <p className='text-body text-white/60'>
                Hoy sigo otro rumbo, decidi sintetizar esa experiencia en una
                serie de videos y un PDF complementario, como una forma de
                compartir lo aprendido con quienes transitan ese camino.
              </p>
              <p className='text-body text-white/60'>
                Este material está dirigido a practicantes avanzados y maestros
                que desean profundizar en la práctica de las Series Primaria e
                Intermedia.
              </p>
              <p className='text-body text-white/40 italic'>
                No es una clase. Es una guía práctica.
              </p>
              <div className=''>
                <FxActionButton
                  onClick={() => setActiveItem('price')}
                  disabled={false}>
                  comprar
                </FxActionButton>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'price',
      number: '02',
      title: 'Ahstanga Price',
      content: (
        <div className='flex flex-col w-full h-screen gap-8 text-white p-4 justify-between'>
          <p className='text-h5 font-light leading-snug w-full'>
            También ofrezco talleres presencial de ajustes de Ashtanga en CABA,
            donde exploramos la técnica de ajustes desde la intervención
            consciente.
          </p>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 w-full flex-1'>
            {/* Option 1: Basico */}
            <div className='flex flex-col gap-4 border-l border-white/10 pl-6 relative group justify-between'>
              <div>
                <h4 className='text-h4 font-medium'>Basico</h4>
                <p className='text-h5 font-medium text-[#ff0000] tracking-tighter'>
                  120.000$
                </p>
                <ul className='space-y-2 text-tiny text-white/70 mt-4'>
                  <li className='flex items-center gap-2'>
                    <span className='text-white'>✓</span> Videos series 1 & 2
                  </li>
                  <li className='flex items-center gap-2'>
                    <span className='text-white'>✓</span> PDF Complementario
                  </li>
                </ul>
              </div>
              <div>
                <FxActionButton
                  onClick={() =>
                    createCheckout({
                      productId: 'test-joya-001',
                      productName: 'Ashtanga Basico',
                      price: 120,
                      currency: 'USD',
                      quantity: 1,
                      customer: {
                        email: 'test@mail.com',
                        name: 'julian kellmer',
                      },
                    })
                  }
                  disabled={false}>
                  hacer test
                </FxActionButton>
              </div>
            </div>

            {/* Option 2: Complementario */}
            <div className='flex flex-col gap-4 border-l border-white/10 pl-6 relative group justify-between'>
              <div>
                <h4 className='text-h4 font-medium'>Complementario</h4>
                <p className='text-h5 text-[#ff0000] tracking-tighter'>
                  200.000$
                </p>
                <ul className='space-y-2 text-tiny text-white/70 mt-4'>
                  <li className='flex items-center gap-2'>
                    <span className='text-white'>✓</span> Videos series 1 & 2
                  </li>
                  <li className='flex items-center gap-2'>
                    <span className='text-white'>✓</span> PDF Complementario
                  </li>
                  <li className='flex items-center gap-2'>
                    <span className='text-white'>✓</span> Sesion individual para
                    profundizar
                  </li>
                </ul>
              </div>
              <div>
                <FxActionButton
                  onClick={() => {}}
                  disabled={false}>
                  Comprar
                </FxActionButton>
              </div>
            </div>

            {/* Option 3: Otro */}
            <div className='flex flex-col gap-4 border-l border-white/10 pl-6 relative group justify-between'>
              <div>
                <h4 className='text-h4 font-medium'>Otro</h4>
                <p className='text-h5 font-medium text-[#ff0000] tracking-tighter'>
                  Consultar
                </p>
                <ul className='space-y-2 text-tiny text-white/70 mt-4'>
                  <li className='flex items-center gap-2'>
                    <span className='text-white'>✓</span> Taller precencial de
                    ajustes
                  </li>
                </ul>
              </div>
              <div>
                <FxActionButton
                  onClick={() => {}}
                  disabled={false}>
                  Comprar
                </FxActionButton>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section className='relative min-h-screen bg-black text-white py-24 layout-wrap'>
      <div className='layout-grid'>
        {/* Layout: constrained to col 2-8 as requested */}
        <div className='col-span-full md:col-start-2 md:col-end-8 flex flex-col gap-12'>
          <h2 className='text-display text-red-600 uppercase font-bold tracking-tighter leading-none'>
            ASHTANGA
          </h2>

          {/* Accordion Component */}
          <div className='w-full'>
            <MeliquinaAccordion
              items={accordionItems}
              activeId={activeItem}
              onToggle={setActiveItem}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
