import ProductCard from '../../components/ProductCard'

const joyas = [
  {
    title: 'Botón Antena',
    description:
      'Arraigo · Origen · Fuerza primordial.\n\nAmuleto de cobre puro con doble imán y sistema de salto de chispa. Representa al Viracocha Patagónico, una adaptación simbólica del principio creador.\n\nEn la cosmovisión andina, Viracocha es el hacedor del universo, quien ordena el caos y da forma al mundo. Esta versión está conectada al sur, a la tierra y al arraigo profundo.\n\nDiseñado para acompañar procesos de estabilidad, sostén y conexión con la fuerza terrestre.',
    price: 45000,
    img: '/joyas/joya1.png',
  },
  {
    title: 'Flor de la vida',
    description:
      'Creación · Orden · Alineación.\n\nViracocha es el principio creador en la cosmovisión andina, el que ordena el caos y da forma al mundo.\n\nRealizado en cobre puro con doble imán y salto de chispa. Es un símbolo de alineación entre intención y acción.\n\nIdeal para momentos donde se busca claridad y orden interno.',
    price: 66000,
    img: '/joyas/joya2.png',
  },
  {
    title: 'Patron 369',
    description:
      'Presencia sutil · Uso diario.\n\nBotón de cobre macizo para llevar en la ropa. Funciona como un punto de conducción energética discreto y constante.\n\nDisponible en versión lisa o grabada con símbolo, inicial o tótem personal.\n\nUn amuleto silencioso que acompaña sin imponerse.',
    price: 66000,
    img: '/joyas/joya3.png',
  },
  {
    title: 'Huellas',
    description:
      'Ciclo · Continuidad.\n\nArgolla lisa de cobre puro, diseño abierto con salto de chispa y doble imán.\n\nLa forma circular representa el ciclo eterno, sin principio ni fin.\n\nUna pieza esencial que acompaña el flujo continuo del campo personal.',
    price: 90000,
    img: '/joyas/joya4.png',
  },
  {
    title: 'Cadena',
    description:
      'Puente · Equilibrio · Integración.\n\nAmuleto de cobre puro con doble imán y salto de chispa.\n\nLa Chakana es la cruz andina que une cielo, tierra y mundo interior.\n\nSimboliza el equilibrio entre los planos y el orden del universo. Diseñada para acompañar procesos de integración y coherencia interna.',
    price: 160000,
    img: '/joyas/joya5.png',
  },
  {
    title: 'Pulcera trenzada',
    description:
      'Autonomía · Sabiduría instintiva.\n\nTallado en cobre puro con doble imán y salto de chispa.\n\nLilith representa la fuerza original, la autonomía y la voz instintiva no domesticada.\n\nLa serpiente simboliza conocimiento, renovación y energía vital. Un amuleto para quienes eligen escucharse y afirmarse.',
    price: 90000,
    img: '/joyas/joya6.png',
  },
  {
    title: 'Pulcera Lisa',
    description:
      'Orden · Armonía universal.\n\nAmuleto de cobre puro con doble imán.\n\nLa Flor de la Vida es un patrón geométrico presente en múltiples culturas, asociado a la estructura base de la creación.\n\nEl cobre actúa como conductor de esta simbología de orden y coherencia.',
    price: 120000,
    img: '/joyas/joya7.png',
  },
  {
    title: 'Cadena',
    description:
      'Intención · Foco · Voluntad.\n\nAnillo-sello de cobre puro con doble imán.\n\nEl patrón 369 encuadra la Flor de la Vida, concentrando la energía en un punto.\n\nInspirado en la idea de que ciertos números organizan la realidad. Diseñado para anclar intención y dirección.',
    price: 60000,
    img: '/joyas/joya8.png',
  },
  {
    title: 'Pulsera Samastit código de red',
    description:
      'Identidad · Vínculo.\n\nAmuleto de cobre puro con doble imán, diseñado para grabar una huella dactilar.\n\nPuede llevar la huella propia como símbolo de autoafirmación o la de alguien querido como vínculo consciente.\n\nUna extensión simbólica de la identidad.',
    price: 120000,
    img: '/joyas/joya10.png',
  },
  {
    title: 'Viracocha patagonico',
    description:
      'Campo activo · Tecnología discreta.\n\nMedallón de cobre con frente liso y elegante. Su funcionamiento se encuentra en el reverso, donde integra un imán de neodimio y una bobina de cobre.\n\nEste conjunto genera un campo toroidal estable y continuo que interactúa con el bio-campo humano, ayudando a ordenar la energía y descargar estática.\n\nDiseñado para uso cotidiano, sin estética invasiva.',
    price: 60000,
    img: '/joyas/joya11.png',
  },
  {
    title: 'Argolla',
    description:
      'Tecnología · Campo · Red.\n\nIntegra el Motor Bio-Magnético Samastit, combinando imán de neodimio y bobina de cobre para generar un campo toroidal activo y continuo.\n\nEn el reverso presenta un diseño de circuito electrónico que simboliza red, flujo de información y coherencia.\n\nRepresenta el cuerpo como circuito y la conciencia como nodo.',
    price: 45000,
    img: '/joyas/joya12.png',
  },
  
  {
    title: 'Viracocha andino',
    description:
      'Unión · Resiliencia.\n\nPulsera de cobre macizo trenzado con imanes.\n\nEl trenzado simboliza la fuerza que surge de la unión.',
    price: 60000,
    img: '/joyas/joya14.png',
  },
  {
    title: 'Medallón bio magnético',
    description:
      'Continuidad · Soporte.\n\nCadena de cobre macizo pensada como línea de flujo constante.\n\nIdeal para acompañar medallones y cerrar el circuito.',
    price: 120000,
    img: '/joyas/joya15.png',
  },
  {
    title: 'Botón antena',
    description:
      'Continuidad · Soporte.\n\nCadena de cobre macizo pensada como línea de flujo constante.\n\nIdeal para acompañar medallones y cerrar el circuito.',
    price: 45000,
    img: '/joyas/joya16.png',
  },
  {
    title: 'Chacana',
    description:
      'Continuidad · Soporte.\n\nCadena de cobre macizo pensada como línea de flujo constante.\n\nIdeal para acompañar medallones y cerrar el circuito.',
    price: 60000,
    img: '/joyas/joya18.jpg',
  },
  {
    title: 'Lilith',
    description:
      'Continuidad · Soporte.\n\nCadena de cobre macizo pensada como línea de flujo constante.\n\nIdeal para acompañar medallones y cerrar el circuito.',
    price: 60000,
    img: '/joyas/joya19.jpg',
  },
  {
    title: 'Moneda escudo',
    description:
      'Continuidad · Soporte.\n\nCadena de cobre macizo pensada como línea de flujo constante.\n\nIdeal para acompañar medallones y cerrar el circuito.',
    price:66000,
    img: '/joyas/joya20.jpg',
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
