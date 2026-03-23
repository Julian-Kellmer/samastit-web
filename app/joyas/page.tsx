import HeroSection from './_sections/HeroSection'
import TechDetailsSection from './_sections/TechDetailsSection'
import ProductGridSection from './_sections/ProductGridSeccion'

export default function Home() {
  return (
    <div className='layout-wrap relative bg-black text-white min-h-screen overflow-hidden'>
      <main className='layout-grid relative z-10'>
        <HeroSection />

        {/* Text descriptions using decorative backgrounds */}
        <TechDetailsSection />

        <ProductGridSection />
      </main>
    </div>
  )
}
