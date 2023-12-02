import React from 'react'
import logo from '../assets/logo/logo.svg'
function LandingPage() {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>

        <div className='flex flex-col w-1/2 items-center'>
            <img src={logo} alt='logo' />
            <h1 className='font-bold text-2xl italic mb-5'>Explore the app</h1>
            <h2 className='font-thin'></h2>

            <button className='mb-5 w-full outline-none bg-preserve-secondary rounded-md p-4 flex items-center justify-center'>
                <span className='font-bold'> Sign In </span>
            </button>
            <button className='w-full border-[1px] border-gray-300 outline-none bg-transparent rounded-md p-4 flex items-center justify-center'>
                <span className='font-bold'> Create account </span>
            </button>
        </div>
        <div className='hidden md:flex'>

        </div>

    </div>
  )
}

export default LandingPage
