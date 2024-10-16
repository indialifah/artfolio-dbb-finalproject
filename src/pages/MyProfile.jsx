import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import axios from 'axios'
import EditProfileModal from '../components/EditProfileModal'
import ViewFollowsModal from '../components/ViewFollowsModal'

const MyProfile = () => {

  const token = localStorage.getItem('access_token')
  const config = {
    headers: {
      'apiKey': 'c7b411cc-0e7c-4ad1-aa3f-822b00e7734b',
      'Authorization': `Bearer ${token}`,
    }
  }

  const [user, setUser] = useState(null)
  const [myPosts, setMyPosts] = useState({ posts: [], totalItems: 0})
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false)
  const [isViewFollowsModalOpen, setIsViewFollowsModalOpen] = useState(false)

  const openViewFollowsModal = () => {
    setIsViewFollowsModalOpen(true)
  }
  const closeViewFollowsModal = () => {
    setIsViewFollowsModalOpen(false)
  }

  const openEditProfileModal = () => {
    setIsEditProfileModalOpen(true)
  }
  const closeEditProfileModal = () => {
    setIsEditProfileModalOpen(false)
  }

  const getMyPosts = (userId) => {
    axios
    .get(`https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/users-post/${userId}?size=30&page=1`, config)
    .then((res) => {
      console.log("API Get Post by User ID response", res)
      setMyPosts({
        posts: res?.data?.data?.posts,
        totalItems:  res?.data?.data?.totalItems
      })
    })
    .catch((err) => {
      console.log("Error fetching posts: ", err?.response)
    })
  }

  const getLoggedUser = () => {

    axios
    .get('https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/user', config)
    .then((res) => {
      console.log("API Get Logged User response: ", res)
      setUser(res?.data?.data)
      getMyPosts(res?.data?.data?.id)
    })
    .catch((err) => {
      console.log(err.response)
    })
  }

  useEffect(() => {
    getLoggedUser()
  }, [])

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
                            <p className='text-2xl font-light'>{myPosts.totalItems}</p>
                            <p>Posts</p>
                          </div>
                          <div onClick={openViewFollowsModal} className='text-center cursor-pointer'>
                            <p className='text-2xl font-light'>{user?.totalFollowers}</p>
                            <p>Followers</p>
                          </div>
                          <div onClick={openViewFollowsModal} className='text-center cursor-pointer'>
                            <p className='text-2xl font-light'>{user?.totalFollowing}</p>
                            <p>Following</p>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div>
                    <div onClick={openEditProfileModal} className='leading-9 px-2 text-sm border-[1px] border-solid border-gray-300 hover:border-peach hover:bg-peach rounded-lg cursor-pointer'>Edit Profile</div>
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
                    {user?.email && (
                      <>
                        <a href={`mailto:${user?.email}`} className='underline font-semibold text-teal hover:text-orange'>{user?.email}</a>
                        {(user?.website || user?.phoneNumber) && <p>|</p>}
                      </>
                    )}

                    {user?.website && (
                      <>
                        <a href={user?.website} className='underline font-semibold text-teal hover:text-orange'>{user?.website}</a>
                        {user?.phoneNumber && <p>|</p>}
                      </>
                    )}

                    {user?.phoneNumber && (
                      <a href={`tel:${user?.phoneNumber}`} className='underline font-semibold text-teal hover:text-orange'>{user?.phoneNumber}</a>
                    )}
                  </div>
                </div>

                <hr className='my-6'/>

                {/* User Posts */}
                <div>
                  <p className='text-lg font-medium italic mb-6'>My Posts</p>
                  <div className='h-[640px] overflow-y-auto no-scrollbar bg-gray-50  px-4 shadow-inner'>
                    { myPosts.posts
                      ?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Sort dari terbaru ke terlama
                      ?.map((post) => (
                        <div key={post.id} className='bg-white border-1 border-solid border-teal shadow-md rounded-md p-6 my-4'>
                          <div className='flex flex-col gap-6'>
                              {/* user */}
                              <div className='flex justify-between'>
                                <div className='flex gap-4 cursor-pointer'>
                                  <img src={post?.user?.profilePictureUrl} className='w-10 h-10 object-cover bg-peach rounded-full'></img>
                                  <p className='text-lg leading-9'>{post?.user?.username}</p>
                                </div>
                                {/* <div>
                                  <p className='leading-9 px-2 text-sm border-[1px] border-solid border-black rounded-lg cursor-pointer'>followed</p>
                                </div> */}
                              </div>
                              {/* photo */}
                              <div className='flex gap-4'>
                                <div className='flex flex-col gap-6 w-3/5'>
                                  <img src={post?.imageUrl} className=' h-[400px] object-cover rounded-md border-[1px] border-solid border-gray-200'></img>
                                  <div>
                                    <span className='font-medium mr-2'>{post?.user?.username}</span>
                                    <span>{post?.caption}</span>
                                  </div>
                                  {/* likes comments */}
                                  <div className='flex gap-8'>
                                    <div className='flex gap-4'>
                                      <div className='w-6 h-6 bg-orange rounded-full'></div>
                                      <p>{post?.totalLikes} Likes</p>
                                    </div>
                                    <div className='flex gap-4'>
                                      <div className='w-6 h-6 bg-orange rounded-full'></div>
                                      <p>{post?.totalComments} Comments</p>
                                    </div>
                                  </div>
                                </div>
                                <div className='w-2/5 border-[1px] border-solid border-gray-200 rounded-md'>
                                  <p className=' mx-4 my-2'>Comment Section</p>
                                  <hr />
                                </div>
                              </div>
                          </div>
                        </div>
                      ))
                    }
                    
                  </div>
                  
                </div>
            </div>
        </div>

        {isEditProfileModalOpen && (
          <EditProfileModal closeModal={closeEditProfileModal} getLoggedUser={getLoggedUser}/>
        )}

        {isViewFollowsModalOpen && (
          <ViewFollowsModal closeModal={closeViewFollowsModal} userId={user?.id}/>
        )}
    </div>
  )
}

export default MyProfile