import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'


function App() {

  return (
    <>
      <div className='w-screen min-h-screen fixed  flex justify-center px-6 py-40  pointer-event-none'>
        <div className="absolute inset-0 bg-[url('/griddy.svg')] bg-cover opacity-10"></div>
        <img src='/mesh.svg' 
        className='opacity-40s absolute h-[1000] w-2000' />
      </div>
      <div className=' bg-black justify-center '>
        <Navbar/>
        <br/>
            <div className='flex justify-center p-5'>
          <img src='/aptos-seeklogo.svg' width={100} height={100}></img>
          <img src='/ibf.png' width={300} height={150}></img>
          </div>
          <h1 className='flex justify-center text-white italic text-2xl brightness-100'>presents</h1>
        <div className='container mx-auto'>
          <HeroSection/>
        </div>
      </div>

    </>
  )
}

export default App
