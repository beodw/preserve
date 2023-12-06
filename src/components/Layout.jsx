import React, { useEffect, useState } from 'react'
import logo from '../assets/logo/food-waste.png'
import SideBar from './SideBar'
import { accommodations, categories } from '../utils/data'

function Layout({userSignedIn, children, setSelectedCategory, setSelectedAccommodation}) {
  let [sideMenuOpen, setSideMenuIsOpen] = useState(false)
  useEffect(() => {
      const showFeed = () => document.getElementById('desktop-filters').classList.remove('opacity-0')
      if (userSignedIn) setTimeout(showFeed, 200)
  },[userSignedIn])
  return (
    <>
        {/* Layout with side bar and main content */}
        <div className='w-screen h-screen flex'>
           {/* Side Bar */}
           <SideBar sideMenuOpen={sideMenuOpen} setSideMenuIsOpen={setSideMenuIsOpen}/>
            {/* Main Content */}
            <div className='w-full md:w-3/4 flex flex-col'>
              <div className='flex'>
                  { userSignedIn && <img onClick={() => setSideMenuIsOpen(true)} src={logo} alt="logo" className='w-[48px] h-[48px] rounded-full shadow-lg md:hidden cursor-pointer'/>}
                  { userSignedIn && <div className='pl-4 pt-2 w-full'>
                    <form id="desktop-filters" className='transition duration-200 opacity-0 hidden md:flex justify-between w-1/2'>
                        <div className='flex w-1/2 flex-col mr-2'>
                            <label className='font-bold italic'>Accommodation</label>
                             <div id='accommodation-container-desktop' className='shadow-lg flex w-full border rounded-lg border-gray-200 p-2 md:p-2 outline-none'>
                                  <select onChange={(e)=> setSelectedAccommodation(e.target.value)} defaultValue={""} id="accommodation-desktop" className='font-thin w-full outline-none'>
                                          <option value={""}>---</option>
                                          {
                                            accommodations.map((accommodation,i) => <option key={i} value={accommodation}>{accommodation}</option>)
                                          }
                                  </select>
                              </div>
                        </div>
                        <div className='flex w-1/2 flex-col'>
                            <label className='font-bold italic'>Category</label>
                             <div id='category-container-desktop' className='shadow-lg flex w-full border rounded-lg border-gray-200 p-2 md:p-2 outline-none'>
                                  <select onChange={(e) => setSelectedCategory(e.target.value)} defaultValue={""} id="category-desktop" className='font-thin w-full outline-none'>
                                          <option value={""}>---</option>
                                          {
                                            categories.map((category, i)=> <option value={category} key={i}>{category}</option>)
                                          }
                                  </select>
                              </div>
                        </div>
                    </form>
                  </div>}
                 
                 
              </div>
                {children}
            </div>
        </div>
    </>
  )
}

export default Layout
