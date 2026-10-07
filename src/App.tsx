import { Header } from './sections/Header/Header'
import { Hero } from './sections/Hero/Hero'
import { Parallax } from './sections/Parallax/Parallax'
import { Manifesto } from './sections/Manifesto/Manifesto'
import { Program } from './sections/Program/Program'
import { Speakers } from './sections/Speakers/Speakers'
import { Tickets } from './sections/Tickets/Tickets'
import { Faq } from './sections/Faq/Faq'
import { Footer } from './sections/Footer/Footer'
import { PopupsProvider } from './components/popups/PopupsProvider'
import { useSmoothScroll } from './hooks/useSmoothScroll'
import styles from './App.module.css'

export default function App() {
  useSmoothScroll()

  return (
    <PopupsProvider>
      <div className={styles.page}>
        <Header />
        <main>
          <Hero />
          <Parallax />
          <Manifesto />
          <Program />
          <Speakers />
          <Tickets />
          <Faq />
        </main>
        <Footer />
      </div>
    </PopupsProvider>
  )
}
