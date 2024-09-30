import React, { useState } from 'react'
import { MdClose } from "react-icons/md";

const CreateStoryModal = ({ closeModal }) => {

    const [image, setImage] = useState(null)

    const handleImageChange = (e) => {
        setImage(e.target.files[0])
    }

    const handleUploadStory = (e) => {
        if (e) { e.preventDefault( )}

        // axios create story dsiniii
        closeModal()
    }

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
        <div className="bg-white rounded-lg shadow-lg w-2/5 text-center">
            <button onClick={closeModal} className='float-right m-4'>
                <MdClose className='text-2xl text-black' />
            </button>
            <div className='px-12 py-6'>
                <h2 className='text-2xl font-semibold'>Create New Story</h2>
            </div>
            <hr />
            <div className='px-12 py-10'>
                <form onSubmit={handleUploadStory} className='flex flex-col gap-6'>
                    <div className="relative">
                        <label
                            htmlFor="file-upload"
                            className="block rounded-md p-2 w-full text-gray-400 bg-white border-2 border-gray-200 cursor-pointer focus:outline-none focus:border-orange text-left"
                        >
                            {/* {profilePicUrl || 'Profile Picture'}  */}
                            Choose Photo
                        </label>
                        <input
                            id="file-upload"
                            type="file"
                            className="absolute top-0 left-0 opacity-0 w-full h-full cursor-pointer"
                            onChange={handleImageChange}
                        />
                    </div>
                    
                    <button type="submit" className='py-2 bg-orange text-white hover:bg-peach hover:text-black rounded-md'>
                        Upload Story
                    </button>
                </form>
                
            </div>
        </div>
    </div>
  )
}

export default CreateStoryModal