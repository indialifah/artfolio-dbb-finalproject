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
                <div className="absolute top-16 left-0 w-36 bg-white shadow-2xl rounded-md">
                  <ul className="flex flex-col items-left space-y-4 p-4">
                    <li className="font-medium hover:text-teal cursor-pointer">Home</li>
                    <li className="font-medium hover:text-teal cursor-pointer">Explore</li>
                    <li className="font-medium hover:text-teal cursor-pointer">My Profile</li>
                    <li className="font-medium hover:text-orange cursor-pointer">Logout</li>
                  </ul>
                </div>
              )}
              <h1 className='font-bold text-2xl text-black leading-6'>Logo</h1>
            </div>
            <div>
                <div className='w-8 h-8 border-4 border-solid border-black rounded-full float-end cursor-pointer flex flex-col gap-0.5'>
                  <div className='w-3 h-3 ml-[5.5px] mt-0.5 bg-black rounded-full'></div>
                  <div className='w-5 h-2 ml-0.5 bg-black rounded-t-full'></div>
                </div>
            </div>
        </div>

        
    </div>
  )
}

export default Navbar