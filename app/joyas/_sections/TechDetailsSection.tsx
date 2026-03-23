import React from 'react'
import Image from 'next/image'

export default function TechDetailsSection() {
  return (
    <section className='col-span-full relative w-full py-32 overflow-hidden bg-black text-white h-[150svh]'>
      {/* Decorative Backgrounds specifically for this section */}
      <div className='absolute   bottom-[-40svh] right-0 w-[50vw] md:w-[40vw] h-full z-0 opacity-80 pointer-events-none'>
        <Image
          src='/images/recortada.png'
          alt='Background Left'
          fill
          className='object-contain object-left opacity-25'
        />
      </div>
      <div className='absolute top-[-40svh] left-0 w-[50vw] md:w-[40vw] h-full z-0 opacity-80 pointer-events-none'>
        <Image
          src='/images/recortada2.png'
          alt='Background Right'
          fill
          className='object-contain object-right opacity-25'
        />
      </div>

      {/* Content */}
      <div className='layout-grid relative z-10'>
        {/* Item 1: Salto de chispa */}
        <div className='col-span-full md:col-start-2 md:col-end-8 max-w-xl flex flex-col gap-6 md:mb-16 mb-12'>
          <h2 className='text-h2 uppercase text-primary'>
            Salto de chispa
          </h2>
          <p className='text-body'>
            El “salto de chispa” es una apertura controlada en la pieza. No cumple una función decorativa: interrumpe el circuito continuo del metal y genera un punto de tensión y reencuentro del flujo. Esa microinterrupción crea un campo dinámico en lugar de uno cerrado y estático. En términos simbólicos, representa el momento en que la energía no se acumula ni se bloquea, sino que se reactiva.
          </p>
        </div>

        {/* Item 2: Imanes en los extremos */}
        <div className='col-span-full md:col-start-5 md:col-span-3 flex flex-col gap-6 md:mt-16 text-right md:text-end items-end md:items-start'>
          <h2 className='text-h2 uppercase text-primary'>
            Imanes en los extremos
          </h2>
          <p className='text-body'>
            Los imanes ubicados en los extremos crean un campo polarizado entre dos puntos. Esta polaridad genera una leve tensión magnética que muchas personas perciben como circulación, descarga de estática o mayor presencia corporal. Desde el diseño, la lógica es clara: dos polos crean dirección. Y la dirección genera orden. Simbólicamente, es la integración de opuestos que encuentra un centro.
          </p>
        </div>
      </div>
    </section>
  )
}
