import React, { useState } from 'react'
import { GoHome } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { IoMdLogOut } from "react-icons/io";
import { MdAddCircle } from "react-icons/md";
import { MdAddToPhotos } from "react-icons/md";
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false)

  const openLogoutModal = () => {
    setIsLogoutModalOpen(true);
  };

  const closeLogoutModal = () => {
    setIsLogoutModalOpen(false);
  };

  const handleLogout = () => {
    console.log('User logged out');
    // toast success logout
    closeLogoutModal();
    localStorage.clear()
  };

  return (
    <div className='fixed top-0 left-0 h-full w-1/6 bg-white p-6 shadow-lg '>
        <p className='text-3xl font-bold text-black'>Artfolio 🌻</p>

        
        <div className='flex flex-col mt-8 h-full'>
            <div className='flex flex-col gap-2'>
                <Link to={'/'} className='flex gap-2 hover:bg-sand p-2 rounded-md active:bg-peach cursor-pointer'>
                    <GoHome className='text-3xl text-black'/>
                    <p className='text-black font-medium leading-7'>Home</p>
                </Link>
                <Link to={'/myprofile'} className='flex gap-2 hover:bg-sand p-2 rounded-md active:bg-peach cursor-pointer'>
                    <CgProfile className='text-3xl text-black'/>
                    <p className='text-black font-medium leading-7'>My Profile</p>
                </Link>
                <div className='flex gap-2 p-2 cursor-pointer hover:bg-sand rounded-md'>
                    <MdAddCircle className='text-3xl text-black'/>
                    <p className='text-black font-medium leading-7'>Create New Story</p>
                </div>
                <div className='flex gap-2 p-2 cursor-pointer hover:bg-sand rounded-md'>
                    <MdAddToPhotos className='text-3xl text-black'/>
                    <p className='text-black font-medium leading-7'>Create New Post</p>
                </div>
                <div onClick={openLogoutModal} className='flex gap-2 hover:bg-orange p-2 rounded-md group cursor-pointer'>
                    <IoMdLogOut className='text-3xl text-black group-hover:text-whitey'/>
                    <p className='text-black font-medium leading-7 group-hover:text-whitey'>Logout</p>
                </div>
            </div>
        </div>

        {/* Modals */}
        {isLogoutModalOpen && (
            <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
                <div className="bg-white py-6 rounded-lg shadow-lg  text-center">
                    <div className='px-12'>
                        <h2 className="text-xl font-semibold">You're about to log out.</h2>
                        <h2 className="text-lg font-normal mb-4">Are you sure you want to leave?</h2>
                    </div>
                    <hr />
                    <div className="flex justify-around mt-4">
                        <button onClick={closeLogoutModal} className="px-4 py-2 border-2 border-solid border-gray-200 rounded-md hover:border-peach">Cancel</button>
                        <button onClick={handleLogout} className="px-4 py-2 bg-orange text-white rounded-md hover:bg-peach hover:text-black">Logout</button>
                    </div>
                </div>
            </div>
        )}
    </div>
  )
}

export default Sidebar