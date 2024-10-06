import React, { useEffect } from 'react'
import { BASEURL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addFeed } from '../utils/feedSlice';
import UserCard from './UserCard';
import axios from 'axios';

const Feed = () => {
    const dispatch = useDispatch();
    const feed = useSelector((store) =>store.feed);
    const getFeed = async() =>{
        if (feed) return;
        try{
        const res = await axios.get(BASEURL + "/feed",{withCredentials: true});
        dispatch(addFeed(res.data))
        }catch(err){
            console.error(err);
        }
    }

    useEffect(()=>{
     getFeed()
    },[])
  return ( 
    (<div className='flex justify-center my-10'><UserCard /></div>)
  )
}

export default Feed