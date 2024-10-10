import React, { useEffect, useState } from 'react'
import { MdClose } from "react-icons/md";
import axios from 'axios';

const ViewFollowsModal = ({closeModal, userId}) => {

  const token = localStorage.getItem('access_token')
  const config = {
    headers: {
      'apiKey': 'c7b411cc-0e7c-4ad1-aa3f-822b00e7734b',
      'Authorization': `Bearer ${token}`,
    }
  }

  const [followers, setFollowers] = useState([])
  const getFollowers = () => {
    axios
    .get(`https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/followers/${userId}?size=50&page=1`, config)
    .then((res) => {
        console.log("API Get Followers by User ID response: ", res)
        setFollowers(res?.data?.data?.users)
        // console.log(followers)
    })
    .catch((err) => {
        console.log("Error fetching followers: ", err?.response)
    })
  }

  useEffect(() => {
    getFollowers()
  }, [userId])

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
        <div className="bg-white rounded-lg shadow-lg w-2/5 text-center">
            <button onClick={closeModal} className='float-right m-4'>
                <MdClose className='text-2xl text-black' />
            </button>
            <div className='grid grid-cols-2'>
                <div>
                    <h2 className='text-xl font-semibold px-12 py-6'>Followers</h2>
                    <hr />
                    {/* Followers List */}
                    <div className='flex flex-col pl-20 h-[400px] overflow-y-auto no-scrollbar'>
                        { followers.map((follower) => (
                            <div key={follower?.id} className='py-4 flex gap-2'>
                                <img src={follower?.profilePictureUrl} className='w-8 h-8 object-cover bg-peach rounded-full'></img>
                                <p className='leading-7'>{follower?.username}</p>
                            </div>
                        ))} 
                    </div>
                </div>
                <div>
                    <h2 className='text-xl font-semibold px-12 py-6'>Following</h2>
                    <hr />
                    {/* Following List */}
                    <div className='flex flex-col pl-10 h-[400px] overflow-y-auto no-scrollbar'>
                        <div className='py-4 flex gap-2'>
                            <div className='w-8 h-8 object-cover bg-peach rounded-full'></div>
                            <p className='leading-7'>username yg following</p>
                        </div>
                        <div className='py-4 flex gap-2'>
                            <div className='w-8 h-8 object-cover bg-peach rounded-full'></div>
                            <p className='leading-7'>username yg following</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewFollowsModal