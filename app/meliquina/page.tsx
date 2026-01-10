'use client'
import React from 'react'
import ImageMarquee from '../components/ImageMarquee'
import MeliquinaAccordion from './_components/MeliquinaAccordion'
import { FxActionButton } from '../components/FxButton/FxActionButton'
import TextRevealOnScroll from '../components/TextRevealOnScroll/TextRevealOnScroll'
import Image from 'next/image'

const page = () => {
  // Sample images - Replace these with your actual image URLs
  const sampleImages = [
    '/images/example3.jpg',
    '/images/example4.jpg',
    '/images/example5.jpg',
    '/images/example1.jpg', // Replace with real paths
    '/images/example2.jpg',
    '/images/example6.jpg',
    '/images/example7.jpg',
  ]

  return (
    <section className='min-h-screen bg-black text-white'>
      <div className='container flex flex-col items-start px-4 py-12 text-center h-[80svh] justify-center'>
        <h1 className='text-display text-5xl font-bold mb-4'>EXP. MELIQUINA</h1>
        <p className='text-body text-xl text-gray-300 mb-12'>
          “Tu equilibrio es una habilidad y se puede entrenar con práctica.”
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
          <h2 className='text-h2'>
            <TextRevealOnScroll text='Samstit es una práctica corporal consciente que entrena tu sistema nervioso para encontrar equilibrio. Parte del mismo principio que la postura de yoga Samasthithi' />
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
                    Elementos <br />
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
                      <img
                        src='./images/domo.jpg'
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
                      <img
                        src='./images/Sauna.jpg'
                        alt='Elementos Meliquina'
                        
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
                        calor consciente actúa sobre el cuerpo físico liberando
                        toxinas, mientras que a nivel energético facilita la
                        descarga de cargas acumuladas y bloqueos internos. Cada
                        sesión es una invitación a soltar, a vaciar, y a renovar
                        la energía vital desde adentro hacia afuera.
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
                title: 'Bañadera de Bronce',
                content: (
                  <div className='flex flex-col md:flex-row gap-8 md:gap-12 w-full items-center'>
                    <div className='w-full md:w-1/2 relative h-[50vh] min-h-[350px] rounded-[2rem] overflow-hidden'>
                      <img
                        src='./images/domo.jpg'
                        alt='Elementos Meliquina'
                       
                        className='object-cover'
                      />
                    </div>
                    <div className='w-full md:w-1/2 flex flex-col gap-6 md:pl-8'>
                      <span className='text-sm uppercase tracking-widest text-gray-400'>
                        Elementos Meliquina
                      </span>
                      <h2 className='text-[3rem] md:text-[4.5rem] leading-[1] text-primary font-bold uppercase'>
                        Bañadera de bronce
                      </h2>
                      <p className='text-body text-lg text-gray-300 leading-relaxed max-w-xl'>
                        La bañadera de bronce propone un ritual de inmersión y
                        restauración. El bronce, por sus propiedades
                        conductivas, potencia el trabajo energético y amplifica
                        la sensación de arraigo y presencia. El agua caliente
                        envuelve el cuerpo, relaja el sistema nervioso y
                        habilita un espacio íntimo de reconexión, descanso
                        profundo y regeneración.
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
                      <img
                        src='./images/arroyo.jpg'
                        alt='Elementos Meliquina'
                        
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
          <FxActionButton onClick={() => {}}>Reservar</FxActionButton>
        </div>
      </section>
    </section>
  )
}

export default page
