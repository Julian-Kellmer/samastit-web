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
    items[0]?.id || null
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
    <div className='w-full h-auto md:h-[600px] flex flex-col md:flex-row text-white'>
      {items.map((item) => {
        const isActive = activeId === item.id
        return (
          <div
            key={item.id}
            className={`
              relative transition-all duration-700 ease-in-out border-b md:border-b-0 md:border-r border-white/20 last:border-0
              ${
                isActive
                  ? 'flex-grow-[3] h-auto md:h-full'
                  : 'flex-grow-0 h-[80px] md:h-full md:w-[80px]'
              }
              flex flex-col md:flex-row overflow-hidden group 
            `}>
            <div
              onClick={() => handleToggle(item.id)}
              className={`
                h-[80px] md:h-full w-full md:w-[80px] flex items-center justify-between md:justify-start px-6 md:px-0 flex-shrink-0
                md:flex-col md:py-8 transition-colors duration-500
                ${
                  isActive ? 'bg-transparent' : 'hover:bg-white/5'
                } cursor-pointer
              `}>
              <div className='flex flex-row md:flex-col items-center md:items-center gap-4 md:gap-8 md:h-full w-full'>
                <span className='text-sm font-light tracking-widest opacity-80 md:rotate-180 md:[writing-mode:vertical-rl]'>
                  {item.number}
                </span>

                <span
                  className={`
                    text-lg font-medium uppercase tracking-wider whitespace-nowrap 
                    md:[writing-mode:vertical-rl] md:rotate-180 ${
                      isActive ? 'md:rotate-0 hidden' : 'md:rotate-180'
                    }
                  `}>
                  {item.title}
                </span>

                <div className='md:mt-auto text-xl opacity-50'>
                  {isActive ? '-' : '+'}
                </div>
              </div>
            </div>

            <div
              className={`
                flex-1 overflow-hidden transition-all duration-700 opacity-0
                ${isActive ? 'opacity-100 delay-200' : 'opacity-0'}
              `}>
              <div className='p-8 md:p-12 w-full h-full flex flex-col justify-center min-w-[300px]'>
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
