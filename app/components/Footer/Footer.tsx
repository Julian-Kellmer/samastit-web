'use client'
import Link from 'next/link'
import { FxLinkButton } from '../FxButton/FxLinkButton'
import { FxActionButton } from '../FxButton/FxActionButton'

export default function Footer() {
  return (
    <footer className='bg-zinc-950 text-white pt-20 pb-10 px-6 md:px-20 border-t border-white/10'>
      <div className='max-w-[1400px] mx-auto'>
        {/* Top Section */}
        <div className='flex flex-col  justify-between mb-20 gap-10 md:gap-0'>
          {/* Logo & CTA */}
          <div className='flex justify-between  items-end gap-10'>
            <div className='w-[300px] md:w-[400px]'>
              <h1 className='text-4xl md:text-6xl font-black uppercase leading-sm tracking-tighter'>
                Pablo
                <br />
                Pirillo
              </h1>
            </div>
            <FxActionButton
              onClick={() =>
                window.open('https://wa.me/+5491158044328', '_blank')
              }>
              Contactame
            </FxActionButton>
          </div>

          {/* Navigation */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 text-lg font-pp font-medium pt-16'>
            {/* Pages */}
            <div className='flex flex-col gap-4 flex-1'>
              <h3 className='text-white mb-2 text-[24px]'>Paginas</h3>
              <Link
                href='/'
                className='hover:text-white/70 transition-colors text-[16px]'>
                Home
              </Link>
              <Link
                href='/samastit'
                className='hover:text-white/70 transition-colors text-[16px]'>
                Samastit
              </Link>
              <Link
                href='/joyas'
                className='hover:text-white/70 transition-colors text-[16px]'>
                Amuletos
              </Link>
              <Link
                href='/meliquina'
                className='hover:text-white/70 transition-colors text-[16px]'>
                Meliquina
              </Link>
              <Link
                href='/#ashtanga'
                className='hover:text-white/70 transition-colors text-[16px]'>
                Ashtanga
              </Link>
            </div>

            {/* Products & Services */}
            <div className='flex flex-col gap-4 flex-1  md:items-center ' > 
              <h3 className='text-white mb-2 text-[24px] '>
                Productos y servicios
              </h3>
              <Link
                href='/meliquina'
                className='hover:text-white/70 transition-colors text-[16px]'>
                Reservar Meliquina
              </Link>
              <Link
                href='/joyas'
                className='hover:text-white/70 transition-colors text-[16px]'>
                Amuletos Disponibles
              </Link>
              <Link
                href='/videos'
                className='hover:text-white/70 transition-colors text-[16px]'>
                Curso Ashtanga
              </Link>
            </div>

            {/* Contact */}
            <div className='flex flex-col gap-4 flex-1 md:items-end'>
              <h3 className='text-white mb-2 text-[24px]'>Contacto</h3>
              <Link
                href='https://instagram.com/samastit'
                target='_blank'
                className='hover:text-white/70 transition-colors text-[16px]'>
                Instagram
              </Link>
              <Link
                href='mailto:ashtangapirillo@gmail.com'
                className='hover:text-white/70 transition-colors text-[16px]'>
                Mail
              </Link>
              <Link
                href='https://wa.me/+5491158044328'
                target='_blank'
                className='hover:text-white/70 transition-colors'>
                Whatsapp
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className='w-full h-[1px] bg-white/10 mb-10'></div>

        {/* Bottom Section */}
        <div className='flex flex-col md:flex-row justify-between items-start md:items-end gap-10 text-sm text-zinc-400'>
          <div className='max-w-md'>
            <p className='text-white mb-2'>
              Pagina desarrollada por Julian Kellmer
            </p>
            <a
              href='https://jk-portfolio-neon.vercel.app/'
              target='_blank'
              className='leading-relaxed text-xs'>
              Te invito a visitar mi portfolio y si tienes alguna duda no dudes
              en contactarme
            </a>
            <a
              href='whatsapp://send?phone=5491166666666'
              target='_blank'
              className='leading-relaxed text-xs'>
              Whatsapp
            </a>
          </div>

          <div className='flex gap-6'>
            <Link
              href='/privacy'
              className='hover:text-white transition-colors'>
              Privacy policy
            </Link>
            <Link
              href='/copyright'
              className='hover:text-white transition-colors'>
              CopyRight Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
