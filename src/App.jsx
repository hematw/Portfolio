import { useEffect } from 'react'
import './App.css'
import About from './components/About'
import Header from './components/Header'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Services from "./components/Services";
import { site } from './content'


function App() {

  useEffect(() => {
    document.title = `${site.fullName} | Portfolio`
  }, [])

  return (
    <>
      <Header />
      <main className='max-w-[1270px] m-auto'>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Services />
      </main>
      <Footer />
    </>
  )
}

export default App
