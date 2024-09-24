import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='flex flex-row min-h-screen justify-center items-center'>
        <div className='bg-white bg-opacity-80 w-2/5 p-16 shadow-xl rounded-xl'>
            <h1 className='text-5xl text-black font-medium text-center mb-16'>Artfolio</h1>
            <div className='flex flex-col gap-4 mb-10'>
                
                <input type="text" placeholder='Username or E-mail' 
                className='rounded-md p-2 w-[100%] focus:outline-none focus:border-orange border-2'/>

                <input type="password" placeholder='Password' 
                className='rounded-md p-2 w-[100%] focus:outline-none focus:border-orange border-2'/>

                <button type="submit" 
                className='py-3 bg-orange text-white hover:bg-peach hover:text-black font-medium rounded-md'>
                    Register
                </button>
                <div className="flex gap-1 justify-center md:text-sm text-xs">
                    <p className='text-black'>Already have an account?</p>
                    <Link to='/login' className="underline text-orange hover:text-peach cursor-pointer">Log in</Link>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Register