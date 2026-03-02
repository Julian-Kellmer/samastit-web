import React from 'react'
import Link from 'next/link'
import { FxActionButton } from './components/FxButton/FxActionButton'

export default function NotFound() {
  return (
    <main className='min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 text-center'>
      <div className='flex flex-col items-center gap-8 z-10'>
        {/* Large 404 Text */}
        <h1 className='text-[8rem] md:text-[12rem] xl:text-[16rem] leading-none font-bold text-[var(--color-primary)] font-oswald'>
          404
        </h1>

        <div className='flex flex-col gap-4 max-w-lg'>
          <h2 className='text-2xl md:text-4xl font-bold uppercase'>
            Página no encontrada
          </h2>
          <p className='text-gray-400 text-lg'>
            Parece que te has desviado del camino. La página que estás buscando
            no existe o ha sido movida a otro lugar.
          </p>
        </div>

        <div className='mt-8'>
          <Link href='/'>
            <FxActionButton onClick={() => {}}>Volver al inicio</FxActionButton>
          </Link>
        </div>
      </div>

      {/* Abstract Background Element (optional for aesthetics) */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-white/5 rounded-full blur-[100px] pointer-events-none -z-0' />
    </main>
  )
}
