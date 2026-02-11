'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

export default function HorizontalScrollSection() {
  const container = useRef<HTMLDivElement>(null)
  const track = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mm = gsap.matchMedia()

    mm.add('(min-width: 768px)', () => {
      if (!container.current || !track.current) return

      const getMaxX = () => {
        const total = track.current!.scrollWidth
        const view = container.current!.clientWidth
        return -(total - view)
      }

      gsap.to(track.current, {
        x: getMaxX,
        ease: 'none',
        scrollTrigger: {
          trigger: container.current,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          end: () =>
            `+=${track.current!.scrollWidth - container.current!.clientWidth}`,
        },
      })
    })

    return () => mm.revert()
  }, [])

  return (
    <div
      ref={container}
      className='relative min-h-screen md:h-screen overflow-x-hidden md:overflow-hidden'>
      <div
        ref={track}
        className='flex flex-col md:flex-row md:flex-nowrap w-full md:w-[300vw] h-auto md:h-full'>
        {/* Panel 1: Hero Title + Description */}
        <div className='relative panel w-full h-screen md:w-[120svw] md:h-screen flex-shrink-0 flex items-center justify-center p-8 border-b md:border-b-0 md:border-r border-white/5'>
          <div className='w-full h-[80%] grid grid-cols-1 md:grid-cols-2 gap-12 items-start pt-32 md:pt-0 md:items-end z-10'>
            <div className='flex flex-col justify-end'>
              <h1 className='text-display uppercase  text-red-600'>
                GUÍA
                <br />
                REALIZADOR
              </h1>
              <p className='text-body px-3'>
                La práctica de intervenir tu energía
              </p>
            </div>
          </div>
          <div className='absolute flex justify-end items-end top-0 left-0 w-full h-screen pointer-events-none'>
            <div className='imga-contain relative h-[50svh] md:h-[80svh] w-full md:w-[65svw]'>
              <Image
                src='/images/PP.png'
                alt='Hero Image'
                fill
                className='object-contain object-bottom md:object-right-bottom'
              />
            </div>
          </div>
        </div>

        {/* Panel 2: Text + Video */}
        <div className='p-8 md:p-16 panel w-full min-h-screen md:w-[80svw] md:h-screen flex-shrink-0 flex flex-col items-start justify-center border-b md:border-b-0 border-white/5'>
          <div className='py-8 md:py-16 flex-1 flex items-start w-full max-w-5xl text-start'>
            <p className='text-h4 text-2xl md:text-4xl'>
              Después de 27 años practicando y enseñando yoga, hoy comparto una
              forma clara, accesible y adaptable de trabajar con tu energía.{' '}
              <br />
              También diseño y forjo amuletos energéticos: piezas creadas a mano
              que acompañan procesos personales de transformación.
            </p>
          </div>
          <div className='flex flex-col md:flex-row w-full items-center justify-between gap-8 md:gap-0'>
            <div className='flex flex-col md:flex-row flex-1 w-full gap-4 md:gap-0'>
              <div className='p-8 md:p-24 relative aspect-video bg-black/50 overflow-hidden rounded-lg border border-white/10 shadow-2xl w-full md:max-w-[50%]'>
                {/* Placeholder for Video Component */}
                <div className='absolute inset-0 flex items-center justify-center'>
                  <span className='text-white/20 uppercase tracking-widest text-sm'>
                    Video Component Here
                  </span>
                </div>
              </div>
              <p className='px-0 md:px-4 uppercase mt-4 md:mt-0'>
                Tutoriales
                <br />
                <span className='text-primary'>metodo ASHTAGNA</span>
              </p>
            </div>

            <div className='flex w-full md:max-w-[50%] items-start flex-col gap-4'>
              <p className='text-body'>
                Viajé durante diez años a la India, donde estudié con diferentes
                maestros y, en Mysore, con Sri K. Pattabhi Jois y Sharath
                Rangaswami.
              </p>
              <p className='text-body'>
                Fui el único argentino que practicó en Mysore con Pattabhi Jois
                y que realizó el curso para profesores con Sharath.
              </p>
            </div>
          </div>
        </div>

        {/* Panel 3: Title + ImageMarquee */}
        <div className='z-10 panel w-full min-h-[50vh] md:w-screen md:h-[80svh] flex-shrink-0 flex flex-col justify-center relative'>
          <div className='layout-grid w-full h-full text-center z-10 px-4'>
            <div className='col-span-full md:col-start-2 md:col-span-6 h-full flex flex-col justify-center items-center gap-12 md:gap-24 py-16 md:py-0'>
              <h2 className='text-6xl md:text-[12vw] font-bold uppercase tracking-tighter leading-none text-red-600'>
                SAMASTIT
              </h2>
              <h4 className='text-h4 px-4'>
                “Samastit es una práctica de yoga creada para que encuentres tu
                equilibrio
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
