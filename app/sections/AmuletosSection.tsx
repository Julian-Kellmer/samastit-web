'use client'

import { FxLinkButton } from '../components/FxButton/FxLinkButton'
import ProductCard from '../components/ProductCard'

const masVendidos = [
  {
    title: 'Botella',
    description:
      'Hidratación consciente · Tradición y diseño. Botella de vidrio azul con espiral de cobre puro. Inspirada en saberes ayurvédicos, integra materiales asociados a la purificación, la conservación y el equilibrio. El cobre aporta propiedades naturales y el azul evoca calma, claridad y armonía en cada toma.',
    price: 18000,
    img: '/joyas/botella.jpeg',
  },
 {
    title: 'Kit Espirales Yogamat',
    description:
      'Polaridad · Foco   Dos espirales de cobre para el mat.  Crean polaridad.  Definen puntos. Dirigen la atención.',
    price: 66000,
    img: '/joyas/mat.jpeg',
  },
  {
    title: 'Patron 369',
    description: 'Intención · Foco · Voluntad.\nAnillo-sello de cobre puro con doble imán.',
    price: 66000,
    img: '/joyas/joya3.png',
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
          <h3 className='text-h4 font-light text-white/80 tracking-widest uppercase text-left'>
Ademas de Joyas
          </h3>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 w-full group/grid'>
            {masVendidos.map((joya, i) => (
              <ProductCard
                key={i}
                title={joya.title}
                description={joya.description}
                price={joya.price}
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
