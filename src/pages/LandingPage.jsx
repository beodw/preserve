import React, { useState } from 'react'
import logo from '../assets/logo/food-waste.png'
import SignInForm from '../components/SignInForm'
import CreateAccountForm from '../components/CreateAccountForm'
function LandingPage({setUserSignedIn}) {
    let [signInSelected, setSignInSelected] = useState(false);
    let [creatAccountSelected, setCreatAccountSelected] = useState(false);

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>

        <div className='flex flex-col w-1/2 items-center'>
            <img src={logo} alt='logo' className='rounded-full w-[200px] h-[200px]' />
            {
                signInSelected ? <SignInForm setUserSignedIn={setUserSignedIn} showSignUp={()=> {setSignInSelected(false);setCreatAccountSelected(true)}} />:
                creatAccountSelected ? <CreateAccountForm setUserSignedIn={setUserSignedIn} showSignIn={()=> {setSignInSelected(true);setCreatAccountSelected(false)}}/>:
                <>
                    <h1 className='font-bold text-2xl italic mb-5'>Explore the app</h1>
                    <h2 className='font-thin text-xl text-center mb-5'>
                        Help reduce food waste and have a positive impact on the environment.
                    </h2>

                    <button onClick={()=> setSignInSelected(true)} className='hover:bg-opacity-[.5] mb-5 w-full outline-none bg-green-800 rounded-md p-4 flex items-center justify-center'>
                        <span className='font-bold text-white'> Sign In </span>
                    </button>
                    <button onClick={()=> setCreatAccountSelected(true)} className='hover:bg-gray-500 hover:bg-opacity-5 w-full border-[1px] border-gray-300 outline-none bg-transparent rounded-md p-4 flex items-center justify-center'>
                        <span className='font-bold text-black'> Create account </span>
                    </button>
                </>
            }
            
        </div>
        <div className='hidden md:flex'>

        </div>

    </div>
  )
}

export default LandingPage
