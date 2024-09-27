import React from 'react'
import Navbar from '../components/Navbar'

const UserProfile = () => {
  return (
    <div>
        <Navbar />

        {/* Container */}
        <div className='mt-24 w-[60%] mx-auto'>
            <div className='bg-white shadow-lg rounded-md p-6 my-4'>
                {/* User Profile */}
                <div className='flex justify-between'>
                  <div className='flex gap-10'>
                      <div className='w-36 h-36 bg-peach rounded-full'></div>
                      <div  className='flex flex-col gap-6'>
                        <div>
                          <p className='text-3xl font-bold text-black'>Name's gallery</p>
                          <p className='text-xl text-black'>Username</p>
                        </div>
                        <div className='flex gap-4'>
                          <div className='text-center'>
                            <p className='text-2xl font-light'>100</p>
                            <p>Posts</p>
                          </div>
                          <div className='text-center'>
                            <p className='text-2xl font-light'>20K</p>
                            <p>Followers</p>
                          </div>
                          <div className='text-center'>
                            <p className='text-2xl font-light'>10</p>
                            <p>Followings</p>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div>
                    <p className='leading-9 px-2 text-sm border-[1px] border-solid border-black rounded-lg cursor-pointer'>Follow</p>
                  </div>
                </div>

                <hr className='my-6'/>
                {/* User Bio */}
                {/* User Gallery */}
            </div>
        </div>
    </div>
  )
}

export default UserProfile