import React from 'react'
import logo from '../assets/logo/logo.svg'

function SideBar({sideMenuOpen, setSideMenuIsOpen}) {
    
  return (
        <>
            {/* Side Bard on Desktop */}
            <div className='w-1/4 h-full bg-preserve-primary hidden md:flex flex-col p-4'>
                    <div className='w-full flex justify-center'>
                        {/* <img src={logo} alt="logo" className='w-[78px] h-[78px] rounded-full cursor-pointer'/> */}
                    </div>
                    <div className='w-full h-full flex items-center'>
                        <div className='w-full flex flex-col items-center text-justify'>
                            <h1 className='font-bold italic text-2xl'>Preserve</h1>
                            <h2 className='font-thin'>Saving the planet</h2>
                        </div>
                         

                    </div>
            </div>
            {/* Side Bar on Mobile */}
            <div className={`p-4 w-1/2 h-full bg-preserve-primary z-20 absolute top-0 left-0 ${sideMenuOpen ? 'flex md:hidden' : 'hidden'} shadow-lg flex-col`}>
                <div className='w-full flex justify-center'>
                    <img onClick={()=> setSideMenuIsOpen(false)} src={logo} alt="logo" className='w-[64px] h-[64px] rounded-full shadow-lg cursor-pointer'/>
                </div>
                <div className='w-full h-full'>
                    <form className='flex flex-col items-center mt-10 justify-center' name='search-form' onSubmit={(e)=> e.preventDefault()}>
                        <div className='flex flex-col items-center mb-[5px]'>
                            <label className='font-thin mb-[5px]'>Acommodation</label>
                            <input type='date'/>
                        </div>
                     
                        <div className='flex flex-col items-center mt-[5px]'>
                            <label className='font-thin mb-[5px]'>Category</label>
                            <select>
                                <option>JAM</option>
                                <option>RICE</option>
                                <option>FROZEN VEGGIES</option>
                                <option>ICE CREAM</option>
                            </select>
                        </div>
                        
                    </form>
                  
                </div>
            </div>
        </>
  )
}

export default SideBar
