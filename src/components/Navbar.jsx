import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-white shadow-md w-full fixed top-0 left-0'>
        <div className='flex justify-between p-6 mx-auto w-[60%]'>
            <div className='flex gap-10'>
                <div className="flex flex-col gap-1 cursor-pointer">
                    <div className="w-6 h-1 bg-black"></div>
                    <div className="w-6 h-1 bg-black"></div>
                    <div className="w-6 h-1 bg-black"></div>
                </div>
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