import React from 'react'

const HeroSection = () => {
    const Prize="{1000 USD}";
  return (
    <section className='hero-section text-center mt-32 flex flex-col'>
        <section className='text-xl font-bold leading-[1.15] text-white brightness-100 sm:text-xl'>
        <h2 className='sm:text-3xl'>Sep 21, 2024 - Sep 22, 2024</h2>
            <br />
            <br/>
        </section>
        <h1 className='font-extrabold sm:text-9xl mt-0 bg-gradient-to-r from-pink-200 via-indigo-200 to-pink-200 bg-clip-text text-transparent brightness-100'>
            Techn✦Tronix
        </h1>
        <br/>
        <h2 className='sm:text-2xl font-bold mt-5 text-white brightness-100 '>
        An intense 24-hour coding challenge where innovation meets adrenaline. 

        </h2>
        <h2 className=' flex justify-center sm:text-5xl font-bold mt-5 text-white brightness-100 '>
              Prize Pool <h2 className='sm:text-5xl font-bold text-indigo-600'>{Prize}</h2>

        </h2>
        <br/>
        <div className='mx-auto mt-5 flex max-w-fit space-x-4'>
            <a
            href=''
            className='rounded-md mx-auto max-w-fit border px-5 py-2                                
            text-sm font-mediym shadow-sm bg-black text-white brightness-100
            hover:ring-grat-400 hover:ring-2'>
                Register Now!
            </a>
        </div>
        <br/>
        <div className=' max-w-3xl mx-auto p-5 m-5 grid gap-6 md:grid-cols-2 brightness-100 '>
    <div className='bg-black p-6 rounded-lg shadow-lg '>
      <h2 className='text-xl font-bold text-white brightness-90 mb-1'>#MakeYourMove</h2>
      <p className='text-white brightness-100'>
        Join our 24-hour hackathon and develop on Aptos! Build, innovate, and showcase your skills on a cutting-edge blockchain platform.
      </p>
    </div>
    <div className='bg-black p-6 rounded-lg shadow-lg brightness-100'>
      <h2 className="text-xl font-bold text-white mb-1 brightness-100">Fuel Your Creativity</h2>
      <p className="text-white brightness-100">
        Enjoy free food and drinks to keep you energized,chance to win exclusive goodies as you compete!,and Standout projects can win grants to elevate their ideas.
      </p>
    </div>
    
  </div>
    </section>
  )
}

export default HeroSection;