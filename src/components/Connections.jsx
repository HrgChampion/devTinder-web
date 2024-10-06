import axios from 'axios';
import React, { useEffect } from 'react'
import { BASEURL } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addConnection } from '../utils/connectionSlice';

const Connections = () => {
    const dispatch = useDispatch();
    const connections  = useSelector((store) => store.connection);
    const fetchConnections = async() => {
        try{
        const res = await axios.get(BASEURL + "/user/connections",{withCredentials: true});
        dispatch(addConnection(res.data.data))
        }catch(err){
            console.error(err);
        }
    }

    useEffect(()=>{
        fetchConnections()
    },[])

    if(!connections) return 
    if(connections.length === 0) return <h1 className='font-bold text-2xl'>No Connections found.</h1>
  return (
    <div className=' text-center my-10'>
        <h1 className='font-bold text-white text-3xl'>Connections</h1>
        {connections?.map((connection) => {
            const {_id,firstName,lastName,photoUrl,age,gender,about} = connection
            return(
           <div className='flex m-4 p-4 bg-base-300 rounded-lg w-1/2 mx-auto' key={_id}>
           <div>            
           <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" className="w-20 h-20 rounded-full"  alt="user_image" /></div>
           <div className='text-left mx-4'>
           <p className="font-bold text-xl">{firstName + " " + lastName}</p>
           </div>
           </div>  
        )})}
    </div>
  )
}

export default Connections