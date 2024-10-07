import React from 'react'
import { useDispatch } from 'react-redux';
import { removeUserFromFeed } from '../utils/feedSlice';

const UserCard = ({user}) => {
    const {_id,firstName, lastName, photoUrl,age,gender} = user;
    const dispatch = useDispatch();
    const handleSendRequest = async(status,userId) =>{
        try{
        const res = await axios.post(BASEURL + "/request/send" + status + "/" + userId,{},{withCredentials: true});
        dispatch(removeUserFromFeed(userId))
        }catch(err){
            console.error(err);
        }
    }
    if(!user) return
  return (
    <div className="card bg-base-300 w-96 shadow-xl">
  <figure>
    <img
      src={photoUrl}
      alt="user_image" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName + " " + lastName}</h2>
    {age && gender &&<p>{age + ", " + gender}</p>}
    <p>{user?.about}</p>
    <div className="card-actions justify-center my-4">
    <button className="btn btn-primary" onClick={() => handleSendRequest("ignored", _id)}>Ignore</button>
      <button className="btn btn-secondary" onClick={() => handleSendRequest("interested", _id)}>Interested</button>
    </div>
  </div>
</div>
  )
}

export default UserCard