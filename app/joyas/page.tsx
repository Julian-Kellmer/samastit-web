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
          title='Los amuletos buscan afinar la relación entre el cuerpo y el campo.'
          body='Funcionan como recordatorios materiales: el cuerpo como circuito, la conciencia como frecuencia.'
          image='/images/asset1.jpg'
        />

        <SplitImage
          id='product-type-2'
          imageSide='right'
          title='Los amuletos buscan afinar la relación entre el cuerpo y el campo.'
          body='Funcionan como recordatorios materiales: el cuerpo como circuito, la conciencia como frecuencia.'
          image='/images/asset2.png'
        />

        {/* <SamastitTechSection /> */}

        <ProductGridSection />

       
      </main>
    </div>
  )
}
