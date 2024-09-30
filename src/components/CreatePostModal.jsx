import React, { useState } from 'react';
import { MdClose } from "react-icons/md";

const CreatePostModal = ({ closeModal }) => {

    
    const [image, setImage] = useState(null)
    const [caption, setCaption] = useState('')

    const handleImageChange = (e) => {
        setImage(e.target.files[0])
    }

    const handleCaptionChange = (e) => {
        setCaption(e.target.value)
    }

    const handleUploadPost = (e) => {
        if (e) { e.preventDefault() }
        
        // axios create post dsini deh pokoknya
        closeModal();
         
    }

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
        <div className="bg-white rounded-lg shadow-lg w-2/5 text-center">
            <button onClick={closeModal} className='float-right m-4'>
                <MdClose className='text-2xl text-black' />
            </button>
            <div className='px-12 py-6'>
                <h2 className='text-2xl font-semibold'>Create New Post</h2>
            </div>
            <hr />
            <div className='px-12 py-10'>
                <form onSubmit={handleUploadPost} className='flex flex-col gap-6'>
                    <div className="relative">
                        <label
                            htmlFor="file-upload"
                            className="block rounded-md p-2 w-full text-gray-400 bg-white border-2 border-gray-200 cursor-pointer focus:outline-none focus:border-orange text-left"
                        >
                            {/* {profilePicUrl || 'Profile Picture'}  */}
                            Choose Your Photo
                        </label>
                        <input
                            id="file-upload"
                            type="file"
                            className="absolute top-0 left-0 opacity-0 w-full h-full cursor-pointer"
                            onChange={handleImageChange}
                        />
                    </div>

                    <textarea 
                        value={caption} 
                        onChange={handleCaptionChange} 
                        placeholder="Write a caption..." 
                        rows="4" 
                        className='border-2 p-2 rounded-md focus:outline-none focus:border-orange' 
                        required 
                    />
                    
                    <button type="submit" className='py-2 bg-orange text-white hover:bg-peach hover:text-black rounded-md'>
                        Post
                    </button>
                </form>
                
            </div>
        </div>
    </div>
  )
}

export default CreatePostModal