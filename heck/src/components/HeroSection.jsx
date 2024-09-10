import React from 'react'

const HeroSection = () => {
  return (
    <section className='hero-section text-center mt-32 flex flex-col'>
        <section className='text-xl font-bold leading-[1.15] text-gray-700 sm:text-xl'>
        Sep 21, 2024 - Sep 22, 2024
            <br />
        </section>
        <h1 className='text-5xl font-extrabold sm:text-8xl mt-0 bg-gradient-to-r from-pink-500 via-indigo-600 to-pink-500 bg-clip-text text-transparent'>
            Techn✦Tronix
        </h1>
        <h2 className='sm:text-xl font-bold mt-5 text-gray-600 '>
        Join us for an intense 24-hour coding challenge where innovation meets adrenaline. 

        </h2>
        <div className='mx-auto mt-5 flex max-w-fit space-x-4'>
            <a
            href='#'
            className='rounded-md mx-auto max-w-fit border px-5 py-2                                
            text-sm font-mediym shadow-sm border-gray-700 bg-black text-white 
            hover:ring-grat-400 hover:ring-2'>
                Register
            </a>
            <a
            href='#'
            className='rounded-md mx-auto max-w-fit border px-3 py-2 
            text-sm font-mediym shadow-sm border-gray-600 bg-transparent text-gray-700 
            hover:ring-grat-400 hover:ring-2'>
                Learn More
            </a>
        </div>
            
    </section>
  )
}

export default HeroSection;