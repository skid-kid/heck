import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-screen min-h-screen fixed z-0 flex justify-center px-6 py-40  pointer-event-none'>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-15"></div>
        <img src='/mesh.svg' 
        className='opacity-35 absolute bottom-1  h-[600]' />
      </div>
      <div className='relative z-10'>
        <Navbar />
        <div className='container mx-auto'>
          <HeroSection />
        </div>
      </div>

    </>
  )
}

export default App