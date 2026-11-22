import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import ScrollTop from './components/ScrollTop'
import Skills from './components/Skills'
import { navItems } from './data/profile'
import { useActiveSection } from './hooks/useActiveSection'
import { useTheme } from './hooks/useTheme'

const sectionIds = navItems.map((n) => n.id)

export default function App() {
  const { theme, toggle } = useTheme()
  const active = useActiveSection(sectionIds)

  return (
    <>
      <Navbar active={active} theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </>
  )
}
