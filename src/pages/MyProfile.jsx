import React from 'react'
import Sidebar from '../components/Sidebar'

const MyProfile = () => {
  return (
    <div>
        <Sidebar />

        {/* Container */}
        <div className='mt-10 w-[60%] mx-auto'>
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
                    <p className='leading-9 px-2 text-sm border-[1px] border-solid border-peach hover:bg-sand rounded-lg cursor-pointer'>Edit Profile</p>
                  </div>
                </div>

                <hr className='my-6'/>
                {/* User Bio */}
                <div>
                  {/* Bio */}
                  <div>
                    <p className='text-lg font-medium italic'>Bio</p>
                    <p className='text-md'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                  {/* Contacts: web, phoneNum */}
                  <div className='flex gap-4'>
                    <a href="" className='underline font-semibold text-teal'>website hyperlink</a>
                    <p>|</p>
                    <a href='' className='underline font-semibold text-teal'>phone number</a>
                  </div>
                </div>

                <hr className='my-6'/>

                {/* User Gallery */}
            </div>
        </div>
    </div>
  )
}

export default MyProfile