import { useEffect } from 'react'
import './App.css'
import About from './components/About'
import Header from './components/Header'
import Hero from './components/Hero'

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
      </main>
    </>
  )
}

export default App
