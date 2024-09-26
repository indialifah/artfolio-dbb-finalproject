import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
        <Navbar />
        
        {/* Container untuk timeline */}
        <div className='mt-24 w-[60%] mx-auto'>
          {/* Ini satu Post */}
          <div className='bg-white shadow-lg rounded-md p-6 my-4'>
            <div className='flex flex-col gap-6'>
                {/* user */}
                <div className='flex justify-between'>
                  <div className='flex gap-4 cursor-pointer'>
                    <div className='w-10 h-10 bg-peach rounded-full'></div>
                    <p className='text-lg leading-9'>username</p>
                  </div>
                  <div>
                    <p className='leading-9 px-2 text-sm border-[1px] border-solid border-black rounded-lg cursor-pointer'>followed</p>
                  </div>
                </div>
                {/* photo carousel */}
                <div className='flex gap-6'>
                  <div className='w-3/5 h-[420px] bg-peach rounded-md'></div>
                  <p>Description</p>
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
            </div>
          </div>

          

        </div>
    </div>
  )
}

export default Home