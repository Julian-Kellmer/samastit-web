'use client'

import { useState } from 'react'
import type { ReactNode } from 'react'
import MeliquinaDesktop from './MeliquinaDesktop'

export interface AccordionItem {
  id: string
  number: string
  title: string
  content: ReactNode
}

interface Props {
  items: AccordionItem[]
  activeId?: string | null
  onToggle?: (id: string | null) => void
}

export default function MeliquinaAccordion({ items, activeId: externalActiveId, onToggle: externalOnToggle }: Props) {
  const [internalActiveId, setInternalActiveId] = useState<string | null>(items[0]?.id ?? null)

  const activeId = externalActiveId !== undefined ? externalActiveId : internalActiveId

  function toggle(id: string) {
    if (id === activeId) return
    
    if (externalOnToggle) {
      externalOnToggle(id)
    } else {
      setInternalActiveId(id)
    }
  }

  return (
    <>
      {/* ── Mobile only ─────────────────────────────────────────── */}
      <div className='flex flex-col lg:hidden text-white'>
        {items.map(item => {
          const active = item.id === activeId
          return (
            <div key={item.id} className='border-b border-white/20 last:border-0'>
              <button
                onClick={() => toggle(item.id)}
                className='w-full flex items-center gap-4 px-4 py-5 text-left hover:bg-white/5 transition-colors'>
                <span className='text-sm font-light opacity-60 tabular-nums'>{item.number}</span>
                <span className='text-base font-medium uppercase tracking-wider'>{item.title}</span>
                <span className='ml-auto text-xl opacity-50 select-none'>{active ? '−' : '+'}</span>
              </button>
              <div
                style={{
                  display: 'grid',
                  gridTemplateRows: active ? '1fr' : '0fr',
                  transition: 'grid-template-rows 500ms ease-in-out',
                }}>
                <div className='overflow-hidden min-h-0'>
                  <div className='px-4 pb-6 pt-2'>{item.content}</div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* ── Tablet / Desktop ────────────────────────────────────── */}
      <div className='hidden lg:block'>
        <MeliquinaDesktop items={items} />
      </div>
    </>
  )
}
