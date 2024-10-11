import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [errors, setErrors] = useState({})

  const navigate = useNavigate()

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleLogin = () => {
    const validationErrors = {}
    if (!email) validationErrors.email = 'Email is required'
    if (!password) validationErrors.password = "Password is required"

    if (Object.keys(validationErrors).length > 0) {
      // console.log(validationErrors)
      setErrors(validationErrors)
      return
    }

    const payload = {
      email: email,
      password: password,
    }
    
    const config = {
      headers: {
        "Content-Type" : "application/json",
        "apiKey" : 'c7b411cc-0e7c-4ad1-aa3f-822b00e7734b'
      }
    }

    axios
      .post("https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/login", payload, config)
      .then((res) => {
        console.log(res.data)
        localStorage.setItem('access_token', res?.data?.token)
        setErrors('')
        toast.success("Login successful! 🎉")
        setTimeout(() => {
          navigate('/')
        }, 2000)
      })
      .catch((err) => {
        console.log(err.response)
        toast.error(`Login failed! Please try again.`)
        const serverErrors = err?.response?.data?.message || {};  
        setErrors(serverErrors);  // Set errors ke response error atau tetap objek kosong
      })
  }


  return (
    <div className='flex flex-row min-h-screen justify-center items-center'>
        <div className='bg-white bg-opacity-80 w-2/5 p-16 shadow-xl rounded-xl'>
            <h1 className='text-5xl text-black font-medium text-center'>Artfolio 🌻</h1>
            <p className='text-black text-center pt-10 pb-4'>Please fill this form to log in to your account</p>
            <div className='flex flex-col gap-4'>
                
                <input type="email" placeholder='E-mail' onChange={handleChangeEmail} required
                className='rounded-md p-2 w-[100%] focus:outline-none focus:border-orange border-2'/>
                {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}

                <input type="password" placeholder='Password' onChange={handleChangePassword} required
                className='rounded-md p-2 w-[100%] focus:outline-none focus:border-orange border-2'/>
                {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}

                {typeof errors === 'string' && (
                  <span className="text-red-500 text-md text-center font-medium">{errors}</span>
                )}

                <button type="submit" onClick={handleLogin}
                className='my-4 py-3 bg-orange text-white hover:bg-peach hover:text-black font-medium rounded-md'>
                    Login
                </button>
                <div className="flex gap-1 justify-center md:text-sm text-xs">
                    <p className='text-black'>Don't have an account?</p>
                    <Link to='/register' className="underline text-teal hover:text-orange cursor-pointer">Create new</Link>
                </div>

            </div>
        </div>

        
        <ToastContainer className='rounded-xl' autoClose={2000}/>
    </div>
    
  )
}

export default Login