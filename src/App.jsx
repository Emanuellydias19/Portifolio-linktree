import CursorGlow from './components/CursorGlow.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import Loader from './components/Loader.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Gallery from './components/Gallery.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="noise relative min-h-screen bg-ink-950 text-white selection:bg-accent-violet/40">
      <Loader />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Gallery />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
