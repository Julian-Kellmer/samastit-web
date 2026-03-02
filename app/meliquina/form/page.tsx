import React from 'react'
import { MeliquinaForm } from '../_components/MeliquinaForm'

export default function MeliquinaFormPage() {
  return (
    <main className='min-h-screen bg-black text-white py-24 px-4'>
      <div className='max-w-3xl mx-auto flex flex-col gap-12 mt-12'>
        <div className='flex flex-col gap-4'>
          <span className='text-xs uppercase tracking-widest text-gray-500'>
            Contacto
          </span>
          <h2 className='text-4xl md:text-6xl font-bold uppercase leading-none'>
            Hacé tu
            <br />
            <span className='text-primary'>consulta</span>
          </h2>
          <p className='text-gray-400 text-lg max-w-lg'>
            Contanos qué tenés en mente y te respondemos a la brevedad para
            coordinar los detalles.
          </p>
        </div>
        <MeliquinaForm />
      </div>
    </main>
  )
}
