'use client'

import {FxLinkButton} from '../components/FxButton/FxLinkButton'
import ImageMarquee from '../components/ImageMarquee'

export default function AboutSection() {
  const imagesSamastit = [
    '/images/example1.jpg',
    '/images/example2.jpg',
    '/images/example3.jpg',
    '/images/example4.jpg',
    '/images/example5.jpg',
    '/images/example6.jpg',
    '/images/example7.jpg',
  ]

  return (
    <section className='layout-wrap'>
      <div className='layout-grid h-screen flex  items-center justify-start  '>
        <div className=' col-span-full md:col-start-2 md:col-span-6 h-full flex flex-col   justify-start items-center gap-24   '>
          <div className='flex flex-col gap-8 w-full '>
            <p className='text-h4 font-light max-w-[50%] text-start'>
              <span className='text-primary'>Samastit</span> no es una práctica
              de posturas, es un entrenamiento físico de autoconocimiento que te
              enseña a leer las señales de tu cuerpo como un escáner.
            </p>
            <p className='text-h4 max-w-[50%] self-end text-end'>
              <span className='text-primary'>Samastit</span> es una práctica
              corporal consciente que entrena tu sistema nervioso para encontrar
              equilibrio. Parte del mismo principio que la postura de yoga
              Samasthithi: la estabilidad de permanecer de pie en equilibrio
              consciente.
            </p>
          </div>
        </div>
        <div className='col-span-full md:col-start-2 md:col-span-6 flex justify-end'>
          <FxLinkButton href='/samastit'>Ver más</FxLinkButton>
        </div>
        <div className='col-span-full '>
          <ImageMarquee
            images={imagesSamastit}
            reverse={true}
            height={450}
          />
        </div>
      </div>
    </section>
  )
}
