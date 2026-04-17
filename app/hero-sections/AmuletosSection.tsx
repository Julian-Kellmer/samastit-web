'use client'

import { FxLinkButton } from '../components/FxButton/FxLinkButton'
import ProductCard from '../components/ProductCard'

const masVendidos = [
   {
    title: 'Pulcera trenzada',
    description:
      'Unión · Resiliencia.\n\nPulsera de cobre macizo trenzado con imanes.\n\nEl trenzado simboliza la fuerza que surge de la unión.',
    img: '/joyas/joya6.png',
  },
    {
    title: 'Patron 369',
    description:
      'Intención · Foco · Voluntad.\n\nAnillo-sello de cobre puro con doble imán.\n\nEl patrón 369 encuadra la Flor de la Vida, concentrando la energía en un punto.\n\nInspirado en la idea de que ciertos números organizan la realidad. Diseñado para anclar intención y dirección.',
    img: '/joyas/joya3.png',
  },
   {
    title: 'Huellas',
    description:
      'Identidad · Vínculo.\n\nAmuleto de cobre puro con doble imán, diseñado para grabar una huella dactilar.\n\nPuede llevar la huella propia como símbolo de autoafirmación o la de alguien querido como vínculo consciente.\n\nUna extensión simbólica de la identidad.',
    img: '/joyas/joya4.png',
  },
]

export default function AmuletosSection() {
  return (
    <section className='relative min-h-screen bg-black text-white  py-24 overflow-hidden layout-wrap'>
      {/* Content Container */}
      <div className='layout-grid relative z-10 h-full'>
        {/* Header Section */}
        <div className='col-span-full md:col-start-2 md:col-end-8 flex flex-col gap-8 mb-24'>
          <h2 className='text-display text-primary uppercase font-bold tracking-tighter leading-none'>
            AMULETOS
          </h2>

          <div className='space-y-6 max-w-2xl'>
            <blockquote className='text-body font-light italic text-white/80 border-l-2 border-primary pl-6'>
              “El objeto ritual es un recordatorio físico de una realidad
              espiritual.” - Carl Jung.
            </blockquote>
          </div>

          <div className='md:self-end h-0 overflow-hidden'>
            {/* Ocultamos temporalmente el boton de comprar superior */}
          </div>
        </div>

        {/* Más Vendidos Section */}
        <div className='col-span-full md:col-start-2 md:col-end-8 flex flex-col gap-8 md:mt-0'>

          <div className='grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8 md:gap-x-8 md:gap-y-12 w-full group/grid px-4 md:px-0'>
            {masVendidos.map((joya, i) => (
              <ProductCard
                key={i}
                title={joya.title}
                description={joya.description}
                img={joya.img}
              />
            ))}
          </div>

          <div className='w-full flex justify-end mt-12'>
            <FxLinkButton href='/joyas'>Ver todos</FxLinkButton>
          </div>
        </div>
      </div>
    </section>
  )
}
