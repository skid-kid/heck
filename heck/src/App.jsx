import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'


function App() {

  return (
    <>
      <div className='w-screen min-h-screen fixed  flex justify-center px-6 py-40  pointer-event-none'>
        <div className="absolute inset-0 bg-[url('/griddy.svg')] bg-cover opacity-20"></div>
        <img src='/mesh.svg' 
        className='opacity-60s absolute h-[1000] w-2000' />
      </div>
      <div className=' justify-center '>
        <Navbar/>
        <br/>
            <div className='flex justify-center p-5'>
          <img src='/aptos-seeklogo.svg' width={100} height={100}></img>
          <img src='/ibf.png' width={250} height={150}></img>
          </div>
          <div className='flex justify-center'>

          <img src='/risein.svg' className=' opacity-100s absolute h-[500] w-500' width={200}/>
          </div>
          <br/>
          <br/>
          <br/>
          <h1 className='flex justify-center text-black font-bold italic text-2xl brightness-200'>presents</h1>
        <div className='container mx-auto'>
          <HeroSection/>
        </div>
      </div>

    </>
  )
}

export default App
