import React from 'react'
import ImageMarquee from '../components/ImageMarquee'
import SamastitCard from './_components/SamastitCard'
import TextRevealOnScroll from '../components/TextRevealOnScroll/TextRevealOnScroll'
import PricingCard from './_components/PricingCard'

const page = () => {
  // Sample images for this page
  const samastitImages = [
    '/images/example1.jpg',
    '/images/example2.jpg',
    '/images/example3.jpg',
    '/images/example4.jpg',
  ]

  return (
    <section className='min-h-screen bg-black text-white'>
      {/* HEADER SECTION */}
      <div className='container px-4 pt-20 pb-10 flex flex-col items-start  h-[80svh] justify-center'>
        <h1 className='text-display text-[5rem] md:text-[8rem] font-bold leading-none text-red-600 uppercase mb-4'>
          SAMASTIT
        </h1>
        <p className='text-body  '>
          “Tu equilibrio es una habilidad y se puede entrenar con práctica.”
        </p>
      </div>

      {/* MARQUEE */}
      <div className='w-full mb-20 space-y-4'>
        <ImageMarquee images={samastitImages} />
        {/* Optional: Second reverse marquee if desired, but request said "only one image marquee" */}
      </div>

      {/* DESCRIPTION TEXT */}
      <div className='layout-wrap mx-auto px-4 mb-32 max-w-6xl'>
        <section
          id='description'
          className='md:mt-16 mt-8 h-screen md:h-50svh flex items-center md:col-start-3 md:col-end-[-3] col-span-full'>
          <TextRevealOnScroll
            as='h2'
            className='text-h2 text-center'
            text={`Samstit es una práctica corporal consciente que entrena tu sistema
          nervioso para encontrar equilibrio. Parte del mismo principio que la
          postura de yoga Samasthithi.Samastit no es una práctica de posturas,
          es un entrenamiento físico de autoconocimiento que te enseña a leer
          las señales de tu cuerpo como un escáner. A través de la práctica
          cotidiana aprendés a`}
          />
        </section>
      </div>

      {/* CARDS SECTION (Reconocer, Ajustar, Intervenir) */}
      <div className='z-10 container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mb-32 max-w-6xl'>
        <SamastitCard
          title='Reconocer'
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
          title='Ajustar'
          description='Con intención, la respiración, postura y movimientos.'>
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
          title='Intervenir'
          description='Para devolverte a un estado natural de equilibrio.'>
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

      {/* INTERVENIR DEEP DIVE SECTION */}
      <div className='container mx-auto px-4 mb-32 max-w-6xl'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          {/* Image Side */}
          <div className='relative aspect-video md:aspect-[4/3] w-full overflow-hidden grayscale'>
            {/* Use a real image here preferably */}
            <div className='absolute inset-0 bg-neutral-800 flex items-center justify-center text-neutral-600'>
              IMAGE PLACEHOLDER
            </div>

            {/* If using img tag: <img src="..." className="w-full h-full object-cover" /> */}
          </div>

          {/* Text Side */}
          <div className='space-y-6'>
            <h2 className='text-3xl font-bold'>
              ¿Qué significa “intervenir” en Samastit?
            </h2>
            <div className='space-y-4 text-gray-400 font-light text-sm md:text-base leading-relaxed'>
              <p>
                Significa aplicar un ajuste consciente en el momento preciso.
                Usar la intención para dirigir tu energía.
              </p>
              <p>
                En Samastit, intervenir es una práctica activa –en las posturas,
                en la respiración, en cada transición– y también receptiva –en
                la entrega final de Savasana– donde todo se integra.
              </p>
              <p>
                El resultado es simple y profundo: dejás de reaccionar de manera
                automática ante la tensión y empezás a responder con conciencia,
                a intervenir con intención.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* INTRO TO WORKSHOPS */}
      <div className='container mx-auto px-4 text-center mb-24 max-w-4xl'>
        <p className='text-2xl md:text-3xl font-light leading-snug'>
          También ofrezco talleres presencial de ajustes de Ashtanga en CABA,
          donde exploramos la técnica de ajustes desde la intervención
          consciente.
        </p>
      </div>

      {/* PRICING / OPTIONS */}
      {/* PRICING / OPTIONS */}
      <div className='container mx-auto px-4 mb-32 border-t border-white/10 pt-16'>
        <div className='mb-12 text-center'>
          <h2 className='text-3xl md:text-5xl font-bold mb-4 uppercase text-display text-white tracking-widest'>
            Planes
          </h2>
          <p className='text-neutral-400 max-w-2xl mx-auto'>
            Selecciona la modalidad que mejor se adapte a tu búsqueda de
            equilibrio.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          <PricingCard
            title='Individual'
            price='600.000$'
            isHighlight={true}
            features={[
              'Presencial',
              'Duración 90min',
              'Análisis postural',
              'Ajustes personalizados',
            ]}
          />

          <PricingCard
            title='Grupal'
            price='200.000$'
            buttonText='Unirme'
            features={[
              'Máximo 5 personas',
              'Por clase suelta',
              'Zona Palermo/Recoleta',
              'Atención semipersonalizada',
            ]}
          />

          <PricingCard
            title='Pack Mensual'
            price='Consultar'
            buttonText='Consultar'
            features={[
              '4 Clases grupales',
              'Seguimiento semanal',
              'Acceso a comunidad',
              'Descuento en talleres',
            ]}
          />

          <PricingCard
            title='Talleres'
            price='Consultar'
            buttonText='Ver fechas'
            features={[
              'Ajustes de Ashtanga',
              'Intensivos de fin de semana',
              'Teoría y práctica',
              'Certificado de asistencia',
            ]}
          />
        </div>
      </div>
    </section>
  )
}

export default page
