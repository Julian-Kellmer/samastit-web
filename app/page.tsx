import HorizontalScrollSection from './hero-sections/HorizontalScrollSection'
import AboutSection from './hero-sections/AboutSection'
import AmuletosSection from './hero-sections/AmuletosSection'
import AshtangaSection from './hero-sections/AshtangaSection'
import MeliquinaSection from './hero-sections/MeliquinaSection'

export default function Home() {
  return (
    <main className='overflow-x-hidden  text-white'>
      <HorizontalScrollSection />
      <AboutSection />
      <AmuletosSection />
      <AshtangaSection  />
      <MeliquinaSection />
    </main>
  )
}
