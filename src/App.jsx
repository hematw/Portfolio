import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {

  return (
    <div className='bg-zinc-900 text-white'>
      <Header />
      <main className='max-w-[1270px] m-auto'>
        <Hero />

      </main>
    </div>
  )
}

export default App
