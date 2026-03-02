import React from 'react'

export const metadata = {
  title: 'Política de Privacidad | Samastit',
  description: 'Política de Privacidad y Tratamiento de Datos Personales',
}

export default function PrivacyPolicyPage() {
  return (
    <main className='min-h-screen bg-black text-white py-32 px-4'>
      <div className='max-w-4xl mx-auto flex flex-col gap-12'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-4xl md:text-6xl font-bold uppercase leading-none'>
            Política de{' '}
            <span className='text-[var(--color-primary)]'>Privacidad</span>
          </h1>
          <p className='text-gray-400 text-lg uppercase tracking-widest mt-4'>
            Última actualización: Marzo 2026
          </p>
        </div>

        <article className='prose prose-invert prose-lg max-w-none space-y-8'>
          <section>
            <h2 className='text-2xl font-bold text-white mb-4'>
              1. Información que recopilamos
            </h2>
            <p className='text-gray-300 leading-relaxed'>
              Recopilamos información personal que usted nos proporciona
              voluntariamente al utilizar nuestros servicios, suscribirse a
              boletines o realizar consultas de reserva para nuestros espacios
              y/o procesos de acompañamiento. Esto puede incluir, entre otros:
              nombre, dirección de correo electrónico, número de teléfono y
              cualquier otra información que decida brindarnos en el formulario
              de contacto o reserva.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-white mb-4'>
              2. Uso de la información
            </h2>
            <p className='text-gray-300 leading-relaxed'>
              La información recopilada se utiliza exclusivamente para:
            </p>
            <ul className='list-disc pl-6 text-gray-300 space-y-2 mt-4'>
              <li>
                Coordinar reservas y brindarle soporte sobre nuestros servicios.
              </li>
              <li>
                Procesar pagos de forma segura a través de nuestros proveedores
                (ej. Mercado Pago).
              </li>
              <li>Responder a sus consultas técnicas o de soporte.</li>
              <li>
                Enviar comunicaciones administrativas o avisos sobre cambios en
                nuestras políticas.
              </li>
            </ul>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-white mb-4'>
              3. Protección de datos
            </h2>
            <p className='text-gray-300 leading-relaxed'>
              Implementamos medidas de seguridad técnicas y organizativas
              diseñadas para proteger su información personal contra accesos no
              autorizados, alteraciones, divulgación o destrucción. Sin embargo,
              ninguna transmisión por Internet es 100% segura, por lo que no
              podemos garantizar seguridad absoluta.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-white mb-4'>
              4. Proveedores de terceros
            </h2>
            <p className='text-gray-300 leading-relaxed'>
              Podemos emplear empresas e individuos de terceros para facilitar
              nuestro servicio (como plataformas de pago y alojamiento web).
              Estos terceros tienen acceso a su información personal únicamente
              para realizar estas tareas en nuestro nombre y están obligados a
              no divulgarla ni utilizarla con ningún otro fin.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-white mb-4'>
              5. Sus derechos
            </h2>
            <p className='text-gray-300 leading-relaxed'>
              Usted tiene el derecho de solicitar el acceso, rectificación o
              eliminación de sus datos personales en cualquier momento. Para
              ejercer estos derechos, por favor contáctenos a través de nuestro
              correo electrónico oficial disponible en la sección de contacto.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-white mb-4'>
              6. Cambios a esta política
            </h2>
            <p className='text-gray-300 leading-relaxed'>
              Podemos actualizar nuestra Política de Privacidad de vez en
              cuando. Le notificaremos cualquier cambio publicando la nueva
              Política de Privacidad en esta página y actualizando la fecha de
              entrada en vigor.
            </p>
          </section>
        </article>
      </div>
    </main>
  )
}
