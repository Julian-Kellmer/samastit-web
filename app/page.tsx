import HorizontalScrollSection from './sections/HorizontalScrollSection'
import AboutSection from './sections/AboutSection'
import AmuletosSection from './sections/AmuletosSection'
import AshtangaSection from './sections/AshtangaSection'
import MeliquinaSection from './sections/MeliquinaSection'

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
