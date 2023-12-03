import React, { useState } from 'react'
import EyeIconSlashed from '../assets/icons/eye-slashed.svg'
import EyeIcon from '../assets/icons/eye.svg'

function CreateAccountForm({setUserSignedIn, showSignIn}) {
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const validate = () => {
    const emailInput = document.getElementById('email')
    const passwordDiv = document.getElementById('password')
    const accommodationSelect = document.getElementById('accommodation')
    const accommodationContainer = document.getElementById("accommodation-container")
    let isValid = true;
    //reset border colors
    emailInput.classList.remove('border-red-500')
    passwordDiv.classList.remove('border-red-500')
    accommodationContainer.classList.remove('border-red-500')
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

    if(accommodationSelect.value.length === 0){
        accommodationContainer.classList.remove("border-gray-200")
        accommodationContainer.classList.add("border-red-500")
    }
    if(isValid) setUserSignedIn() 
  }
  return (
    <>
    <h1 className='font-bold text-[16px] md:text-[30px] mt-2'>Create an account</h1>
    <form className='w-full flex flex-col items-center mt-2' name="signin" onSubmit={(e)=>e.preventDefault()}>
      <div className='w-full max-w-sm'>
        <label className='hidden md:flex font-thin'>Email</label>
        <input onChange={(e) => setEmail(e.target.value)} id="email" type='email' className='border w-full border-gray-200 p-3 md:p-4 outline-none rounded-lg mb-5' placeholder='Email address' />
      </div>
      <div className='w-full max-w-sm mb-5'>
        <label className='hidden md:flex font-thin mb-2'>Acommodation</label>
        <div id='accommodation-container' className='flex w-full border rounded-lg border-gray-200 p-3 md:p-4 outline-none'>
                <select defaultValue={""} id="accommodation" className='w-full outline-none'>
                        <option value="">---</option>
                        <option value={"Angel Lane"}>Angel Lane</option>
                        <option value={"Iris Brook"}>Iris Brook</option>
                </select>
        </div>
      </div>

    
    
    <div className='w-full max-w-sm mb-5'>
        <label className='hidden md:flex font-thin'>Password</label>
        <div id='password' className='flex w-full max-w-sm border rounded-lg border-gray-200 pr-4 outline-none'>
          <input onChange={(e) => setPassword(e.target.value)} placeholder='Password' className='w-full border-gray-200 p-3 md:p-4 outline-none rounded-lg' type={passwordVisible ? "text" : "password"} />
          <button type='button' className='outline-none p-2 hover:bg-gray-100 hover:bg-opacity-[.5]' onClick={()=>setPasswordVisible(!passwordVisible)}>
            <img className='w-[24px] h-[24px]' alt='eye' src={passwordVisible ? EyeIcon : EyeIconSlashed} />
          </button>
      </div>
    </div>
    
      <button onClick={validate} type='button' className='max-w-sm mt-2 hover:bg-opacity-[.5] mb-5 w-full outline-none bg-green-800 rounded-md p-3 md:p-4 flex items-center justify-center'>
            <span className='text-[14px] font-bold text-white'> Create Account </span>
      </button>
    </form>
    <small className='text-[12px] font-bold'>Already Have An Account? <span className='hover:cursor-pointer underline' onClick={showSignIn}>Sign In</span></small>
    </>
  )
}

export default CreateAccountForm;
