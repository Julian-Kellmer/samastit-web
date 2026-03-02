import Link from 'next/link'

export const metadata = {
  title: 'Políticas de Copyright | Samastit',
  description: 'Derechos de autor y propiedad intelectual',
}

export default function CopyrightPage() {
  return (
    <main className='min-h-screen bg-black text-white py-32 px-4'>
      <div className='max-w-4xl mx-auto flex flex-col gap-12'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-4xl md:text-6xl font-bold uppercase leading-none'>
            Políticas de{' '}
            <span className='text-[var(--color-primary)]'>Copyright</span>
          </h1>
          <p className='text-gray-400 text-lg uppercase tracking-widest mt-4'>
            Propiedad Intelectual
          </p>
        </div>

        <article className='prose prose-invert prose-lg max-w-none space-y-8'>
          <section>
            <h2 className='text-2xl font-bold text-white mb-4'>
              1. Titularidad de los contenidos
            </h2>
            <p className='text-gray-300 leading-relaxed'>
              Todo el contenido presente en este sitio web, incluyendo pero no
              limitándose a textos, fotografías, gráficos, logotipos, íconos,
              imágenes, diseño de interfaces, clips de audio, descargas
              digitales, recopilaciones de datos, software y diseños de
              amuletos/joyería (en particular las piezas de cobre y esquemas de
              los motores biomagnéticos), es propiedad exclusiva de Samastit y/o
              sus creadores originales, y está protegido por las leyes
              internacionales de derechos de autor y propiedad intelectual.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-white mb-4'>
              2. Restricciones de uso
            </h2>
            <p className='text-gray-300 leading-relaxed'>
              Queda terminantemente prohibida la reproducción, distribución,
              transmisión, modificación, adaptación, exhibición pública,
              publicación o venta de cualquier material de este sitio sin la
              autorización expresa y por escrito de los titulares.
            </p>
            <p className='text-gray-300 leading-relaxed mt-4'>
              Específicamente, los diseños de nuestras piezas (amuletos, botones
              y anillos) están protegidos y no pueden ser copiados, moldeados o
              reproducidos bajo ningún concepto para fines comerciales ni
              divulgativos sin nuestro consentimiento.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-white mb-4'>
              3. Uso personal
            </h2>
            <p className='text-gray-300 leading-relaxed'>
              Se concede una licencia limitada, revocable y no exclusiva para
              acceder y hacer un uso personal de este sitio web. Esto no incluye
              la descarga (excepto la memoria caché de la página) o copia de la
              información de la cuenta en beneficio de otro comerciante, ni el
              uso de minería de datos, robots o herramientas similares de
              recopilación y extracción de datos.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-white mb-4'>
              4. Marcas registradas
            </h2>
            <p className='text-gray-300 leading-relaxed'>
              Las marcas, nombres comerciales y logotipos que aparecen en esta
              página son propiedad de Samastit o de terceros que han autorizado
              su uso. No se puede utilizar ninguna marca registrada en relación
              con ningún producto o servicio que no sea de nuestra propiedad, de
              ninguna manera que pueda causar confusión entre los clientes o que
              nos menosprecie o desacredite.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-white mb-4'>
              5. Notificación de infracciones
            </h2>
            <p className='text-gray-300 leading-relaxed'>
              Si usted cree que su obra ha sido copiada de una manera que
              constituye una infracción de los derechos de autor, por favor
              póngase en contacto con nosotros inmediatamente proporcionando una
              descripción detallada de la obra y la ubicación dentro de nuestro
              sitio donde considera que se ha producido la infracción.
            </p>
          </section>
        </article>

        <div className='pt-8 border-t border-white/10'>
          <Link href='/'>Volver al inicio</Link>
        </div>
      </div>
    </main>
  )
}
