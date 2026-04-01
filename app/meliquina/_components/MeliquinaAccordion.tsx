'use client'

import React, { useState } from 'react'

interface AccordionItem {
  id: string
  number: string
  title: string
  content: React.ReactNode
}

interface MeliquinaAccordionProps {
  items: AccordionItem[]
  activeId?: string | null
  onToggle?: (id: string | null) => void
}

const MeliquinaAccordion: React.FC<MeliquinaAccordionProps> = ({
  items,
  activeId: controlledActiveId,
  onToggle,
}) => {
  const [internalActiveId, setInternalActiveId] = useState<string | null>(
    items[0]?.id || null,
  )

  const isControlled = controlledActiveId !== undefined
  const activeId = isControlled ? controlledActiveId : internalActiveId

  const handleToggle = (id: string) => {
    if (activeId === id) return
    if (isControlled) {
      onToggle?.(id)
    } else {
      setInternalActiveId(id)
    }
  }

  return (
    <div className='w-full flex flex-col lg:flex-row text-white'>
      {items.map((item) => {
        const isActive = activeId === item.id
        return (
          <div
            key={item.id}
            className={`
              relative flex flex-col lg:flex-row overflow-hidden group
              border-b lg:border-b-0 lg:border-r border-white/20 last:border-0
              transition-[flex-grow] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
              ${isActive
                ? 'lg:flex-grow-[3]'
                : 'lg:flex-grow-0 lg:w-[80px] lg:min-w-[80px]'
              }
            `}>

            {/* Header */}
            <div
              onClick={() => handleToggle(item.id)}
              className={`
                h-[80px] w-full lg:w-[80px] flex items-center justify-start
                px-6 lg:px-0 flex-shrink-0 lg:flex-col lg:py-8
                transition-colors duration-500 cursor-pointer
                ${isActive ? 'bg-transparent' : 'hover:bg-white/5'}
              `}>
              <div className='flex flex-row lg:flex-col items-center gap-4 lg:gap-8 lg:h-full w-full'>
                <span className='text-sm font-light tracking-widest opacity-80 lg:rotate-180 lg:[writing-mode:vertical-rl]'>
                  {item.number}
                </span>
                <span
                  className={`
                    text-lg font-medium uppercase tracking-wider whitespace-nowrap
                    lg:[writing-mode:vertical-rl] lg:rotate-180 transition-opacity duration-300
                    ${isActive ? 'hidden' : ''}
                  `}>
                  {item.title}
                </span>
                <div className='lg:mt-auto text-xl opacity-50'>
                  {isActive ? '−' : '+'}
                </div>
              </div>
            </div>

            {/* Panel — mobile: max-height animation / desktop: opacity+width */}
            <div
              className={`
                overflow-hidden
                transition-[max-height,opacity] duration-[600ms] ease-in-out
                lg:transition-[opacity,width] lg:overflow-hidden
                ${isActive
                  ? 'max-h-[2000px] opacity-100 lg:max-h-none lg:flex-1'
                  : 'max-h-0 opacity-0 lg:max-h-none lg:w-0 pointer-events-none'
                }
              `}>
              <div className='p-4 md:p-8 w-full flex flex-col justify-start lg:min-w-[320px]'>
                {item.content}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default MeliquinaAccordion
