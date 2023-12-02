import React, { useState } from 'react'
import logo from '../assets/logo/logo.svg'
import SideBar from './SideBar'

function Layout({isLandingPage, children}) {
  let [sideMenuOpen, setSideMenuIsOpen] = useState(false)
  return (
    <>
        {/* Layout with side bar and main content */}
        <div className='w-screen h-screen flex'>
           {/* Side Bar */}
           <SideBar sideMenuOpen={sideMenuOpen} setSideMenuIsOpen={setSideMenuIsOpen}/>
            {/* Main Content */}
            <div className='w-full md:w-3/4 flex flex-col'>
                <img onClick={() => setSideMenuIsOpen(true)} src={logo} alt="logo" className='w-[48px] h-[48px] rounded-full shadow-lg md:hidden cursor-pointer'/>
                {children}
            </div>
        </div>
    </>
  )
}

export default Layout
