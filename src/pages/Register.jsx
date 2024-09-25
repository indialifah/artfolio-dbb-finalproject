import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {

  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordRepeat, setPasswordRepeat] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [bio, setBio] = useState('')
  const [website, setWebsite] = useState('')
  const [profilePicUrl, setProfilePicUrl] = useState('')

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleRegister = () => {
    const payload = {
      name: name,
      username: username,
      email: email,
      password: password,
      passwordRepeat: passwordRepeat,
      phoneNumber: phoneNumber,
      bio: bio,
      website: website,
      profilePictureUrl: profilePicUrl,
    }

    console.log(payload)
  }

  return (
    <div className='flex flex-row min-h-screen justify-center items-center'>
        <div className='bg-white bg-opacity-80 w-2/5 p-12 shadow-xl rounded-xl'>
            <h1 className='text-5xl text-black font-medium text-center'>Artfolio</h1>
            <p className='text-black text-center pt-10 pb-4'>Please fill this form to register new account</p>
            <div className='flex flex-col gap-4'>
                    <input type="text" placeholder='Name' 
                    className='rounded-md p-2 w-[100%] focus:outline-none focus:border-orange border-2'/>
                    
                    <input type="text" placeholder='Username' 
                    className='rounded-md p-2 w-[100%] focus:outline-none focus:border-orange border-2'/>

                    <div className='grid grid-cols-2 gap-4'>
                        <div className='flex flex-col gap-4'>
                            <input type="email" placeholder='E-mail' onChange={handleChangeEmail}
                            className='rounded-md p-2 w-[100%] focus:outline-none focus:border-orange border-2'/>
                            
                            <input type="password" placeholder='Password' onChange={handleChangePassword}
                            className='rounded-md p-2 w-[100%] focus:outline-none focus:border-orange border-2'/>
                            <input type="password" placeholder='Rewrite your password' onChange={handleChangePassword}
                            className='rounded-md p-2 w-[100%] focus:outline-none focus:border-orange border-2'/>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <input type="text" placeholder='Phone Number' 
                            className='rounded-md p-2 w-[100%] focus:outline-none focus:border-orange border-2'/>

                            <input type="text" placeholder='Bio' 
                            className='rounded-md p-2 w-[100%] focus:outline-none focus:border-orange border-2'/>

                            <input type="text" placeholder='Website' 
                            className='rounded-md p-2 w-[100%] focus:outline-none focus:border-orange border-2'/>
                        </div>
                    </div>

                <input type="file" src="" alt="profile pic" placeholder='Profile Picture'
                className=''/>

                <button type="submit" onClick={handleRegister}
                className='mt-4 py-3 bg-orange text-white hover:bg-peach hover:text-black font-medium rounded-md'>
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