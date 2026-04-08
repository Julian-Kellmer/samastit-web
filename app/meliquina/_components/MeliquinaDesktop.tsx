'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import type { AccordionItem } from './MeliquinaAccordion'

gsap.registerPlugin(ScrollTrigger)

interface Props {
  items: AccordionItem[]
}

export default function MeliquinaDesktop({ items }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const leftRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        pin: leftRef.current,
        pinSpacing: false,
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className='flex flex-row w-full text-white'>

      {/* ── Left — pinned title ─────────────────────────────── */}
      <div ref={leftRef} className='w-[40%] shrink-0 flex items-start pt-4 pr-12'>
        <h2 className='text-[5rem] xl:text-[7rem] leading-none text-primary font-bold uppercase'>
          Espacios <br /> Meliquina
        </h2>
        <a
          href='https://www.instagram.com/espaciomeliquina'
          target='_blank'
          rel='noreferrer'
          className='text-body text-white/50 hover:text-white/80 transition-colors text-sm mt-2'>
          @espaciomeliquina
        </a>
      </div>

      {/* ── Right — scrollable content stack ───────────────── */}
      <div className='flex-1 flex flex-col'>
        {items.map((item, i) => (
          <div
            key={item.id}
            className='py-16 border-b border-white/20 last:border-0'>
            {item.content}
          </div>
        ))}
      </div>

    </div>
  )
}
