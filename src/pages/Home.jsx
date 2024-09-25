import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
        <Navbar />
        
        {/* Container untuk timeline */}
        <div className='mt-24 w-[60%] mx-auto'>
          {/* Ini satu Post */}
          <div className='bg-white shadow-lg rounded-md py-4 px-6 my-4'>
            <div className='flex flex-col gap-4'>
                {/* user */}
                <div className='flex gap-4'>
                  <div className='w-10 h-10 bg-peach rounded-full'></div>
                  <p className='text-lg leading-9'>username</p>
                </div>
                {/* photo carousel */}
                <div className='flex gap-1'>
                  <div className='w-80 h-56 bg-peach rounded-md'></div>
                  <div className='w-80 h-56 bg-peach rounded-md'></div>
                  <div className='w-80 h-56 bg-peach rounded-md'></div>
                  <div className='w-80 h-56 bg-peach rounded-md'></div>
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