import React, { useState } from 'react'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

  return (
    <div className='bg-white shadow-md w-full fixed top-0 left-0'>
        <div className='flex justify-between p-6 mx-auto w-[60%]'>
            <div className='flex gap-10 relative'>
              <div className="flex flex-col gap-1 cursor-pointer" onClick={toggleMenu}>
                  <div className={`w-6 h-1 bg-black rounded-sm transition-transform duration-300 
                  ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                  <div className={`w-6 h-1 bg-black rounded-sm transition-opacity duration-300 
                  ${isOpen ? 'opacity-0' : ''}`}></div>
                  <div className={`w-6 h-1 bg-black rounded-sm transition-transform duration-300 
                  ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
              </div>
            
              {isOpen && (
                <div className="absolute top-14 left-0 w-36 bg-white shadow-md rounded-md">
                  <ul className="flex flex-col items-left space-y-4 p-4">
                    <li className="hover:text-blue-500 cursor-pointer">Home</li>
                    <li className="hover:text-blue-500 cursor-pointer">Explore</li>
                    <li className="hover:text-blue-500 cursor-pointer">My Profile</li>
                    <li className="hover:text-red-500 cursor-pointer">Logout</li>
                  </ul>
                </div>
              )}
              <h1>Logo</h1>
            </div>
            <div>
                <div className='w-6 h-6 bg-black rounded-full float-end cursor-pointer'></div>
            </div>
        </div>

        
    </div>
  )
}

export default Navbar