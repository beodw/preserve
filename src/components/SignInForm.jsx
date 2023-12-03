import React, { useState } from 'react'
import EyeIconSlashed from '../assets/icons/eye-slashed.svg'
import EyeIcon from '../assets/icons/eye.svg'

function SignIn({setUserSignedIn, showSignUp}) {
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const validate = () => {
    const emailInput = document.getElementById('email')
    const passwordDiv = document.getElementById('password')
    let isValid = true;
    //reset border colors
    emailInput.classList.remove('border-red-500')
    passwordDiv.classList.remove('border-red-500')
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        emailInput.classList.remove('border-gray-200')
        emailInput.classList.add('border-red-500')
        isValid = false;
    }
    if(password.length < 8){
        passwordDiv.classList.remove('border-gray-200')
        passwordDiv.classList.add('border-red-500')
        isValid = false;
    }
    if(isValid) setUserSignedIn()
  }
  return (
    <>
    <h1 className='font-bold text-[35px] my-2'>Sign In</h1>
    <form className='w-full flex flex-col items-center mt-5' name="signin" onSubmit={(e)=>e.preventDefault()}>
      <input onChange={(e) => setEmail(e.target.value)} id="email" type='email' className='border w-full max-w-sm border-gray-200 p-4 outline-none rounded-lg mb-5' placeholder='Email address' />
      <div id='password' className='flex w-full max-w-sm border rounded-lg border-gray-200 pr-4 outline-none'>
          <input onChange={(e) => setPassword(e.target.value)} placeholder='Password' className='w-full border-gray-200 p-4 outline-none rounded-lg' type={passwordVisible ? "text" : "password"} />
          <button type='button' className='outline-none p-2 hover:bg-gray-100 hover:bg-opacity-[.5]' onClick={()=>setPasswordVisible(!passwordVisible)}>
            <img className='w-[24px] h-[24px]' alt='eye' src={passwordVisible ? EyeIcon : EyeIconSlashed} />
          </button>
      </div>
      <button onClick={validate} type='button' className='max-w-sm mt-5 hover:bg-opacity-[.5] mb-5 w-full outline-none bg-green-800 rounded-md p-4 flex items-center justify-center'>
            <span className='font-bold text-white'> Sign In </span>
      </button>
    </form>
    <small className='font-bold'>Don't Have An Account? <span className='hover:cursor-pointer underline' onClick={showSignUp}>Sign Up</span></small>
    </>
  )
}

export default SignIn
