import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import Story from '../components/Story'
import axios from 'axios'

const Home = () => {

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  const getPosts = () => {

    const token = localStorage.getItem('access_token')
    console.log("Token: ", token)
    
    const config = {
      headers: { 
        'apiKey': 'c7b411cc-0e7c-4ad1-aa3f-822b00e7734b', 
        'Authorization': `Bearer ${token}`,
      }
    }

    axios
    .get('https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/explore-post?size=20&page=1', config)
    .then((res) => {
      console.log("API response: ", res)
      // console.log(res?.data?.data?.posts)
      setPosts(res?.data?.data?.posts)
      setLoading(false)
    })
    .catch((err) => {
      console.log("Error fetching posts: ", err?.response)
      setError("Failed to fetch posts")
      setLoading(false)
    })
  }

  useEffect(() => {
    console.log("Fetching posts...");
    getPosts()
  }, [])

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  return (
    <div>
        {/* <Navbar /> */}
        <Sidebar />
        <Story />
        
        {/* Container untuk timeline */}
        <div className='w-[60%] mx-auto'>
          {/* Ini satu Post */}

          {
            posts?.length > 0 ? (
              posts?.map((post) => (
                  <div key={post.id} className='bg-white shadow-lg rounded-md p-6 my-4'>
                    <div className='flex flex-col gap-6'>
                        {/* user */}
                        <div className='flex justify-between'>
                          <div className='flex gap-4 cursor-pointer'>
                            <img src={post.user?.profilePictureUrl} className='w-10 h-10 object-cover bg-peach rounded-full'></img>
                            <p className='text-lg leading-9'>{post.user?.username}</p>
                          </div>
                          {/* <div>
                            <p className='leading-9 px-2 text-sm border-[1px] border-solid border-black rounded-lg cursor-pointer'>followed</p>
                          </div> */}
                        </div>
                        {/* photo */}
                        <div className='flex gap-4'>
                          <div className='flex flex-col gap-6 w-3/5'>
                            <img src={post.imageUrl} className=' h-[400px] object-cover rounded-md border-[1px] border-solid border-gray-200'></img>
                            <div className='flex gap-2 '>
                              <span className='font-medium'>{post.user?.username}</span>
                              <p>{post.caption}</p>
                            </div>
                            {/* likes comments */}
                            <div className='flex gap-8'>
                              <div className='flex gap-4'>
                                <div className='w-6 h-6 bg-orange rounded-full'></div>
                                <p>{post.totalLikes} Likes</p>
                              </div>
                              <div className='flex gap-4'>
                                <div className='w-6 h-6 bg-orange rounded-full'></div>
                                <p>{post.totalComments} Comments</p>
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
            ) : (
              <div>No post available.</div>
            )
          }

        </div>
    </div>
  )
}

export default Home