'use client'

import React, { useState } from 'react'
import MeliquinaAccordion from '../meliquina/_components/MeliquinaAccordion'
// import Button from '../components/Button'
import { FxActionButton } from '../components/FxButton/FxActionButton'
import SmartVideo from '../components/SmartVideo'

export default function AshtangaSection() {
  const [activeItem, setActiveItem] = useState<string | null>('info')

  const accordionItems = [
    {
      id: 'info',
      number: '01',
      title: 'Ashtanga Info',
      content: (
        <div className='flex flex-col gap-6 w-full  text-white'>
          <h3 className='text-h4 md:text-h3 font-light leading-tight'>
            Después de años de enseñanza tradicional, presento una síntesis
            estructurada del método destinada a practicantes avanzados y
            maestros.
          </h3>
          <div className='flex flex-col lg:flex-row gap-6'>
            <div className='flex-2 relative w-full lg:w-1/2 aspect-video bg-white/10 rounded-lg overflow-hidden flex items-center justify-center group cursor-pointer'>
              {/* Video Placeholder */}
              <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent' />
              <SmartVideo
                webmSrc='./video/PabloVideo.webm'
                mp4Src='./video/PabloVideo.mp4'
                poster='./video/portada.png'
              />
            </div>

            <div className='flex-1 flex flex-col h-full justify-between '>
              <p className='text-body text-white/60'>
                Decidí reunir esta experiencia en una serie de videos y un PDF
                complementario, como una forma clara de transmitir lo esencial
                aprendido a lo largo de los años. El material está orientado a
                quienes desean profundizar en la comprensión técnica de la Serie
                Primaria e Intermedia. No es una clase guiada ni un curso
                introductorio. Es un material de estudio para comprender la
                práctica desde adentro.
              </p>
              <div className=''>
                <FxActionButton
                  onClick={() => setActiveItem('price')}
                  disabled={false}>
                  Ver opciones
                </FxActionButton>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'price',
      number: '02',
      title: 'Ahstanga Price',
      content: (
        <div className='flex flex-col w-full h-full min-h-fit gap-8 text-white justify-between'>
          <p className='text-h5 font-light leading-snug w-full'>
            También ofrezco talleres presencial de ajustes de Ashtanga en CABA,
            donde exploramos la técnica de ajustes desde la intervención
            consciente.
          </p>

          <div className='grid grid-cols-1 xl:grid-cols-3 gap-8 w-full flex-1'>
            {/* Option 1: Basico */}
            <div className='flex flex-col gap-4 border-l border-white/10 pl-6 relative group justify-between'>
              <div>
                <h4 className='text-h4 font-medium'>Basico</h4>
                <p className='text-h5 font-medium text-[#ff0000] tracking-tighter'>
                  USD 140
                </p>
                <ul className='space-y-2 text-tiny text-white/70 mt-4'>
                  <li className='flex items-center gap-2'>
                    <span className='text-white'>✓</span> 2 videos – Series 1 &
                    2
                  </li>
                  <li className='flex items-center gap-2'>
                    <span className='text-white'>✓</span> Trabajo completo
                    estilo Mysore
                  </li>
                  <li className='flex items-center gap-2'>
                    <span className='text-white'>✓</span> Observación y ajustes
                    postura por postura
                  </li>
                  <li className='flex items-center gap-2'>
                    <span className='text-white'>✓</span> Placas con claves para
                    maestros y practicantes
                  </li>
                  <li className='flex items-center gap-2'>
                    <span className='text-white'>✓</span> PDF complementario
                  </li>
                  <li className='flex items-center gap-2'>
                    Vinyasas (transiciones) no incluidas
                  </li>
                </ul>
              </div>
              <div>
                <FxActionButton
                  onClick={() => {
                    window.open(
                      'https://wa.me/+5491158044328?text=Hola,%20quiero%20consultar%20por%20la%20opcion%20Basico%20de%20Ashtanga',
                      '_blank'
                    )
                  }}
                  disabled={false}>
                  Contactar
                </FxActionButton>
              </div>
            </div>

            {/* Option 2: Complementario */}
            <div className='flex flex-col gap-4 border-l border-white/10 pl-6 relative group justify-between'>
              <div>
                <h4 className='text-h4 font-medium'>Completo</h4>
                <p className='text-h5 text-[#ff0000] tracking-tighter'>
                  USD 245
                </p>
                <ul className='space-y-2 text-tiny text-white/70 mt-4'>
                  <li className='flex items-center gap-2'>
                    <span className='text-white'>✓</span> Todo lo incluido en el
                    Curso Básico
                  </li>
                  <li className='flex items-center gap-2'>
                    <span className='text-white'>✓</span> 1 encuentro individual
                    (hasta 2 h.)
                  </li>
                  <li className='flex items-center gap-2'>
                    <span className='text-white'>✓</span> Virtual o presencial
                  </li>
                  <li className='flex items-center gap-2'>
                    <span className='text-white'>✓</span> Espacio para
                    practicar, revisar y profundizar
                  </li>
                  <li className='flex items-center gap-2'>
                    <span className='text-white'>✓</span> Certificado de
                    participación
                  </li>
                  <li className='flex items-center gap-2'>
                    Vinyasas (transiciones) no incluidas
                  </li>
                </ul>
              </div>
              <div>
                <FxActionButton
                  onClick={() => {
                    window.open(
                      'https://wa.me/+5491158044328?text=Hola,%20quiero%20consultar%20por%20la%20opcion%20Completo%20de%20Ashtanga',
                      '_blank'
                    )
                  }}
                  disabled={false}>
                  Contactar
                </FxActionButton>
              </div>
            </div>

            {/* Option 3: Otro */}
            <div className='flex flex-col gap-4 border-l border-white/10 pl-6 relative group justify-between'>
              <div>
                <h4 className='text-h4 font-medium'>Otro</h4>
                <p className='text-h5 font-medium text-[#ff0000] tracking-tighter'>
                  Consultar
                </p>
                <ul className='space-y-2 text-tiny text-white/70 mt-4'>
                  <li className='flex items-center gap-2'>
                    <span className='text-white'>✓</span> Clases presenciales de
                    Ashtanga
                  </li>
                  <li className='flex items-center gap-2'>
                    <span className='text-white'>✓</span> Clases virtuales
                  </li>
                  <li className='flex items-center gap-2'>
                    <span className='text-white'>✓</span> Consultorías
                    individuales
                  </li>
                  <li className='flex items-center gap-2'>
                    <span className='text-white'>✓</span> Acompañamiento para
                    apertura de escuela
                  </li>
                  <li className='flex items-center gap-2'>
                    <span className='text-white'>✓</span> Talleres en escuelas
                    para practicantes
                  </li>
                  <li className='flex items-center gap-2'>
                    <span className='text-white'>✓</span> Taller para profesores
                  </li>
                </ul>
              </div>
              <div>
                <FxActionButton
                  onClick={() => {
                    window.open(
                      'https://wa.me/+5491158044328?text=quiero%20consultar%20por%20la%20tercera%20opcion%20de%20ashtanga',
                      '_blank',
                    )
                  }}
                  disabled={false}>
                  Consultar
                </FxActionButton>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id='ashtanga' className='relative  bg-black text-white layout-wrap'>
      <div className='layout-grid'>
        {/* Layout: constrained to col 2-8 as requested */}
        <div className='col-span-full md:col-start-2 md:col-end-8 flex flex-col gap-12'>
          <h2 className='text-display text-primary uppercase font-bold tracking-tighter leading-none'>
            ASHTANGA
          </h2>
          <a
            href='https://www.instagram.com/ashtanga_espacio'
            target='_blank'
            rel='noreferrer'
            className='text-body text-white/50 hover:text-white/80 transition-colors text-sm -mt-8'>
            @ashtanga_espacio
          </a>

          {/* Accordion Component */}
          <div className='w-full '>
            <MeliquinaAccordion
              items={accordionItems}
              activeId={activeItem}
              onToggle={setActiveItem}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
