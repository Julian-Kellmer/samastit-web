'use client'
import React from 'react'
interface SamastitCardProps {
  title: string
  description: string
  children?: React.ReactNode // For the icon/grid graphic
}

const SamastitCard: React.FC<SamastitCardProps> = ({
  title,
  description,
  children,
}) => {
  const divRef = React.useRef<HTMLDivElement>(null)
  const [isFocused, setIsFocused] = React.useState(false)
  const [position, setPosition] = React.useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = React.useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return

    const div = divRef.current
    const rect = div.getBoundingClientRect()

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const handleFocus = () => {
    setIsFocused(true)
    setOpacity(1)
  }

  const handleBlur = () => {
    setIsFocused(false)
    setOpacity(0)
  }

  const handleMouseEnter = () => {
    setOpacity(1)
  }

  const handleMouseLeave = () => {
    setOpacity(0)
  }

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className=' group relative w-full aspect-[4/5] bg-neutral-900/50 border border-white/5 overflow-hidden flex flex-col justify-end p-8 transition-colors duration-500 hover:bg-neutral-800/80 rounded-xl'>
      <div
        className='pointer-events-none absolute -inset-px opacity-0 transition duration-300'
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(226, 158, 10, 0.09), transparent 40%)`,
        }}
      />

      {/* Border Highlight Effect */}
      <div
        className='pointer-events-none absolute -inset-[1px] rounded-xl opacity-0 transition duration-300'
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.3), transparent 40%)`,
          maskImage:
            'linear-gradient(black, black), linear-gradient(black, black)',
          maskClip: 'content-box, border-box',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
          padding: '1px',
        }}
        aria-hidden='true'
      />

      {/* Icon Area - Centered or Top? Reference shows it might be centered then moves or just sits there.
          Let's place it in the middle-top area.
      */}
      <div className='relative z-10 flex-1 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity duration-500 text-white/50 group-hover:text-white'>
        {children}
      </div>

      <div className='relative z-10 space-y-4'>
        <h3 className='text-2xl font-bold text-white tracking-wide'>{title}</h3>
        <p className='text-sm text-gray-400 font-light leading-relaxed'>
          {description}
        </p>
      </div>
    </div>
  )
}

export default SamastitCard
