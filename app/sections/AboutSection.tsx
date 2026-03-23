'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FxLinkButton } from '../components/FxButton/FxLinkButton'
import ImageMarquee from '../components/ImageMarquee'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function AboutSection() {
  const textContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!textContainerRef.current) return

      const paragraphs = textContainerRef.current.querySelectorAll('p')

      gsap.fromTo(
        paragraphs,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: textContainerRef.current,
            start: 'top 85%',
          },
        }
      )
    }, textContainerRef)

    return () => ctx.revert()
  }, [])

  const imagesSamastit = [
    '/images/pablo1.jpg',
    '/images/pablo2.jpg',
    '/images/pablo3.jpg',
    '/images/pablo4.jpg',
    '/images/pablo5.jpg',
    '/images/pablo6.jpg',
    '/images/pablo7.jpg',
    '/images/pablo8.jpg',
    '/images/pablo9.jpg',
    '/images/pablo10.jpg',
    '/images/pablo11.jpg',
    '/images/pablo12.jpeg',
  ]

  return (
    <section className='layout-wrap'>
      <div className='layout-grid  flex  items-center justify-start  '>
        <div className=' col-span-full md:col-start-2 md:col-span-6 h-full flex flex-col   justify-start items-center gap-24   '>
          <div className='flex flex-col gap-16 w-full ' ref={textContainerRef}>
            <p className='text-h5 font-light max-w-[80%] text-start'>
              <span className='text-primary'>Samastit</span> integra asanas,
              respiración y trabajo energético.
              <br />
              <br /> La secuencia tiene una estructura base, pero cada práctica
              se adapta al momento y a la necesidad de cada persona. <br />{' '}
              <br />
              Las posturas funcionan como un vehículo para mover, desbloquear y
              reorganizar la energía. <br /> <br /> El trabajo también se
              orienta hacia planos más sutiles, aplicando distintas técnicas.
            </p>
            <p className='text-h5 max-w-[70%] self-end text-end'>
              <span className='text-primary text-h4 '>Puede ser para vos si:</span>
              <br />
              <br />
              <span className='text-primary'>✦</span> querés comenzar y
              construir una práctica
              <br />
              <br />
              <span className='text-primary'>✦</span> ya practicás y sentís que
              tu proceso está estancado o desordenado
              <br />
              <br />
              <span className='text-primary'>✦</span> buscás profundizar lo que
              ya venís haciendo.
              <br />
              <br />
              El objetivo es que, con el tiempo, cada persona pueda desarrollar
              autonomía y sostener su práctica por sí mismo.
            </p>
          </div>
        </div>
        <div className='col-span-full md:col-start-2 md:col-span-6 flex justify-start'>
          <FxLinkButton href='/samastit'>Ver más</FxLinkButton>
        </div>
        <div className='col-span-full '>
          <ImageMarquee
            images={imagesSamastit}
            height={450}
          />
        </div>
      </div>
    </section>
  )
}
