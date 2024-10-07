import React, { useState, useEffect } from 'react'
import { MdClose } from "react-icons/md";
import axios from 'axios';

const EditProfileModal = ({closeModal}) => {

    const [image, setImage] = useState(null)
    const [imageUrl, setImageUrl] = useState('')

    const handleImageChange = (e) => {
        setImage(e.target.files[0])
    }
    const handleUpload = (e) => {
        if (e) {
          e.preventDefault();
        }
        console.log("upload", image)
        
        const token = localStorage.getItem('access_token')
        const config = {
          headers: {
            "Content-Type": "multipart/form-data",
            "apiKey" : 'c7b411cc-0e7c-4ad1-aa3f-822b00e7734b',
            "Authorization" : `Bearer ${token}`,
          },
        }
    
        // disini hit api uload
        const formData = new FormData()
        formData.append("image", image)
        axios
        .post(
            "https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/upload-image",
            formData,
            config
        )
        .then((res) => {
            console.log(res)
            setImageUrl(res?.data?.url)
        
        })
        .catch((err) => {
            console.log(err)
        })
    }
    useEffect(() => {
    if (image) {
        handleUpload();
    }
    }, [image])

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
        <div className="bg-white rounded-lg shadow-lg w-2/5 text-center">
            <button onClick={closeModal} className='float-right m-4'>
                <MdClose className='text-2xl text-black' />
            </button>
            <div className='px-12 py-6'>
                <h2 className='text-2xl font-semibold'>Edit Profile</h2>
            </div>
            <hr />
            <div className='px-12 py-10'>
                <form onSubmit={''} className='flex flex-col gap-6'>
                    <div className="relative">
                            <label
                                htmlFor="file-upload"
                                className="block rounded-md p-2 w-full text-gray-400 bg-white border-2 border-gray-200 cursor-pointer focus:outline-none focus:border-orange text-left"
                            >
                                {imageUrl || 'Change Profile Picture'} 
                                
                            </label>
                            <input
                                id="file-upload"
                                type="file"
                                className="absolute top-0 left-0 opacity-0 w-full h-full cursor-pointer"
                                onChange={handleImageChange}
                            />
                    </div>

                    <input 
                        // value={name} 
                        onChange={''} 
                        placeholder='Name'
                        rows="4" 
                        className='border-2 p-2 rounded-md focus:outline-none focus:border-orange' 
                        required 
                    />
                    <input 
                        // value={username} 
                        onChange={''} 
                        placeholder='Username'
                        rows="4" 
                        className='border-2 p-2 rounded-md focus:outline-none focus:border-orange' 
                        required 
                    />
                    <input 
                        // value={email} 
                        onChange={''} 
                        placeholder='Email'
                        rows="4" 
                        className='border-2 p-2 rounded-md focus:outline-none focus:border-orange' 
                        required 
                    />
                    <input 
                        // value={phoneNumber} 
                        onChange={''} 
                        placeholder='Phone Number'
                        rows="4" 
                        className='border-2 p-2 rounded-md focus:outline-none focus:border-orange' 
                        required 
                    />
                    <input 
                        // value={bio} 
                        onChange={''} 
                        placeholder='Bio'
                        rows="4" 
                        className='border-2 p-2 rounded-md focus:outline-none focus:border-orange' 
                        required 
                    />
                    <input 
                        // value={website} 
                        onChange={''} 
                        placeholder='Website'
                        rows="4" 
                        className='border-2 p-2 rounded-md focus:outline-none focus:border-orange' 
                        required 
                    />

                    <button type="submit" className='py-2 bg-orange text-white hover:bg-peach hover:text-black rounded-md'>
                        Update Profile
                    </button>
                </form>
                
            </div>
        </div>
    </div>
  )
}

export default EditProfileModal