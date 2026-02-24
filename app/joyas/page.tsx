import HeroSection from './_sections/HeroSection'
import DescriptionSection from './_sections/DescriptionSection'
import SplitImage from './_sections/SplitImage'
import SamastitTechSection from './_sections/SamastitTechSection'
import ProductGridSection from './_sections/ProductGridSeccion'

export default function Home() {
  return (
    <div className='layout-wrap'>
      <main className='layout-grid'>
        <HeroSection />

        <DescriptionSection />

        <SplitImage
          id='product-type-1'
          imageSide='left'
          title='Salto de chispa'
          body='El “salto de chispa” es una apertura controlada en la pieza. No cumple una función decorativa: interrumpe el circuito continuo del metal y genera un punto de tensión y reencuentro del flujo. Esa microinterrupción crea un campo dinámico en lugar de uno cerrado y estático. En términos simbólicos, representa el momento en que la energía no se acumula ni se bloquea, sino que se reactiva.'
          image='/images/asset1.jpg'
        />

        <SplitImage
          id='product-type-2'
          imageSide='right'
          title='Imanes en los extremos'
          body='Los imanes ubicados en los extremos crean un campo polarizado entre dos puntos. Esta polaridad genera una leve tensión magnética que muchas personas perciben como circulación, descarga de estática o mayor presencia corporal. Desde el diseño, la lógica es clara: dos polos crean dirección. Y la dirección genera orden. Simbólicamente, es la integración de opuestos que encuentra un centro.'
          image='/images/asset2.png'
        />

        {/* <SamastitTechSection /> */}

        <ProductGridSection />
      </main>
    </div>
  )
}
