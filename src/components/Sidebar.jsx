import React from 'react'
import { GoHome } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { IoMdLogOut } from "react-icons/io";
import { MdAddCircle } from "react-icons/md";
import { MdAddToPhotos } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className='fixed top-0 left-0 h-full w-1/6 bg-white p-6 shadow-lg '>
        <p className='text-3xl font-bold text-black'>Artfolio 🌻</p>

        
        <div className='flex flex-col mt-8 h-full'>
            <div className='flex flex-col gap-2'>
                <div className='flex gap-2 hover:bg-sand p-2 rounded-md active:bg-peach cursor-pointer'>
                    <GoHome className='text-3xl text-black'/>
                    <p className='text-black font-medium leading-7'>Home</p>
                </div>
                <div className='flex gap-2 hover:bg-sand p-2 rounded-md active:bg-peach cursor-pointer'>
                    <CgProfile className='text-3xl text-black'/>
                    <p className='text-black font-medium leading-7'>My Profile</p>
                </div>
                <div className='flex gap-2 p-2 cursor-pointer hover:bg-sand rounded-md'>
                    <MdAddCircle className='text-3xl text-black'/>
                    <p className='text-black font-medium leading-7'>Create New Story</p>
                </div>
                <div className='flex gap-2 p-2 cursor-pointer hover:bg-sand rounded-md'>
                    <MdAddToPhotos className='text-3xl text-black'/>
                    <p className='text-black font-medium leading-7'>Create New Post</p>
                </div>
                <div className='flex gap-2 hover:bg-orange p-2 rounded-md group cursor-pointer'>
                    <IoMdLogOut className='text-3xl text-black group-hover:text-whitey'/>
                    <p className='text-black font-medium leading-7 group-hover:text-whitey'>Logout</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar