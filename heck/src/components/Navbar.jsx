import React from 'react'

const Navbar = () => {
  return (
    <div className='sticky insert-x-0 top-8 w-full z-30'>
        <div className='mx-auto w-full max-w-screen-xl px-2.5 lg:px-20 relative'>
            <div className='flex  item-center justify-center'>
                <nav>
                    <ul className='flex flex-row space-x-6 p-4 '>
                        <li>
                            <a href='/'
                            className='text-gray-600'>
                            Home
                            </a>
                        </li>
                        <li>
                            <a href='/'
                            className='text-gray-600'>
                            Features
                            </a>
                        </li>
                        <li>
                            <a href='/'
                            className='text-gray-600'>
                            About Us
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default Navbar;