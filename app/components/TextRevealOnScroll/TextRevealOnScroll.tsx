'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register plugin outside component to avoid re-registration
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface TextRevealOnScrollProps {
  text: string
  as?: React.ElementType
  className?: string
  wordClassName?: string
  duration?: number
  stagger?: number
  y?: number
  start?: string
  end?: string
  scrub?: boolean | number
  ease?: string
}

const TextRevealOnScroll: React.FC<TextRevealOnScrollProps> = ({
  text,
  as: Component = 'div',
  className = '',
  wordClassName = '',
  duration = 1,
  stagger = 0.1,
  y = 24,
  start = 'top 50%',
  end = 'bottom 25%',
  scrub = false,
  ease = 'power2.out',
}) => {
  const containerRef = useRef<HTMLElement>(null)
  const wordsRef = useRef<(HTMLSpanElement | null)[]>([])

  const words = text.split(/(\s+)/).filter((w) => w.length > 0)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!containerRef.current) return

      // Sanitize refs array
      const validWords = wordsRef.current.filter((w) => w !== null)

      gsap.fromTo(
        validWords,
        {
          opacity: 0,
          y: y,
        },
        {
          opacity: 1,
          y: 0,
          duration: duration,
          ease: ease,
          stagger: stagger,
          scrollTrigger: {
            trigger: containerRef.current,
            start: start,
            end: end,
            scrub: scrub,
            // markers: true, // specific for debug, uncomment if needed
          },
        },
      )
    }, containerRef) // Scope to container

    return () => ctx.revert() // Cleanup
  }, [text, y, duration, ease, stagger, start, end, scrub])

  return (
    <Component
      ref={containerRef}
      className={className}>
      <span className='sr-only'>{text}</span>
      <span aria-hidden='true'>
        {words.map((word, i) => {
          // If the "word" is just a newline or space, we render it directly without animation reference if we want, OR we animate it too (it's invisible anyway).
          // But to preserve line breaks like \n, we should probably treat them carefully.
          // If it matches whitespace, we can just render it.
          const isSpace = /^\s+$/.test(word)

          if (isSpace) {
            return <React.Fragment key={i}>{word}</React.Fragment>
          }

          return (
            <span
              key={i}
              ref={(el) => {
                wordsRef.current[i] = el
              }}
              className={`inline-block ${wordClassName}`}
              style={{ willChange: 'transform, opacity' }}>
              {word}
            </span>
          )
        })}
      </span>
    </Component>
  )
}

export default TextRevealOnScroll
