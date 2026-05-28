// src/App.jsx
import Navbar from './components/sections/Navbar'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import Portfolio from './components/sections/Portfolio'
import Team from './components/sections/Team'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'
import SectionDivider from './components/layout/SectionDivider'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />
        <Services />
        <SectionDivider />
        <Portfolio />
        <SectionDivider />
        <Team />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
