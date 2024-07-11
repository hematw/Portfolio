import { useEffect } from 'react'
import './App.css'
import About from './components/About'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {

  useEffect(() => {
    document.title = "Hematullah Waziri | Portfolio"
  })

  return (
    <>
      <Header />
      <main className=''>
        <Hero />
        <About />
        <Projects />
      </main>
      <Footer />
    </>
  )
}

export default App
