'use client'

import Image from 'next/image'
import SamastitCard from '../samastit/_components/SamastitCard'
import {FxLinkButton} from '../components/FxButton/FxLinkButton'

export default function AmuletosSection() {
  return (
    <section className='relative min-h-screen bg-black text-white  py-24 overflow-hidden layout-wrap'>
      {/* Background Images */}
      <div className='absolute bottom-[-45%] left-0 -translate-y-1/2 w-[40vw] h-[80vh] z-0 opacity-80 pointer-events-none'>
        <Image
          src='/images/recortada.png'
          alt='Amuletos Background Left'
          fill
          className='object-contain object-left opacity-35'
        />
      </div>
      <div className='absolute top-0 right-0 -translate-y-1/2 w-[40vw] h-[80vh] z-0 opacity-80 pointer-events-none'>
        <Image
          src='/images/recortada2.png'
          alt='Amuletos Background Right'
          fill
          className='object-contain object-left opacity-35'
        />
      </div>

      {/* Content Container */}
      <div className='layout-grid relative z-10 h-full'>
        {/* Header Section */}
        <div className='col-span-full md:col-start-2 md:col-end-8 flex flex-col gap-8 mb-24'>
          <h2 className='text-display text-primary uppercase font-bold tracking-tighter leading-none'>
            AMULETOS
          </h2>

          <div className='space-y-6 max-w-2xl'>
            <blockquote className='text-h5 font-light italic text-white/80 border-l-2 border-primary pl-6'>
              “El objeto ritual es un recordatorio físico de una realidad
              espiritual.” - Carl Jung.
            </blockquote>

            <p className='text-body text-white/70 pl-6'>
              Los Amuletos{' '}
              <span className='text-primary font-bold'>Samastit</span> son
              herramientas de consciencia. Son piezas que se transforman en
              puente entre tu práctica y la vida diaria, a través de la
              intención.
            </p>
          </div>

          <div className='md:self-end'>
            <FxLinkButton href='/joyas'>Comprar</FxLinkButton>
          </div>
        </div>

        {/* Cards Section */}
        <div className=' col-span-full md:col-start-2 md:col-end-8 flex flex-col gap-12'>
          <h3 className='text-center text-h4 font-light text-white/80 uppercase tracking-widest'>
            Metales elegidos con intencion
          </h3>

          <div className='container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 md:mb-32 max-w-6xl'>
            <SamastitCard
              title='Oro'
              description='Patrones de tensión y desequilibrio.'>
              {/* Abstract Lines Icon Placeholder */}
              <svg
                className='w-16 h-16'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='1'>
                <path d='M4 20v-5h16v5M4 10V5h16v5' />
              </svg>
            </SamastitCard>

            <SamastitCard
              title='Plata'
              description='Afina la intuicion y calma la mente.'>
              {/* Dots/Circle Icon Placeholder */}
              <svg
                className='w-16 h-16'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='1'>
                <circle
                  cx='12'
                  cy='12'
                  r='8'
                  strokeDasharray='4 4'
                />
                <circle
                  cx='12'
                  cy='12'
                  r='2'
                />
              </svg>
            </SamastitCard>

            <SamastitCard
              title='Bronce'
              description='Conductor ancetral, activa y equilibra el flujo de vida.'>
              {/* Grid/Mesh Icon Placeholder */}
              <svg
                className='w-16 h-16'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='1'>
                <path d='M4 4h16v16H4z M8 4v16M16 4v16M4 8h16M4 16h16' />
              </svg>
            </SamastitCard>
          </div>
        </div>
      </div>
    </section>
  )
}
