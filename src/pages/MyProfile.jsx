import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import axios from 'axios'
import EditProfileModal from '../components/EditProfileModal'

const MyProfile = () => {

  const [user, setUser] = useState(null)
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false)

  const openEditProfileModal = () => {
    setIsEditProfileModalOpen(true)
  }

  const closeEditProfileModal = () => {
    setIsEditProfileModalOpen(false)
  }

  const getLoggedUser = () => {
    
    const token = localStorage.getItem('access_token')
    const config = {
      headers: {
        'apiKey': 'c7b411cc-0e7c-4ad1-aa3f-822b00e7734b',
        'Authorization': `Bearer ${token}`,
      }
    }

    axios
    .get('https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/user', config)
    .then((res) => {
      console.log(res.data.data)
      setUser(res?.data?.data)
    })
    .catch((err) => {
      console.log(err.response)
    })
  }

  useEffect(() => {
    getLoggedUser()
  })

  return (
    <div>
        <Sidebar />

        {/* Container */}
        <div className='mt-10 w-[60%] mx-auto'>
            <div className='bg-white shadow-lg rounded-md p-6 my-4'>
                {/* User Profile */}
                <div className='flex justify-between'>
                  <div className='flex gap-10'>
                      <img src={user?.profilePictureUrl} className='w-36 h-36 object-cover bg-peach rounded-full'></img>
                      <div  className='flex flex-col gap-6'>
                        <div>
                          <p className='text-3xl font-bold text-black'>{user?.name}</p>
                          <p className='text-xl text-black'>{user?.username}</p>
                        </div>
                        <div className='flex gap-4'>
                          <div className='text-center'>
                            <p className='text-2xl font-light'>100</p>
                            <p>Posts</p>
                          </div>
                          <div className='text-center'>
                            <p className='text-2xl font-light'>{user?.totalFollowers}</p>
                            <p>Followers</p>
                          </div>
                          <div className='text-center'>
                            <p className='text-2xl font-light'>{user?.totalFollowing}</p>
                            <p>Following</p>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div>
                    <div onClick={openEditProfileModal} className='leading-9 px-2 text-sm border-[1px] border-solid border-peach hover:bg-sand rounded-lg cursor-pointer'>Edit Profile</div>
                  </div>
                </div>

                <hr className='my-6'/>
                {/* User Bio */}
                <div>
                  {/* Bio */}
                  <div>
                    <p className='text-lg font-medium italic'>Bio</p>
                    <p className='text-md'>
                      {user?.bio}  
                    </p>
                  </div>
                  {/* Contacts: web, phoneNum */}
                  <div className='flex gap-4'>
                    <a href='' className='underline font-semibold text-teal'>{user?.email}</a>
                    <p>|</p>
                    <a href='' className='underline font-semibold text-teal'>{user?.website}</a>
                    <p>|</p>
                    <a href='' className='underline font-semibold text-teal'>{user?.phoneNumber}</a>
                  </div>
                </div>

                <hr className='my-6'/>

                {/* User Gallery */}
                <div>
                  <p className='text-lg font-medium italic'>My Posts</p>
                </div>
            </div>
        </div>

        {isEditProfileModalOpen && (
          <EditProfileModal closeModal={closeEditProfileModal} />
        )}
    </div>
  )
}

export default MyProfile