import TextRevealOnScroll from '../../components/TextRevealOnScroll/TextRevealOnScroll'

export default function DescriptionSection() {
  return (
    <section
      id='description'
      className='md:mt-16 mt-8 h-screen md:h-50svh flex items-center md:col-start-2 md:col-end-[-2] col-span-full'>
      <TextRevealOnScroll
        as='h2'
        className='text-h2 text-center leading-[5rem]'
        text={`El cobre es uno de los metales más conductores de la naturaleza. Desde
        tiempos antiguos se utiliza para facilitar el flujo, la distribución y
        la circulación de energía. En contacto con la piel, interactúa con el
        sudor y el campo eléctrico superficial del cuerpo, generando
        microintercambios que muchas personas perciben como calor, descarga
        sutil o mayor presencia corporal.`}
      />
    </section>
  )
}
