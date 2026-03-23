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
    <div className='w-full h-auto  flex flex-col lg:flex-row text-white'>
      {items.map((item) => {
        const isActive = activeId === item.id
        return (
          <div
            key={item.id}
            className={`
              relative transition-all duration-700 ease-in-out border-b lg:border-b-0 lg:border-r border-white/20 last:border-0
              ${
                isActive
                  ? 'flex-grow-[3] h-auto lg:h-full'
                  : 'flex-grow-0 h-[80px] min-h-[80px] shrink-0 lg:h-full lg:w-[80px] lg:min-w-[80px]'
              }
              flex flex-col lg:flex-row overflow-hidden group 
            `}>
            <div
              onClick={() => handleToggle(item.id)}
              className={`
                h-[80px] lg:h-full w-full lg:w-[80px] flex items-center justify-between lg:justify-start px-6 lg:px-0 flex-shrink-0
                lg:flex-col lg:py-8 transition-colors duration-500
                ${
                  isActive ? 'bg-transparent' : 'hover:bg-white/5'
                } cursor-pointer
              `}>
              <div className='flex flex-row lg:flex-col items-center lg:items-center gap-4 lg:gap-8 lg:h-full w-full'>
                <span className='text-sm font-light tracking-widest opacity-80 lg:rotate-180 lg:[writing-mode:vertical-rl]'>
                  {item.number}
                </span>

                <span
                  className={`
                    text-lg font-medium uppercase tracking-wider whitespace-nowrap 
                    lg:[writing-mode:vertical-rl] lg:rotate-180 ${
                      isActive ? 'lg:rotate-0 hidden' : 'lg:rotate-180'
                    }
                  `}>
                  {item.title}
                </span>

                <div className='lg:mt-auto text-xl opacity-50'>
                  {isActive ? '-' : '+'}
                </div>
              </div>
            </div>

            <div
              className={`
                overflow-hidden transition-all duration-700 min-w-0
                ${isActive ? 'flex-1 opacity-100 delay-200 relative h-auto' : 'absolute opacity-0 pointer-events-none w-0 h-0 overflow-hidden'}
              `}>
              <div className='p-2 w-full h-full flex flex-col justify-center min-w-[300px]'>
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
