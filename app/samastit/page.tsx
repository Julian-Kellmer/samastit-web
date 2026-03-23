
import { FxLinkButton } from '../components/FxButton/FxLinkButton'

const page = () => {

  return (
    <section className='layout-wrap relative bg-black text-white py-32'>
      {/* HEADER SECTION */}
      <div className='container mx-auto max-w-6xl px-4 pt-8 pb-10 flex flex-col items-start  justify-center'>
        <h1 className='text-display text-red-600 mb-4'>
          SAMASTIT
        </h1>
        <p className='text-body  max-w-2xl'>
          Modalidades y Acompañamientos <br/>
          El proceso comienza con una introducción, que puede realizarse de forma presencial u online.A partir de ahí, podés sostener tu práctica en cualquiera de las dos modalidades.
        </p>
      </div>      
      {/* PRICING / OPTIONS */}
      <div className='container mx-auto px-4 mb-32 border-t border-white/10 pt-16'>
        <div className='flex flex-col gap-16 w-full max-w-6xl mx-auto'>
          {/* PRESENCIAL */}
          <div className='flex flex-col md:flex-row gap-6 md:gap-16 border-b border-white/10 pb-16'>
            <div className='md:w-1/3'>
              <h2 className='text-h3'>
                PRESENCIAL
              </h2>
              <span className='text-body text-red-600'>
                Palermo
              </span>
            </div>
            <div className='md:w-2/3 space-y-8'>
              <div>
                <h3 className='text-h5 mb-3 text-primary'>Grupos reducidos</h3>
                <ul className='space-y-4 text-neutral-300 font-light leading-relaxed text-h6'>
                  <li className='flex items-start'>
                    <span className='text-primary mr-3'>✦</span>
                    <p>Espacios de práctica en grupos chicos, donde cada persona es acompañada según su momento.</p>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-primary mr-3'>✦</span>
                    <p>La secuencia se adapta en tiempo real, permitiendo ordenar, profundizar o reorganizar la práctica.</p>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-primary mr-3'>✦</span>
                    <p>Ideal para quienes buscan sostener una práctica constante con guía cercana.</p>
                  </li>
                </ul>
              </div>
              <div className='pt-4'>
                <FxLinkButton href='https://wa.me/+5491158044328?text=Hola!%20Quisiera%20consultar%20por%20la%20modalidad%20Presencial'>
                  Consultar
                </FxLinkButton>
              </div>
            </div>
          </div>

          {/* ONLINE */}
          <div className='flex flex-col md:flex-row gap-6 md:gap-16 border-b border-white/10 pb-16'>
            <div className='md:w-1/3'>
              <h2 className='text-h3'>
                ONLINE
              </h2>
            </div>
            <div className='md:w-2/3 space-y-12'>
              <div>
                <h3 className='text-h5 mb-3 text-primary'>1. Proceso individual</h3>
                <p className='text-neutral-300 font-light leading-relaxed text-h6 pl-6'>
                  Un espacio personalizado para iniciar o reordenar la práctica, con seguimiento y ajustes según tu proceso.
                </p>
              </div>
              <div>
                <h3 className='text-h5 mb-3 text-primary'>2. Seguimiento</h3>
                <p className='text-neutral-300 font-light leading-relaxed text-h6 pl-6'>
                  Encuentros para acompañar la evolución de la práctica, resolver bloqueos y profundizar el trabajo.
                </p>
              </div>
              <div>
                <h3 className='text-h5 mb-3 text-primary'>3. Práctica grupal</h3>
                <p className='text-neutral-300 font-light leading-relaxed text-h6 pl-6'>
                  Clases para sostener la continuidad, una vez realizada la introducción, compartiendo el proceso con otros practicantes.
                </p>
              </div>
              <div className='pt-4'>
                <FxLinkButton href='https://wa.me/+5491158044328?text=Hola!%20Quisiera%20consultar%20por%20la%20modalidad%20Online'>
                  Consultar
                </FxLinkButton>
              </div>
            </div>
          </div>

          {/* WORKSHOPS */}
          <div className='flex flex-col md:flex-row gap-6 md:gap-16 pb-8'>
            <div className='md:w-1/3'>
              <h2 className='text-h3'>
                WORKSHOPS
              </h2>
            </div>
            <div className='md:w-2/3 flex flex-col items-start gap-8'>
              <p className='text-neutral-300 font-light leading-relaxed text-h6'>
                Encuentros en distintas ciudades y espacios, donde se trabaja de forma intensiva sobre la práctica de Samastit.
              </p>
              <div className='pt-4'>
                <FxLinkButton href='https://wa.me/+5491158044328?text=Hola!%20Quisiera%20consultar%20por%20los%20Workshops'>
                  Consultar
                </FxLinkButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page
