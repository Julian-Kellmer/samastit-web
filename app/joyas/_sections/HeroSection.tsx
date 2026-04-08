import TextRevealOnScroll from '../../components/TextRevealOnScroll/TextRevealOnScroll'

export default function HeroSection() {
  return (
    <>
      <section
        id="hero"
        className="h-[50svh] md:h-screen flex flex-col justify-center col-span-full"
      >
        <h1 className="text-display col-span-full">amuletos energeticos</h1>
        <p className="text-body md:col-span-6 col-span-full">
          Diseñados para intervenir tu energía en el día a día.
        </p>
        <a
          href="https://www.instagram.com/cobreespacio"
          target="_blank"
          rel="noreferrer"
          className="text-body text-white/50 hover:text-white/80 transition-colors text-sm mt-1">
          @cobreespacio
        </a>
      </section>

      <section className="col-span-full md:px-8 mt-8 min-h-[50svh] flex flex-col items-center">
        <div className="text-center md:h-[80svh] flex flex-col justify-center items-center mb-16 w-full gap-6">

          {/* Título */}
          <h2 className="text-h4 w-full">
            <TextRevealOnScroll
              text="El cobre en Samastit."
              wordClassName="text-[#ffb852]"
            />
          </h2>

          {/* Cita */}
          <div className="text-h4 w-full italic">
            <TextRevealOnScroll
              text="El cobre no cura. Es un medio conductor."
              wordClassName="opacity-50"
            />
          </div>

          {/* Cuerpo */}
          <div className="text-h4 w-full">
            <TextRevealOnScroll text="El cuerpo humano funciona a través de impulsos eléctricos. El cobre, uno de los metales más conductores, se utiliza para facilitar esa transmisión." />
          </div>

          <div className="text-h4 w-full">
            <TextRevealOnScroll text="Es un oligoelemento esencial, involucrado en la formación del tejido conectivo y distintos procesos del organismo. Además, posee propiedades antibacterianas ampliamente estudiadas." />
          </div>

          <div className="text-h4 w-full">
            <TextRevealOnScroll text="En la tradición ayurvédica, se utiliza también en contacto con el agua (Tamra Jal), donde pequeñas trazas del metal pasan al líquido." />
          </div>

          <div className="text-h4 w-full">
            <TextRevealOnScroll text="En Samastit, el cobre no es decorativo. Es un material elegido por su capacidad de conducción." />
          </div>

          {/* Cierre poético */}
          <div className="text-h4 w-full font-bold">
            <TextRevealOnScroll
              text="El cuerpo como circuito. El cobre como puente."
              wordClassName="text-[#ffb852]"
            />
          </div>

          {/* Nota */}
          <div className="text-h4 w-full">
            <TextRevealOnScroll
              text="Todos los amuletos pueden realizarse en otros metales a pedido."
              wordClassName="opacity-40"
            />
          </div>

        </div>
      </section>
    </>
  )
}
