import { Navbar } from "./components/Navbar"
import Footer from './components/Footer'
import Research from './components/Research.tsx'
import Project from './components/Project.tsx'
import Hero from './components/Hero.tsx'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Project />
      <Research />
      <Footer />
    </>
  )
}
