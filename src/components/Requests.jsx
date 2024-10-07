import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addRequests, removeRequest } from '../utils/requestSlice';
import axios from 'axios';
import { BASEURL } from '../utils/constants';

const Requests = () => {
    const dispatch = useDispatch();
    const requests = useSelector((store) => store.requests);
    const fetchRequests =async() =>{
        try{
        let res = await axios.get(BASEURL + "/user/requests/received",{withCredentials: true});
        console.log(res.data)
        dispatch(addRequests(res.data))
        }catch(err){
            console.error(err);
        }
    }

    const reviewRequest = async(status,_id) =>{
        try{
        const res = await axios.post(BASEURL + "/request/review/" + status + "/" + _id,{},{withCredentials: true});
        dispatch(removeRequest(_id))
        }catch(err){
            console.error(err);
        }
    }

    useEffect(()=>{
    fetchRequests()
    },[])

    if(!requests) return
    if(requests.length === 0) return <h1 className='font-bold text-2xl flex justify-center my-10'>No Requests found.</h1>
  return (
    <div className=' text-center my-10'>
    <h1 className='font-bold text-white text-3xl'>Requests</h1>
    {requests?.map((request) => {
        const {_id,firstName,lastName,photoUrl,age,gender,about} = request.fromUserId;
        return(
       <div key={_id} className='flex justify-between items-center m-4 p-4 bg-base-300 rounded-lg w-2/3 mx-auto'>
       <div>            
       <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" className="w-20 h-20 rounded-full"  alt="user_image" /></div>
       <div className='text-left mx-4'>
       <p className="font-bold text-xl">{firstName + " " + lastName}</p>
       <div>
       <button className="btn btn-primary mx-2" onClick={() => reviewRequest("rejected",request._id)}>Reject</button>
       <button className="btn btn-secondary mx-2" onClick={() => reviewRequest("accepted",request._id)}>Accept</button>
       </div>
       </div>
       </div>  
    )})}
</div>
  )
}

export default Requests