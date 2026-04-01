'use client'
import React from 'react'
import ImageMarquee from '../components/ImageMarquee'
import MeliquinaAccordion from './_components/MeliquinaAccordion'
import { FxActionButton } from '../components/FxButton/FxActionButton'
import TextRevealOnScroll from '../components/TextRevealOnScroll/TextRevealOnScroll'
import Link from 'next/link'
const page = () => {
  // Sample images - Replace these with your actual image URLs
  const sampleImages = [
    '/meliquina/2.jpg',
    '/meliquina/3.jpg',
    '/meliquina/4.jpg',
    '/meliquina/7.jpg',
    '/meliquina/8.jpeg',
    '/meliquina/9.jpeg',
    '/meliquina/10.jpeg',
    '/meliquina/11.jpeg',
  ]

  return (
    <section className='min-h-screen bg-black text-white'>
      <div className='container flex flex-col items-start px-4  text-center pt-42 md:pt-32 justify-center'>
        <h1 className='text-display  text-primary font-bold mb-4'>MELIQUINA</h1>
        <p className='text-body text-xl text-gray-300 mb-12 md:px-2 text-start'>
          Un espacio donde la naturaleza marca el ritmo
        </p>
      </div>

      {/* Marquee Section */}
      <div className='w-full space-y-4'>
        <ImageMarquee images={sampleImages} />
        {/* <ImageMarquee
          images={sampleImages}
          height={300}
        /> */}
      </div>

      <section
        id='description'
        className='md:px-8 mt-8 min-h-[50svh] flex flex-col items-start col-span-full '>
        <div className=' text-center md:h-[80svh] flex justify-center items-center mb-16  '>
          <h2 className='text-h4'>
            <TextRevealOnScroll text='Como extensión de la práctica, creé un espacio natural en Villa Lago Meliquina, Patagonia Argentina. Rodeado de bosque autóctono, con agua de vertiente y energía solar, el lugar fue concebido como un contenedor para procesos profundos: retiros, estancias personales y alquiler para facilitadores, terapeutas y artistas que buscan un entorno de silencio, concentración y creación.' />
          </h2>
        </div>
        <div className='lg:hidden'>
          <h2 className='text-[4rem] md:text-[8rem] leading-none text-primary font-bold mb-8 md:mb-12 text-start md:text-left uppercase'>
            Espacios <br />
            Meliquina
          </h2>
        </div>

        {/* Elements Accordion */}
        <div className='w-full '>
          <MeliquinaAccordion
            items={[
              {
                id: 'domo',
                number: '01',
                title: 'Domo',
                content: (
                  <div className='flex flex-col md:flex-row gap-8 md:gap-12 w-full items-start'>
                    <div className='gap-6 md:pl-8 w-full flex flex-col'>
                      <h2 className='text-[2.3rem] md:text-[4.5rem] leading-[1] text-primary font-bold uppercase'>
                        Domo
                      </h2>
                      <div className=' flex flex-col md:flex-row gap-2 '>
                        <div className='w-full max-w-[350px] shrink-0 rounded-[1rem] overflow-hidden'>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src='/images/Domo.png'
                            alt='Elementos Meliquina'
                            className='w-full h-auto object-cover'
                          />
                        </div>
                        <p className='text-body text-lg text-gray-300 leading-relaxed max-w-lg '>
                          El domo es el corazón del espacio. Su geometría
                          sagrada crea un entorno de contención y coherencia
                          energética, favoreciendo la introspección, la
                          meditación profunda y el trabajo interior. La luz
                          natural que lo atraviesa, junto con el silencio del
                          entorno, genera un estado de presencia y calma que
                          invita a habitar el momento con plena conciencia.
                          Aquí, el tiempo se desacelera y la energía se ordena.
                        </p>
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
                  <div className='flex flex-col md:flex-row gap-8 md:gap-12 w-full items-start'>
                    <div className='gap-6 md:pl-8 w-full flex flex-col'>
                      <h2 className='text-[2.3rem] md:text-[4.5rem] leading-[1] text-primary font-bold uppercase'>
                        Sauna natural
                      </h2>
                      <div className=' flex flex-col md:flex-row gap-2 '>
                        <div className='w-full max-w-[350px] shrink-0 rounded-[1rem] overflow-hidden'>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src='/images/Sauna.png'
                            alt='Elementos Meliquina'
                            className='w-full h-auto object-cover'
                          />
                        </div>
                        <p className='text-body text-lg text-gray-300 leading-relaxed max-w-lg '>
                          El sauna es un espacio de purificación profunda. El
                          calor actúa sobre el cuerpo liberando toxinas y
                          tensiones acumuladas, mientras que a nivel energético
                          favorece la descarga de bloqueos internos. Cada sesión
                          es una invitación a soltar, vaciar y renovar la energía
                          vital desde adentro hacia afuera.
                        </p>
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
                  <div className='flex flex-col md:flex-row gap-8 md:gap-12 w-full items-start'>
                    <div className='gap-6 md:pl-8 w-full flex flex-col'>
                      <h2 className='text-[2.3rem] md:text-[4.5rem] leading-[1] text-primary font-bold uppercase'>
                        Pileta intervenida con Cobre
                      </h2>
                      <div className=' flex flex-col md:flex-row gap-2 '>
                        <div className='w-full max-w-[350px] shrink-0 rounded-[1rem] overflow-hidden'>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src='/images/Pileta.png'
                            alt='Elementos Meliquina'
                            className='w-full h-auto object-cover'
                          />
                        </div>
                        <p className='text-body text-lg text-gray-300 leading-relaxed max-w-lg '>
                          La pileta fue intervenida con un dispositivo de cobre y
                          una boya solar que libera iones en el agua. El cobre,
                          por su capacidad conductiva, interactúa con el cuerpo
                          durante la inmersión, favoreciendo sensación de
                          descarga, circulación y regulación. Es un espacio
                          pensado para experimentar el agua desde una dimensión
                          física y energética a la vez.
                        </p>
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
                  <div className='flex flex-col md:flex-row gap-8 md:gap-12 w-full items-start'>
                    <div className='gap-6 md:pl-8 w-full flex flex-col'>
                      <h2 className='text-[2.3rem] md:text-[4.5rem] leading-[1] text-primary font-bold uppercase'>
                        Arroyo natural
                      </h2>
                      <div className=' flex flex-col md:flex-row gap-2 '>
                        <div className='w-full max-w-[350px] shrink-0 rounded-[1rem] overflow-hidden'>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src='/images/Arroyo.webp'
                            alt='Elementos Meliquina'
                            className='w-full h-auto object-cover'
                          />
                        </div>
                        <p className='text-body text-lg text-gray-300 leading-relaxed max-w-lg '>
                          El arroyo fluye de manera constante, recordando el ritmo
                          esencial de la naturaleza. Su sonido acompaña los
                          procesos de descanso, contemplación y limpieza
                          emocional. El contacto con el agua viva permite
                          reconectar con lo simple, soltar tensiones y armonizar
                          el cuerpo energético a través de un elemento puro, en
                          movimiento y sin intervención humana.
                        </p>
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                id: 'cabaña',
                number: '05',
                title: 'Cabaña',
                content: (
                  <div className='flex flex-col md:flex-row gap-8 md:gap-12 w-full items-start'>
                    <div className='gap-6 md:pl-8 w-full flex flex-col'>
                      <h2 className='text-[2.3rem] md:text-[4.5rem] leading-[1] text-primary font-bold uppercase'>
                        Cabaña
                      </h2>
                      <div className=' flex flex-col md:flex-row gap-2 '>
                        <div className='w-full max-w-[350px] shrink-0 rounded-[1rem] overflow-hidden'>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src='/images/cabaña.webp'
                            alt='Elementos Meliquina'
                            className='w-full h-auto object-cover'
                          />
                        </div>
                        <p className='text-body text-lg text-gray-300 leading-relaxed max-w-lg '>
                          La cabaña es un espacio íntimo dentro del bosque,
                          pensado para habitar la naturaleza en silencio y con
                          comodidad. Rodeada de árboles y con vistas abiertas,
                          invita al descanso, la concentración y el desarrollo de
                          proyectos personales o artísticos. Puede utilizarse para
                          estadías individuales o grupales, y también forma parte
                          del espacio de alojamiento para facilitadores durante
                          retiros. Capacidad para hasta cinco personas.
                        </p>
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
