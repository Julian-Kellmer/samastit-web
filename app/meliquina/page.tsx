'use client'
import React from 'react'
import ImageMarquee from '../components/ImageMarquee'
import MeliquinaAccordion from './_components/MeliquinaAccordion'
import { FxActionButton } from '../components/FxButton/FxActionButton'
import TextRevealOnScroll from '../components/TextRevealOnScroll/TextRevealOnScroll'
import Image from 'next/image'
import Link from 'next/link'
const page = () => {
  // Sample images - Replace these with your actual image URLs
  const sampleImages = [
    '/meliquina/1.jpg', // Replace with real paths
    '/meliquina/2.jpg',
    '/meliquina/3.jpg',
    '/meliquina/4.jpg',
    '/meliquina/5.jpg',
    '/meliquina/6.jpg',
    '/meliquina/7.jpg',
    '/meliquina/8.jpeg',
    '/meliquina/9.jpeg',
    '/meliquina/10.jpeg',
    '/meliquina/11.jpeg',
  ]

  return (
    <section className='min-h-screen bg-black text-white'>
      <div className='container flex flex-col items-start px-4 py-12 text-center h-[80svh] justify-center'>
        <h1 className='text-display text-5xl font-bold mb-4'>EXP.MELIQUINA</h1>
        <p className='text-body text-xl text-gray-300 mb-12'>
          La naturaleza como maestra
        </p>
      </div>

      {/* Marquee Section */}
      <div className='w-full space-y-4'>
        <ImageMarquee images={sampleImages} />
        <ImageMarquee
          images={sampleImages}
          reverse={true}
          height={300}
        />
      </div>

      <section
        id='description'
        className='md:px-8 mt-8 min-h-[50svh] flex flex-col items-center col-span-full gap-16'>
        <div className='max-w-4xl text-center h-[80svh] flex justify-center items-center  '>
          <h2 className='text-h4'>
            <TextRevealOnScroll text='Con el paso de los años, el espacio se fue ampliando y completando con distintos elementos que hoy forman parte de la experiencia. El domo, el sauna, la pileta junto al sauna intervenida con cobre y el arroyo cumplen una función concreta dentro del lugar. La propuesta es que puedas conocer qué aporta cada espacio y cómo puede ser vivido según la intención de quien lo habita.' />
          </h2>
        </div>

        {/* Elements Accordion */}
        <div className='w-full '>
          <MeliquinaAccordion
            items={[
              {
                id: 'title',
                number: '00',
                title: 'intro',
                content: (
                  <h2 className='text-[4rem] md:text-[8rem] leading-none text-primary font-bold mb-8 md:mb-12 text-center md:text-left uppercase'>
                    Espacios <br />
                    Meliquina
                  </h2>
                ),
              },
              {
                id: 'domo',
                number: '01',
                title: 'Domo',
                content: (
                  <div className='flex flex-col md:flex-row gap-8 md:gap-12 w-full items-center'>
                    <div className='w-full md:w-1/2 relative h-[50vh] min-h-[400px] rounded-[2rem] overflow-hidden'>
                      <Image
                        fill
                        src='/images/Domo.png'
                        alt='Elementos Meliquina'
                        className='object-cover'
                      />
                    </div>
                    <div className='w-full md:w-1/2 flex flex-col gap-6 md:pl-8'>
                      <span className='text-sm uppercase tracking-widest text-gray-400'>
                        Elementos Meliquina
                      </span>
                      <h2 className='text-[3rem] md:text-[4.5rem] leading-[1] text-primary font-bold uppercase'>
                        Domo
                      </h2>
                      <p className='text-body text-lg text-gray-300 leading-relaxed max-w-xl'>
                        El domo es el corazón del espacio. Su geometría sagrada
                        crea un entorno de contención y coherencia energética,
                        favoreciendo la introspección, la meditación profunda y
                        el trabajo interior. La luz natural que lo atraviesa,
                        junto con el silencio del entorno, genera un estado de
                        presencia y calma que invita a habitar el momento con
                        plena conciencia. Aquí, el tiempo se desacelera y la
                        energía se ordena.
                      </p>
                      <div className='flex items-center gap-2 mt-4 cursor-pointer group w-fit'>
                        <span className='uppercase tracking-wider text-sm font-medium border-b border-white pb-0.5'>
                          Resevar
                        </span>
                        <span className='text-lg group-hover:translate-x-1 transition-transform'>
                          ↗
                        </span>
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                id: 'sauna',
                number: '02',
                title: 'Sauna natural',
                content: (
                  <div className='flex flex-col md:flex-row gap-8 md:gap-12 w-full items-center'>
                    <div className='w-full md:w-1/2 relative h-[50vh] min-h-[400px] rounded-[2rem] overflow-hidden'>
                      <Image
                        src='/images/Sauna.png'
                        alt='Elementos Meliquina'
                        fill
                        className='object-cover'
                      />
                    </div>
                    <div className='w-full md:w-1/2 flex flex-col gap-6 md:pl-8'>
                      <span className='text-sm uppercase tracking-widest text-gray-400'>
                        Elementos Meliquina
                      </span>
                      <h2 className='text-[3rem] md:text-[4.5rem] leading-[1] text-primary font-bold uppercase'>
                        Sauna natural
                      </h2>
                      <p className='text-body text-lg text-gray-300 leading-relaxed max-w-xl'>
                        El sauna es un espacio de purificación profunda. El
                        calor actúa sobre el cuerpo liberando toxinas y
                        tensiones acumuladas, mientras que a nivel energético
                        favorece la descarga de bloqueos internos. Cada sesión
                        es una invitación a soltar, vaciar y renovar la energía
                        vital desde adentro hacia afuera.
                      </p>
                      <div className='flex items-center gap-2 mt-4 cursor-pointer group w-fit'>
                        <span className='uppercase tracking-wider text-sm font-medium border-b border-white pb-0.5'>
                          Reservar
                        </span>
                        <span className='text-lg group-hover:translate-x-1 transition-transform'>
                          ↗
                        </span>
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                id: 'banadera',
                number: '03',
                title: 'Pileta intervenida con Cobre',
                content: (
                  <div className='flex flex-col md:flex-row gap-8 md:gap-12 w-full items-center'>
                    <div className='w-full md:w-1/2 relative h-[50vh] min-h-[350px] rounded-[2rem] overflow-hidden'>
                      <Image
                        src='/images/Pileta.png'
                        alt='Elementos Meliquina'
                        fill
                        className='object-cover'
                      />
                    </div>
                    <div className='w-full md:w-1/2 flex flex-col gap-6 md:pl-8'>
                      <span className='text-sm uppercase tracking-widest text-gray-400'>
                        Elementos Meliquina
                      </span>
                      <h2 className='text-[3rem] md:text-[4.5rem] leading-[1] text-primary font-bold uppercase'>
                        Pileta intervenida con Cobre
                      </h2>
                      <p className='text-body text-lg text-gray-300 leading-relaxed max-w-xl'>
                        La pileta fue intervenida con un dispositivo de cobre y
                        una boya solar que libera iones en el agua. El cobre,
                        por su capacidad conductiva, interactúa con el cuerpo
                        durante la inmersión, favoreciendo sensación de
                        descarga, circulación y regulación. Es un espacio
                        pensado para experimentar el agua desde una dimensión
                        física y energética a la vez.
                      </p>
                      <div className='flex items-center gap-2 mt-4 cursor-pointer group w-fit'>
                        <span className='uppercase tracking-wider text-sm font-medium border-b border-white pb-0.5'>
                          Reservar
                        </span>
                        <span className='text-lg group-hover:translate-x-1 transition-transform'>
                          ↗
                        </span>
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                id: 'arroyo',
                number: '04',
                title: 'Arroyo natural',
                content: (
                  <div className='flex flex-col md:flex-row gap-8 md:gap-12 w-full items-center'>
                    <div className='w-full md:w-1/2 relative h-[50vh] min-h-[400px] rounded-[2rem] overflow-hidden'>
                      <Image
                        src='/images/Arroyo.webp'
                        alt='Elementos Meliquina'
                        fill
                        className='object-cover'
                      />
                    </div>
                    <div className='w-full md:w-1/2 flex flex-col gap-6 md:pl-8'>
                      <span className='text-sm uppercase tracking-widest text-gray-400'>
                        Elementos Meliquina
                      </span>
                      <h2 className='text-[3rem] md:text-[4.5rem] leading-[1] text-primary font-bold uppercase'>
                        Arroyo natural
                      </h2>
                      <p className='text-body text-lg text-gray-300 leading-relaxed max-w-xl'>
                        El arroyo fluye de manera constante, recordando el ritmo
                        esencial de la naturaleza. Su sonido acompaña los
                        procesos de descanso, contemplación y limpieza
                        emocional. El contacto con el agua viva permite
                        reconectar con lo simple, soltar tensiones y armonizar
                        el cuerpo energético a través de un elemento puro, en
                        movimiento y sin intervención humana.
                      </p>
                      <div className='flex items-center gap-2 mt-4 cursor-pointer group w-fit'>
                        <span className='uppercase tracking-wider text-sm font-medium border-b border-white pb-0.5'>
                          Reservar
                        </span>
                        <span className='text-lg group-hover:translate-x-1 transition-transform'>
                          ↗
                        </span>
                      </div>
                    </div>
                  </div>
                ),
              },
            ]}
          />
        </div>
        <div className='w-full flex justify-end md:px-8 px-4 py-8'>
          <Link href='/meliquina/form'>
            <FxActionButton
              onClick={() => {}}
              disabled={false}>
              Reservar
            </FxActionButton>
          </Link>
        </div>
      </section>
    </section>
  )
}

export default page
