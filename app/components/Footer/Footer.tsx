import Link from 'next/link'
import {FxLinkButton} from '../FxButton/FxLinkButton'

export default function Footer() {
  return (
    <footer className='bg-zinc-950 text-white pt-20 pb-10 px-6 md:px-20 border-t border-white/10'>
      <div className='max-w-[1400px] mx-auto'>
        {/* Top Section */}
        <div className='flex flex-col md:flex-row justify-between mb-20 gap-10 md:gap-0'>
          {/* Logo & CTA */}
          <div className='flex flex-col items-start gap-10'>
            <div className='w-[300px] md:w-[400px]'>
              <h1 className='text-4xl md:text-6xl font-black uppercase leading-sm tracking-tighter'>
                Pablo
                <br />
                Pirillo
              </h1>
            </div>
            <FxLinkButton href='/contacto'>Contactame</FxLinkButton>
          </div>

          {/* Navigation */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 text-lg font-pp font-medium'>
            {/* Pages */}
            <div className='flex flex-col gap-4'>
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
                href='/amuletos'
                className='hover:text-white/70 transition-colors text-[16px]'>
                Amuletos
              </Link>
              <Link
                href='/meliquina'
                className='hover:text-white/70 transition-colors text-[16px]'>
                Experiencia meliquina
              </Link>
              <Link
                href='/ashtanga'
                className='hover:text-white/70 transition-colors text-[16px]'>
                Metodo Ashtanga
              </Link>
            </div>

            {/* Products & Services */}
            <div className='flex flex-col gap-4'>
              <h3 className='text-white mb-2 text-[24px] '>Productos y servicios</h3>
              <Link
                href='/meliquina'
                className='hover:text-white/70 transition-colors text-[16px]'>
                Reservar Meliquina
              </Link>
              <Link
                href='/joyas'
                className='hover:text-white/70 transition-colors text-[16px]'>
                Comprar Joyas
              </Link>
              <Link
                href='/videos'
                className='hover:text-white/70 transition-colors text-[16px]'>
                Comprar videos
              </Link>
            </div>

            {/* Contact */}
            <div className='flex flex-col gap-4'>
              <h3 className='text-white mb-2 text-[24px]'>Contacto</h3>
              <Link
                href='https://instagram.com'
                target='_blank'
                className='hover:text-white/70 transition-colors text-[16px]'>
                Instagram
              </Link>
              <Link
                href='mailto:info@pablopirillo.com'
                className='hover:text-white/70 transition-colors text-[16px]'>
                Mail
              </Link>
              <Link
                href='https://wa.me/123456789'
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
            <p className='leading-relaxed text-xs'>
              Lorem impsum blacksde Lorem impsum blacksdeLorem impsum
              blacksdeLorem impsum blacksdeLorem impsum blacksde
            </p>
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
            <Link
              href='/privacy'
              className='hover:text-white transition-colors'>
              Privacy policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
