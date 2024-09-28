import React from 'react'
import Navbar from '../components/Navbar'

const Explore = () => {
  return (
    <div>
        <Navbar />

        <div className='mt-24 w-[60%] mx-auto'>
            <div className='bg-white shadow-lg rounded-md p-6 my-4'>
                {/* Display Explore Post */}    
                <div className='grid grid-cols-2 gap-4'>
                    {/* one single post */}
                    <div className='border-2 border-solid border-peach rounded-lg p-4 flex flex-col gap-4'>
                        {/* user */}
                        <div className='flex justify-between'>
                            <div className='flex gap-4 cursor-pointer'>
                                <div className='w-10 h-10 bg-peach rounded-full'></div>
                                <p className='text-lg leading-9'>username</p>
                            </div>
                            <div>
                                <p className='leading-9 px-2 text-sm border-[1px] border-solid border-black rounded-lg cursor-pointer'>follow</p>
                            </div>
                        </div>
                        {/* photo */}
                        <div className='flex flex-col gap-6'>
                            <div className='h-[400px] bg-peach rounded-md'></div>
                        </div>
                        {/* likes comments */}
                        <div className='flex gap-8'>
                            <div className='flex gap-4'>
                                <div className='w-6 h-6 bg-orange rounded-full'></div>
                                <p>Likes</p>
                            </div>
                            <div className='flex gap-4'>
                                <div className='w-6 h-6 bg-orange rounded-full'></div>
                                <p>Comments</p>
                            </div>
                        </div>
                        <p>Description</p>
                    </div>

                    {/* one single post */}
                    <div className='border-2 border-solid border-peach rounded-lg p-4 flex flex-col gap-4'>
                        {/* user */}
                        <div className='flex justify-between'>
                            <div className='flex gap-4 cursor-pointer'>
                                <div className='w-10 h-10 bg-peach rounded-full'></div>
                                <p className='text-lg leading-9'>username</p>
                            </div>
                            <div>
                                <p className='leading-9 px-2 text-sm border-[1px] border-solid border-black rounded-lg cursor-pointer'>follow</p>
                            </div>
                        </div>
                        {/* photo */}
                        <div className='flex flex-col gap-6'>
                            <div className='h-[400px] bg-peach rounded-md'></div>
                        </div>
                        {/* likes comments */}
                        <div className='flex gap-8'>
                            <div className='flex gap-4'>
                                <div className='w-6 h-6 bg-orange rounded-full'></div>
                                <p>Likes</p>
                            </div>
                            <div className='flex gap-4'>
                                <div className='w-6 h-6 bg-orange rounded-full'></div>
                                <p>Comments</p>
                            </div>
                        </div>
                        <p>Description</p>
                    </div>

                   
                </div>
            </div>
        </div>
    </div>
  )
}

export default Explore