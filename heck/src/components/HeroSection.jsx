import React from 'react'

const HeroSection = () => {
  return (
    <section className='hero-section text-center mt-32 flex flex-col'>
        <section className='text-xl font-bold leading-[1.15] text-white brightness-100 sm:text-xl'>
        <h2 className='sm:text-3xl'>Sep 21, 2024 - Sep 22, 2024</h2>
            <br />
            <br/>
        <h2 className='font-bold text-4xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl mt-0 bg-gradient-to-r from-pink-200 via-indigo-200 to-pink-200 bg-clip-text text-transparent brightness-100'>
            Techn✦Tronix
        </h2>
        </section>
        <br/>
        <h2 className='sm:text-2xl font-bold mt-4 text-white brightness-100 '>
        A flagship 2-Days event,Learn and build on Aptos,get rewards like bounties,swags and enjoy tasty pizzas

        </h2>
        <h2 className=' flex justify-center sm:text-5xl font-bold mt-5 text-white brightness-100 '>
              Register Now<h2 className='sm:text-5xl font-bold text-green-400'>-Only Limited Seats!</h2>

        </h2>
        <br/>
        <div className='mx-auto mt-5 flex max-w-fit space-x-4'>
            <a
            href='https://www.risein.com/bootcamps/build-on-aptos-bootcamp-bennett-university'
            target='_blank'
            className='rounded-md mx-auto max-w-fit border px-5 py-2                                
            sm:text-xl font-mediym shadow-sm bg-black text-white brightness-100
            hover:ring-grat-400 hover:ring-2'>
                Register Now!
            </a>
        </div>
        <br/>
        <div className=' max-w-5xl mx-auto p-5 m-5 grid gap-6 md:grid-cols-3 brightness-100 '>
    <div className='bg-black p-6 rounded-lg shadow-lg '>
      <h1 className='text-xl font-bold text-white brightness-90 mb-1'>DAY 1 -: 3pm-8pm</h1>
      <br/>
      <h2 className='text-xl font-bold text-white brightness-90 mb-1'>#MakeYourMove</h2>
      <br/>
      <p className='text-white brightness-100'>

      Start your Web3 journey, understand things on a higher level, and dive into Aptos. Learn how it works, get an intro to smart contracts, and end day1 with a delicious pizza!
      </p>
    </div>
    <div className='bg-black p-6 rounded-lg shadow-lg brightness-100'>
    <h1 className='text-xl font-bold text-white brightness-90 mb-1'>DAY 2 -: 3pm-8pm</h1><br/>
      <h2 className="text-xl font-bold text-white mb-1 brightness-100">#FuelYourCreativity</h2><br/>
      <p className="text-white brightness-100">
      Explore Aptos smart contracts and SDKs. Work on a project, participate in challenges, and a chance to win swags,goodies,etc.Get a Tasty Pizza at calling off the event.
      </p>
    </div>
    <div className='bg-black p-6 rounded-lg shadow-lg '>
      <h1 className='text-xl font-bold text-white brightness-90 mb-1'>Pre-requisites</h1>
      <br/>
      <p className='text-white brightness-100'>
          1-)  Dont forget to Bring Your Laptops and Extension cords for charging<br/><br/>
          2-) Internet Stability is must <br/><br/>
          3-) Make sure to Join the Community!,resources required before event will be shared there!
      </p>
    </div>
    
  </div>
  
  <h2 className='sm:text-5xl font-bold italic text-green-400 brightness-100'>See You There!</h2>
    </section>
  )
}

export default HeroSection;