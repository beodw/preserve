import React, { useEffect } from 'react'
import logo from '../assets/logo/food-waste.png'
import { categories, accommodations } from '../utils/data'

function SideBar({sideMenuOpen, setSideMenuIsOpen, setSelectedAccommodation, setSelectedCategory}) {
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
                    <form className='text-white flex flex-col items-center mt-10 ' name='search-form' onSubmit={(e)=> e.preventDefault()}>
                        <label className='font-thin text-white mb-[5px]'>Acommodation</label>
                        <div id='accommodation-container-mobile' className='mb-[10px] flex flex-col items-center w-full border rounded-lg border-gray-200 p-2 md:p-2 outline-none'>
                                <select onChange={(e)=> setSelectedAccommodation(e.target.value)} defaultValue={""} id="accommodation-mobile" className='font-thin w-full outline-none bg-transparent'>
                                        <option value={""}>---</option>
                                        {
                                        accommodations.map((accommodation,i) => <option key={i} value={accommodation}>{accommodation}</option>)
                                        }
                                </select>
                        </div>
                     
                        <label className='font-thin mb-[5px]'>Category</label>
                         <div id='accommodation-container-mobile' className='mb-[5px] flex flex-col items-center w-full border rounded-lg border-gray-200 p-2 md:p-2 outline-none'>
                                <select onChange={(e)=> setSelectedCategory(e.target.value)} defaultValue={""} id="accommodation-mobile" className='font-thin w-full outline-none bg-transparent'>
                                        <option value={""}>---</option>
                                        {
                                        categories.map((accommodation,i) => <option key={i} value={accommodation}>{accommodation}</option>)
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
