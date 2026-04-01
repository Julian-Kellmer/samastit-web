'use client'

import { FxLinkButton } from '../components/FxButton/FxLinkButton'
import ProductCard from '../components/ProductCard'

const masVendidos = [
  {
    title: 'Chacana',
    description:
      'Puente · Equilibrio · Integración.\n\nAmuleto de cobre puro con doble imán y salto de chispa.\n\nLa chacana es la cruz andina que une cielo, tierra y mundo interior.\n\nSimboliza el equilibrio entre los planos y el orden del universo. Diseñada para acompañar procesos de integración y coherencia interna.',
    price: 60000,
    img: '/joyas/joya18.jpg',
  },
  {
    title: 'Lilith',
    description:
      'Autonomía · Sabiduría instintiva.\n\nTallado en cobre puro con doble imán y salto de chispa.\n\nLilith representa la fuerza original, la autonomía y la voz instintiva no domesticada.\n\nLa serpiente simboliza conocimiento, renovación y energía vital. Un amuleto para quienes eligen escucharse y afirmarse.',
    price: 60000,
    img: '/joyas/joya19.jpg',
  },
  {
    title: 'Patron 369',
    description:
      'Intención · Foco · Voluntad.\nAnillo-sello de cobre puro con doble imán.',
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
          <h3 className='text-h4 text-left'>Más Vendidos</h3>

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
