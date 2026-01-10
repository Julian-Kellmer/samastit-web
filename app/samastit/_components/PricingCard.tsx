import React from 'react'

interface PricingCardProps {
  title: string
  price: string
  features: string[]
  isHighlight?: boolean
  buttonText?: string
  buttonLink?: string
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  features,
  isHighlight = false,
  buttonText = 'Contactar',
  buttonLink = '#',
}) => {
  return (
    <div
      className={`relative flex flex-col p-6 rounded-2xl border transition-all duration-300 group
      ${
        isHighlight
          ? 'bg-neutral-900/80 border-red-600 shadow-[0_0_30px_rgba(220,38,38,0.2)]'
          : 'bg-neutral-900/40 border-white/10 hover:border-white/30 hover:bg-neutral-900/60'
      }
      backdrop-blur-sm
    `}>
      {isHighlight && (
        <div className='absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full whitespace-nowrap'>
          Recomendado
        </div>
      )}

      <div className='mb-6'>
        <h3 className='text-xl text-neutral-400 font-medium mb-2'>{title}</h3>
        <div className='flex items-baseline gap-1'>
          <span className='text-3xl md:text-4xl font-bold text-white'>
            {price}
          </span>
          {price !== 'Consultar' && (
            <span className='text-sm text-neutral-500'>/mes</span>
          )}
        </div>
      </div>

      <ul className='space-y-3 mb-8 flex-grow'>
        {features.map((feature, index) => (
          <li
            key={index}
            className='flex items-start gap-3 text-sm text-neutral-300'>
            <svg
              className={`w-5 h-5 flex-shrink-0 ${
                isHighlight ? 'text-red-500' : 'text-neutral-500'
              }`}
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'>
              <polyline points='20 6 9 17 4 12' />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href={buttonLink}
        className={`block w-full text-center py-3 px-6 rounded-lg text-sm font-bold uppercase tracking-wide transition-colors duration-300
        ${
          isHighlight
            ? 'bg-red-600 text-white hover:bg-red-700'
            : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
        }
      `}>
        {buttonText}
      </a>
    </div>
  )
}

export default PricingCard
