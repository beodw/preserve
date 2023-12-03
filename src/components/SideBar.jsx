import React, { useEffect } from 'react'
import logo from '../assets/logo/food-waste.png'
import { categories, accommodations } from '../utils/data'

function SideBar({sideMenuOpen, setSideMenuIsOpen}) {
    useEffect(()=>{
        const animateSideBar = () => document.getElementById('sidebar-desktop').classList.remove('-translate-x-full')
        setTimeout(animateSideBar, 100)
        
    },[])

    useEffect(()=>{
        const animateMobileSideBarIn = () => document.getElementById('sidebar-mobile').classList.remove('-translate-x-full')
        setTimeout(animateMobileSideBarIn, 100)
    },[sideMenuOpen])

    const hideMobileSideBar = () => {
        document.getElementById('sidebar-mobile').classList.add('-translate-x-full')
        setTimeout(
            () =>  setSideMenuIsOpen(false),
            100
        )
       
    }
    
  return (
        <>
            {/* Side Bard on Desktop */}
            <div id='sidebar-desktop' className='w-1/4 h-full bg-green-800 hidden md:flex flex-col p-4 transition -translate-x-full duration-500'>
                    <div className='w-full flex justify-center'>
                        {/* <img src={logo} alt="logo" className='w-[78px] h-[78px] rounded-full cursor-pointer'/> */}
                    </div>
                    <div className='w-full h-full flex items-center'>
                        <div className='w-full flex flex-col items-center text-justify'>
                            <img src={logo} alt="logo" className='w-[64px] h-[64px] rounded-full shadow-lg cursor-pointer'/>
                            <h1 className='font-bold text-white italic text-2xl'>Preserve</h1>
                            <h2 className='font-thin text-white text-xl italic'>Help limit food waste</h2>
                        </div>
                         

                    </div>
            </div>
            {/* Side Bar on Mobile */}
            <div id="sidebar-mobile" className={`transition -translate-x-full p-4 w-1/2 h-full bg-green-800 z-20 absolute top-0 left-0 ${sideMenuOpen ? 'flex md:hidden' : 'hidden'} shadow-lg flex-col`}>
                <div className='w-full flex justify-center'>
                    <img onClick={hideMobileSideBar} src={logo} alt="logo" className='w-[64px] h-[64px] rounded-full shadow-lg cursor-pointer'/>
                </div>
                <div className='w-full h-full'>
                    <form className='flex flex-col items-center mt-10 justify-center' name='search-form' onSubmit={(e)=> e.preventDefault()}>
                        <div className='flex flex-col items-center mb-[5px]'>
                            <label className='font-thin mb-[5px]'>Acommodation</label>
                            <select>
                                {
                                    accommodations.map((accommodation)=> <option key={accommodation}>{accommodation}</option>)
                                }
                            </select>
                        </div>
                     
                        <div className='flex flex-col items-center mt-[5px]'>
                            <label className='font-thin mb-[5px]'>Category</label>
                            <select>
                                {
                                    categories.map((category)=> <option key={category}>{category}</option>)
                                }
                            </select>
                        </div>
                        
                    </form>
                  
                </div>
            </div>
        </>
  )
}

export default SideBar
