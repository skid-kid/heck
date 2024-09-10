import React from 'react'

const HeroSection = () => {
    const Prize="{1000 USD}";
  return (
    <section className='hero-section text-center mt-32 flex flex-col'>
        <section className='text-xl font-bold leading-[1.15] text-gray-700 sm:text-xl'>
        <h2 className='sm:text-3xl'>Sep 21, 2024 - Sep 22, 2024</h2>
            <br />
            <br/>
        </section>
        <h1 className='font-extrabold sm:text-8xl mt-0 bg-gradient-to-r from-pink-500 via-indigo-600 to-pink-500 bg-clip-text text-transparent'>
            Techn✦Tronix
        </h1>
        <br/>
        <h2 className='sm:text-2xl font-bold mt-5 text-gray-600 '>
        An intense 24-hour coding challenge where innovation meets adrenaline. 

        </h2>
        <h2 className=' flex justify-center sm:text-5xl font-bold mt-5 text-gray-600 '>
              Prize Pool <h2 className='sm:text-5xl font-bold text-indigo-600'>{Prize}</h2>

        </h2>
        <br/>
        <div className='mx-auto mt-5 flex max-w-fit space-x-4'>
            <a
            href='#'
            className='rounded-md mx-auto max-w-fit border px-5 py-2                                
            text-sm font-mediym shadow-sm border-gray-700 bg-black text-white 
            hover:ring-grat-400 hover:ring-2'>
                Register Now!
            </a>
            <a
            href='#'
            className='rounded-md mx-auto max-w-fit border px-3 py-2 
            text-sm font-mediym shadow-sm border-gray-600 bg-transparent text-gray-700 
            hover:ring-grat-400 hover:ring-2'>
                Learn More
            </a>
        </div>
        <br/>
        <div className='max-w-4xl mx-auto grid gap-6 md:grid-cols-3'>
    <div className='bg-white p-6 rounded-lg shadow-lg'>
      <h2 className='text-xl font-bold text-gray-800 mb-1'>#MakeYourMove</h2>
      <p className='text-gray-600'>
        Join our 24-hour hackathon and develop on Aptos! Build, innovate, and showcase your skills on a cutting-edge blockchain platform.
      </p>
    </div>
    <div className='bg-white p-6 rounded-lg shadow-lg'>
      <h2 className="text-xl font-bold text-gray-800 mb-1">Fuel Your Creativity</h2>
      <p className="text-gray-600">
        Enjoy free food and drinks to keep you energized, plus a chance to win exclusive goodies as you compete!
      </p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-gray-800 mb-1">Unlock Opportunities</h2>
      <p className="text-gray-600">
        Standout projects can win grants to elevate your ideas. Code, collaborate, and create something amazing!
      </p>
    </div>
  </div>
    </section>
  )
}

export default HeroSection;