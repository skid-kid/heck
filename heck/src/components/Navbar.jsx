import React from 'react'

const Navbar = () => {
  return (
    <div className='insert-x-0 top-8 w-full '>
        <div className='mx-auto w-full max-w-screen-xl px-2.5 lg:px-20 relative'>
            <div className='flex  item-center justify-center'>
                <nav>
                    <ul className='flex flex-row space-x-6 p-4 '>
                        <li>
                            <a href='/'
                            className='font-bold sm:text-2xl text-white brightness-120'>
                            Home
                            </a>
                        </li>
                        <li>
                            <a href='
https://chat.whatsapp.com/GBSbc0HutJM5Ld1f5RSv3F' target='_blank'
                            className='font-bold sm:text-2xl text-white brightness-120 '>
                            Join Community
                            </a>
                        </li>
                        <li>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default Navbar;