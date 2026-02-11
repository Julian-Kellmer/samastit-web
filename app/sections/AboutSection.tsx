'use client'

import { FxLinkButton } from '../components/FxButton/FxLinkButton'
import ImageMarquee from '../components/ImageMarquee'

export default function AboutSection() {
  const imagesSamastit = [
    '/images/Originals1.jpg',
    '/images/Originals2.jpg',
    '/images/Originals3.jpg',
    '/images/Originals4.jpg',
    '/images/Originals5.jpg',
    '/images/Originals6.jpg',
  ]

  return (
    <section className='layout-wrap'>
      <div className='layout-grid h-screen flex  items-center justify-start  '>
        <div className=' col-span-full md:col-start-2 md:col-span-6 h-full flex flex-col   justify-start items-center gap-24   '>
          <div className='flex flex-col gap-8 w-full '>
            <p className='text-h4 font-light max-w-[50%] text-start'>
              <span className='text-primary'>Samastit</span> nace de
              Samasthithi; postura de yoga que significa estar de pie, presente
              y estable. Ese principio guía nuestra práctica; entrenar para
              expandir tu estabilidad interna y externa.
            </p>
            <p className='text-h4 max-w-[50%] self-end text-end'>
              <span className='text-primary'>Samastit</span> es más que una
              práctica de posturas: es un entrenamiento para reconocer cómo se
              manifiesta la tensión y el desequilibrio en tu cuerpo. A través de
              la práctica, aprendés a ajustar con intención y intervenirte con
              conciencia.
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
