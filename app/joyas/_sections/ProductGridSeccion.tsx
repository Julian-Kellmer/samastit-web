import ProductCard from '../../components/ProductCard'

const joyas = [
  {
    title: 'Viracocha Patagónico',
    description:
      'Arraigo · Origen · Fuerza primordial.\n\nAmuleto de cobre puro con doble imán y sistema de salto de chispa. Representa al Viracocha Patagónico, una adaptación simbólica del principio creador.\n\nEn la cosmovisión andina, Viracocha es el hacedor del universo, quien ordena el caos y da forma al mundo. Esta versión está conectada al sur, a la tierra y al arraigo profundo.\n\nDiseñado para acompañar procesos de estabilidad, sostén y conexión con la fuerza terrestre.',
    price: 60000,
    img: './joyas/joya1.png',
  },
  {
    title: 'Viracocha Andino',
    description:
      'Creación · Orden · Alineación.\n\nViracocha es el principio creador en la cosmovisión andina, el que ordena el caos y da forma al mundo.\n\nRealizado en cobre puro con doble imán y salto de chispa. Es un símbolo de alineación entre intención y acción.\n\nIdeal para momentos donde se busca claridad y orden interno.',
    price: 60000,
    img: './joyas/joya2.png',
  },
  {
    title: 'Botón Antena',
    description:
      'Presencia sutil · Uso diario.\n\nBotón de cobre macizo para llevar en la ropa. Funciona como un punto de conducción energética discreto y constante.\n\nDisponible en versión lisa o grabada con símbolo, inicial o tótem personal.\n\nUn amuleto silencioso que acompaña sin imponerse.',
    price: 45000,
    img: './joyas/joya3.png',
  },
  {
    title: 'Argolla',
    description:
      'Ciclo · Continuidad.\n\nArgolla lisa de cobre puro, diseño abierto con salto de chispa y doble imán.\n\nLa forma circular representa el ciclo eterno, sin principio ni fin.\n\nUna pieza esencial que acompaña el flujo continuo del campo personal.',
    price: 45000,
    img: './joyas/joya4.png',
  },
  {
    title: 'Chakana',
    description:
      'Puente · Equilibrio · Integración.\n\nAmuleto de cobre puro con doble imán y salto de chispa.\n\nLa Chakana es la cruz andina que une cielo, tierra y mundo interior.\n\nSimboliza el equilibrio entre los planos y el orden del universo. Diseñada para acompañar procesos de integración y coherencia interna.',
    price: 60000,
    img: './joyas/joya5.png',
  },
  {
    title: 'Lilith',
    description:
      'Autonomía · Sabiduría instintiva.\n\nTallado en cobre puro con doble imán y salto de chispa.\n\nLilith representa la fuerza original, la autonomía y la voz instintiva no domesticada.\n\nLa serpiente simboliza conocimiento, renovación y energía vital. Un amuleto para quienes eligen escucharse y afirmarse.',
    price: 60000,
    img: './joyas/joya6.png',
  },
  {
    title: 'Flor de la Vida',
    description:
      'Orden · Armonía universal.\n\nAmuleto de cobre puro con doble imán.\n\nLa Flor de la Vida es un patrón geométrico presente en múltiples culturas, asociado a la estructura base de la creación.\n\nEl cobre actúa como conductor de esta simbología de orden y coherencia.',
    price: 60000,
    img: './joyas/joya7.png',
  },
  {
    title: 'Patrón 369',
    description:
      'Intención · Foco · Voluntad.\n\nAnillo-sello de cobre puro con doble imán.\n\nEl patrón 369 encuadra la Flor de la Vida, concentrando la energía en un punto.\n\nInspirado en la idea de que ciertos números organizan la realidad. Diseñado para anclar intención y dirección.',
    price: 60000,
    img: './joyas/joya8.png',
  },
  {
    title: 'Moneda Escudo',
    description:
      'Centro · Protección.\n\nMoneda de cobre puro con doble imán.\n\nEl escudo central representa la identidad; las doce estrellas, los ciclos completos.\n\nUna pieza pensada para fortalecer el centro personal y acompañar procesos de protección consciente.',
    price: 60000,
    img: './joyas/joya9.png',
  },
  {
    title: 'Huellas',
    description:
      'Identidad · Vínculo.\n\nAmuleto de cobre puro con doble imán, diseñado para grabar una huella dactilar.\n\nPuede llevar la huella propia como símbolo de autoafirmación o la de alguien querido como vínculo consciente.\n\nUna extensión simbólica de la identidad.',
    price: 90000,
    img: './joyas/joya10.png',
  },
  {
    title: 'Medallón Motor Bio-Magnético',
    description:
      'Campo activo · Tecnología discreta.\n\nMedallón de cobre con frente liso y elegante. Su funcionamiento se encuentra en el reverso, donde integra un imán de neodimio y una bobina de cobre.\n\nEste conjunto genera un campo toroidal estable y continuo que interactúa con el bio-campo humano, ayudando a ordenar la energía y descargar estática.\n\nDiseñado para uso cotidiano, sin estética invasiva.',
    price: 120000,
    img: './joyas/joya11.png',
  },
  {
    title: 'Medallón Samastit',
    description:
      'Tecnología · Campo · Red.\n\nIntegra el Motor Bio-Magnético Samastit, combinando imán de neodimio y bobina de cobre para generar un campo toroidal activo y continuo.\n\nEn el reverso presenta un diseño de circuito electrónico que simboliza red, flujo de información y coherencia.\n\nRepresenta el cuerpo como circuito y la conciencia como nodo.',
    price: 160000,
    img: './joyas/joya12.png',
  },
  {
    title: 'Pulsera Lisa',
    description:
      'Bienestar · Simplicidad.\n\nPulsera de cobre macizo con imanes en los extremos.\n\nDiseñada para el uso diario, cómoda, resistente y de presencia discreta.',
    price: 90000,
    img: './joyas/joya13.png',
  },
  {
    title: 'Pulsera Trenzada',
    description:
      'Unión · Resiliencia.\n\nPulsera de cobre macizo trenzado con imanes.\n\nEl trenzado simboliza la fuerza que surge de la unión.',
    price: 90000,
    img: './joyas/joya14.png',
  },
  {
    title: 'Pulsera Samastit · Código de Red',
    description:
      'Campo · Flujo · Presencia.\n\nPulsera ancha de cobre macizo con imanes en los extremos. En el centro lleva grabado el código de red Samastit, inspirado en circuitos electrónicos.\n\nDiseñada para generar un campo estable y continuo en la muñeca.\n\nEl código central funciona como recordatorio simbólico: el cuerpo como circuito, la conciencia como nodo.',
    price: 120000,
    img: './joyas/joya15.png',
  },
  {
    title: 'Cadena',
    description:
      'Continuidad · Soporte.\n\nCadena de cobre macizo pensada como línea de flujo constante.\n\nIdeal para acompañar medallones y cerrar el circuito.',
    price: 120000,
    img: './joyas/joya16.png',
  },
  {
    title: 'Medallón Lienzo',
    description:
      'Manifestación consciente · Tecnología activa.\n\nEn el reverso incorpora el Motor Bio-Magnético Samastit, generando un campo toroidal constante.\n\nEn el frente, un lienzo de cobre puro permite grabar símbolos, iniciales, mantras o fechas.\n\nEl símbolo se apoya sobre un campo activo que sostiene y amplifica la intención.',
    price: 160000,
    img: './joyas/joya17.png',
  },
]

export default function ProductGridSection() {
  return (
    <section className='layout-wrap col-span-full md:col-start-2 md:col-end-[-2] flex flex-col gap-8 md:my-16 my-8'>
      {/* Header */}
      <div className='flex flex-col items-end w-full'>
        <span className='text-body text-white/80'>Nuestros</span>
        <h2 className='text-[4rem] md:text-[8rem] leading-[0.8] text-[var(--color-primary)] font-[family-name:var(--font-oswald)] uppercase'>
          Amuletos
        </h2>
      </div>

      {/* Grid */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-12 w-full group/grid'>
        {/* Generate 9 Placeholder Cards */}
        {joyas.map((joya, i) => (
          <ProductCard
            key={i}
            title={joya.title}
            description={joya.description}
            price={joya.price}
            img={joya.img}
          />
        ))}
      </div>
    </section>
  )
}
