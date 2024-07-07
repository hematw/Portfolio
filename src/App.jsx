import { useEffect } from 'react'
import './App.css'
import About from './components/About'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'

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
    </>
  )
}

export default App
