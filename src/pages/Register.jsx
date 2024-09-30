import axios from 'axios'
import React, { useEffect, useState } from 'react'
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

  const [file, setFile] = useState(null)
  const [profilePicUrl, setProfilePicUrl] = useState('')

  const handleChangeName = (e) => {
    setName(e.target.value)
  }
  const handleChangeUsername = (e) => {
    setUsername(e.target.value)
  }
  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }
  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }
  const handleChangePasswordRepeat = (e) => {
    setPasswordRepeat(e.target.value)
  }
  const handleChangePhoneNumber = (e) => {
    setPhoneNumber(e.target.value)
  }
  const handleChangeBio = (e) => {
    setBio(e.target.value)
  }
  const handleChangeWebsite = (e) => {
    setWebsite(e.target.value)
  }

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  };

  const handleUpload = (e) => {
    if (e) {
      e.preventDefault();
    }
    console.log("upload", file)

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        "apiKey" : 'c7b411cc-0e7c-4ad1-aa3f-822b00e7734b'
      },
    }

    // disini hit api uload
    const formData = new FormData()
    formData.append("image", file)
    axios
      .post(
        "https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/upload-image",
        formData,
        config
      )
      .then((res) => {
        console.log(res)
        setProfilePicUrl(res?.data?.url);
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    if (file) {
      handleUpload();
    }
  }, [file]);
  
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

    const config = {
      headers: {
        "Content-Type" : "application/json",
        "apiKey" : 'c7b411cc-0e7c-4ad1-aa3f-822b00e7734b'
      }
    }

    axios
      .post("https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/register", payload, config)
      .then((res) => {
        console.log(payload)
        console.log(res.data)
        // add success toast redirect to login
        
      })
      .catch((err) => {
        console.log(err.response)
      })
  }

  return (
    <div className='flex flex-row min-h-screen justify-center items-center'>
        <div className='bg-white bg-opacity-80 w-2/5 p-12 shadow-xl rounded-xl'>
            <h1 className='text-5xl text-black font-medium text-center'>Artfolio</h1>
            <p className='text-black text-center pt-10 pb-4'>Please fill this form to register new account</p>
            <div className='flex flex-col gap-4'>
                    <input type="text" placeholder='Name' onChange={handleChangeName} required
                    className='rounded-md p-2 w-[100%] focus:outline-none focus:border-orange border-2'/>
                    
                    <input type="text" placeholder='Username' onChange={handleChangeUsername} required
                    className='rounded-md p-2 w-[100%] focus:outline-none focus:border-orange border-2'/>

                    <div className='grid grid-cols-2 gap-4'>
                        <div className='flex flex-col gap-4'>
                            <input type="email" placeholder='E-mail' onChange={handleChangeEmail} required
                            className='rounded-md p-2 w-[100%] focus:outline-none focus:border-orange border-2'/>
                            
                            <input type="password" placeholder='Password' onChange={handleChangePassword} required
                            className='rounded-md p-2 w-[100%] focus:outline-none focus:border-orange border-2'/>
                            <input type="password" placeholder='Rewrite your password' onChange={handleChangePasswordRepeat} required
                            className='rounded-md p-2 w-[100%] focus:outline-none focus:border-orange border-2'/>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <input type="text" placeholder='Phone Number' onChange={handleChangePhoneNumber}
                            className='rounded-md p-2 w-[100%] focus:outline-none focus:border-orange border-2'/>

                            <input type="text" placeholder='Bio' onChange={handleChangeBio}
                            className='rounded-md p-2 w-[100%] focus:outline-none focus:border-orange border-2'/>

                            <input type="text" placeholder='Website' onChange={handleChangeWebsite}
                            className='rounded-md p-2 w-[100%] focus:outline-none focus:border-orange border-2'/>
                        </div>
                    </div>

                {/* <input type="file" src="" alt="profile pic" placeholder='Profile Picture'
                className='rounded-md p-2 w-[100%] focus:outline-none focus:border-orange border-2'/> */}

                <div className="relative">
                      <label
                        htmlFor="file-upload"
                        className="block rounded-md p-2 w-full text-gray-400 bg-white border-2 border-gray-200 cursor-pointer focus:outline-none focus:border-orange text-left"
                      >
                        {profilePicUrl || 'Profile Picture'} 
                        
                      </label>
                      <input
                        id="file-upload"
                        type="file"
                        className="absolute top-0 left-0 opacity-0 w-full h-full cursor-pointer"
                        onChange={handleFileChange}
                      />
                </div>

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