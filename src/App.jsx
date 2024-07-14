import { useEffect } from 'react'
import './App.css'
import About from './components/About'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Services from "./components/Services";


function App() {

  useEffect(() => {
    document.title = "Hematullah Waziri | Portfolio"
  })

  return (
    <>
      <Header />
      <main className='max-w-[1270px] m-auto'>
        <Hero />
        <About />
        <Projects />
        <Services />
      </main>
      <Footer />
    </>
  )
}

export default App
