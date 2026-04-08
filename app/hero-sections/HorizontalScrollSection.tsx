'use client'

import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

export default function HorizontalScrollSection() {
  const container = useRef<HTMLDivElement>(null)
  const track = useRef<HTMLDivElement>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const mm = gsap.matchMedia()

    mm.add('(min-width: 768px)', () => {
      if (!container.current || !track.current) return

      const getMaxX = () => {
        const total = track.current!.scrollWidth
        const view = container.current!.clientWidth
        return -(total - view)
      }

      gsap.to(track.current, {
        x: getMaxX,
        ease: 'none',
        scrollTrigger: {
          trigger: container.current,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          end: () =>
            `+=${track.current!.scrollWidth - container.current!.clientWidth}`,
        },
      })
    })

    return () => mm.revert()
  }, [])

  // Prevenir scroll en el background cuando el modal está abierto
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isModalOpen])

  return (
    <div
      ref={container}
      className='relative min-h-screen md:h-screen overflow-x-hidden md:overflow-hidden'>
      <div
        ref={track}
        className='flex flex-col md:flex-row md:flex-nowrap w-full md:w-[300vw] h-auto md:h-full'>
        {/* Panel 1: Hero Title + Description */}
        <div className='relative panel w-full h-screen md:w-[120svw] md:h-screen flex-shrink-0 flex items-center justify-center p-8 border-b md:border-b-0 border-white/5'>
          <div className='relative z-10 w-full h-[80%] grid grid-cols-1 md:grid-cols-2 gap-12 items-start pt-10 md:pt-0 md:items-end'>
            <div className='relative z-20 flex flex-col justify-start md:justify-end'>
              <h1 className='text-display text-primary uppercase  '>
                GUÍA
                <br />
                REALIZADOR
              </h1>
              <p className='text-body px-3'>La práctica de intervenir</p>
            </div>
          </div>
          <div className='absolute flex justify-end items-end top-0 left-0 w-full h-[120svh] md:h-screen pointer-events-none'>
            <div className='image-contain z-0 relative h-screen md:h-screen w-full md:w-[65svw] bg-gradient-to-b from-background/50 to-transparent'>
              {/* Mobile */}
              <Image
                src='/images/PabloSinCuerpo.png'
                alt='Hero Image'
                fill
                className='object-contain object-bottom md:hidden '
              />
              {/* Desktop */}
              <Image
                src='/images/PabloSinCuerpo.jpeg'
                alt='Hero Image'
                fill
                className='hidden md:block object-contain md:object-right-bottom'
              />
              {/* Gradientes para difuminar bordes en mobile */}
              <div className='absolute top-0 left-0 w-full h-[15%] bg-gradient-to-b from-[#030404] to-transparent md:hidden pointer-events-none' />
              <div className='absolute bottom-0 left-0 w-full h-[15%] bg-gradient-to-t from-[#030404] to-transparent md:hidden pointer-events-none' />
            </div>
          </div>
        </div>

        {/* Panel 2: Text + Modal Button */}
        <div className='p-8 md:p-16 panel w-full min-h-screen md:w-[80svw] md:h-screen flex-shrink-0 flex flex-col items-start justify-center border-b md:border-b-0 border-white/5'>
          <div className='py-8 md:py-16 flex-1 flex flex-col items-start justify-center w-full max-w-5xl text-start gap-12'>
            <p className='text-h4 text-2xl md:text-4xl'>
              Después de 27 años practicando y enseñando yoga, hoy comparto una
              forma clara, accesible y adaptable de intervenir tu cuerpo y tu
              energía. <br />
              También diseño y forjo amuletos: piezas creadas a mano que
              acompañan procesos de transformación.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className='px-8 py-4 border border-white/20 text-white uppercase text-sm tracking-widest hover:bg-white hover:text-black transition-colors duration-300 rounded-full'>
              Leer biografía
            </button>
          </div>
        </div>

        {/* Panel 3: Title + ImageMarquee */}
        <div className='z-10 panel w-full min-h-[50vh] md:w-screen md:h-[80svh] flex-shrink-0 flex flex-col justify-center relative'>
          <div className='layout-grid w-full h-full text-center z-10 px-4'>
            <div className='col-span-full md:col-start-2 md:col-span-6 h-full flex flex-col justify-center items-center gap-12 py-16 md:py-0'>
              <h2 className='text-display text-primary'>SAMASTIT</h2>
              <h4 className='text-h6 px-4'>
                Sabiduría milenaria, un camino porpio para acceder al estado de
                yoga
              </h4>
            </div>
          </div>
        </div>
      </div>

      {/* Biografía Modal */}
      {isModalOpen && (
        <div
          className='fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4'
          onClick={() => setIsModalOpen(false)}>
          <div
            className='bg-zinc-900 border border-white/10 p-8 md:p-12 max-w-3xl w-full max-h-[85vh] overflow-y-auto relative rounded-2xl'
            onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsModalOpen(false)}
              className='fixed bottom-6 right-6 md:bottom-12 md:right-12 z-[110] flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#ffb852] text-[#ffb852] uppercase text-sm font-bold tracking-widest bg-zinc-900/80 backdrop-blur-md rounded-full hover:bg-[#ffb852] hover:text-black transition-all duration-300 shadow-lg shadow-black/50'>
              <span>Cerrar</span>
              <span className='text-xl leading-none mb-[2px]'>&times;</span>
            </button>
            <h3 className='text-h4 uppercase mb-6 text-primary'>Biografía</h3>
            <div className='text-body space-y-4 text-white/80 whitespace-pre-line'>
              {/* Aquí irá el texto de la biografía que se pegue luego */}
              Soy Pablo Pirillo. Nací en Buenos Aires en 1975. Desde chico tuve
              experiencias que me llevaron a preguntarme por la vida y la
              muerte. Con el tiempo entendí que no somos sólo cuerpo ni sólo
              mente, y esa intuición fue marcando el rumbo de mi búsqueda.{' '}
              <br />
              <br />
              Durante muchos años trabajé en distintos oficios y en producción
              de cine y televisión. Mientras tanto esa pregunta seguía ahí. En
              un momento viajé a Perú y allí conocí a Benito Corigüaman, de la
              comunidad Q’ero. Ese encuentro fue importante. Recuerdo que en una
              conversación me dijo algo muy simple: que necesitaba enraizar lo
              espiritual en lo cotidiano. Esa frase se me quedó grabada.
              <br />
              <br />
              Después de ese viaje emprendí un recorrido por la Patagonia con el
              objetivo claro de encontrar un lugar, pero sin un plan demasiado
              definido. En ese viaje descubrí Meliquina, un paisaje al que
              volvería muchas veces con el paso de los años. En ese momento no
              lo sabía, pero ese lugar iba a quedar profundamente ligado a mi
              vida.
              <br />
              <br />
              Poco tiempo después empecé a practicar Hatha Yoga y Meditación
              Trascendental. Con los años profundicé en Iyengar y finalmente en
              Ashtanga Yoga. Durante aproximadamente diez años viajé a India
              para estudiar con distintos maestros.
              <br />
              <br />
              En Mysore practiqué con Sri K. Pattabhi Jois, creador del método
              Ashtanga Yoga, siendo el único argentino en haber practicado allí
              con él. También practiqué y asistí a Sharath Rangaswami en Mysore
              en varias oportunidades, participando además en uno de los pocos
              talleres que ofreció para profesores.
              <br />
              <br />
              Durante diecisiete años guié una comunidad de práctica en
              distintas salas de Buenos Aires, espacios donde practicaban
              principalmente profesores y de donde con el tiempo surgieron
              muchos docentes que luego abrirían sus propias escuelas.
              <br />
              <br />
              En esos años también organicé retiros y seminarios en distintos
              países —España, Portugal, Brasil, Chile, Bolivia, Perú y Uruguay—
              además de encuentros en distintas regiones de Argentina.
              <br />
              <br />
              Mientras todo eso ocurría, Meliquina seguía siendo un lugar al que
              volvía una y otra vez. A veces para descansar, otras simplemente
              para estar o impartir retiros de yoga. Con el tiempo ese vínculo
              fue tomando otra forma. Empecé a entender ese lugar no sólo como
              un paisaje sino como un espacio donde dejarse atravesar por el
              entorno, por el clima y por el ritmo de la naturaleza.
              <br />
              <br />
              Fue allí donde empezó a aparecer otra dimensión del proceso.
              Comencé a trabajar con objetos en desuso, pintándolos de negro y
              transformándolos mediante intervenciones con polvo de cobre. En
              ese trabajo apareció una comprensión clara: intervenir puede
              cambiar la naturaleza de las cosas, pero también uno puede ser
              intervenido por el lugar, por el tiempo y por la práctica.
              <br />
              <br />
              Con los años entendí que esa misma lógica también podía aplicarse
              al cuerpo.
              <br />
              <br />
              Después de más de veintisiete años practicando y enseñando yoga,
              hoy comparto una forma clara y adaptable de trabajar con la
              energía que llamo Samastit.
              <br />
              <br />
              Paralelamente diseño y forjo piezas de cobre trabajadas a mano. El
              cobre ha sido utilizado desde la antigüedad en distintas culturas
              como material conductor y organizador de la energía, y estas
              piezas nacen de esa misma comprensión: que todo puede ser
              intervenido, transformado y puesto nuevamente en relación con su
              entorno.
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
