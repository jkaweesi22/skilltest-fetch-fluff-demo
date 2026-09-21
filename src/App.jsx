import { content } from './data/content'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const { sections } = content

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {sections.about && <About />}
        {sections.services && <Services />}
        {sections.testimonials && <Testimonials />}
        {sections.contact && <Contact />}
      </main>
      <Footer />
    </>
  )
}
