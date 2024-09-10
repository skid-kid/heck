import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-screen min-h-screen fixed  flex justify-center px-6 py-40  pointer-event-none'>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <img src='/mesh.svg' 
        className='opacity-50 absolute   h-[600]' />
      </div>
      <div className=''>
        <Navbar />
        <div className='container mx-auto'>
          <HeroSection />
        </div>
      </div>

    </>
  )
}

export default App
