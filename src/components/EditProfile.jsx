import React, { useState } from 'react'
import UserCard from './UserCard';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { BASEURL } from '../utils/constants';

const EditProfile = ({user}) => {
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [age, setAge] = useState(user.age || "");
    const [gender, setGender] = useState("");
    const [about, setAbout] = useState(user.about);
    const [photoUrl, setPhotoUrl] = useState(user.photoUrl || "");
    const [error, setError] = useState("");
    const [showToast, setShowToast] = useState(false);
    const dispatch = useDispatch();

    const saveProfile = async() => {
        try{
        const res = await axios.patch(BASEURL + "/profile/edit", {
            firstName,
            lastName,
            age,
            gender,
            about,
            photoUrl
        },{
            withCredentials: true})
        dispatch(addUser(res.data?.data))
        setShowToast(true)
        setTimeout(() => {
            setShowToast(false)
        },3000)
        }catch(err){
            console.error(err);
        }
    }

  return (
    <>
    <div className='flex justify-center my-10'>
    <div className="flex justify-center mx-10">
    <div className="card bg-base-300 w-96 shadow-xl">
      <div className="card-body">
        <h2 className="card-title justify-center">Edit Profile</h2>
        <div>
          <label className="form-control w-full max-w-xs my-2">
            <div className="label">
              <span className="label-text">First Name</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}  
            />
            <div className="label"></div>
          </label>
          <label className="form-control w-full max-w-xs my-2">
            <div className="label">
              <span className="label-text">Last Name</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <div className="label"></div>
          </label>
          <label className="form-control w-full max-w-xs my-2">
            <div className="label">
              <span className="label-text">Age</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              value={age}
              onChange={(e) => setAge(e.target.value)}  
            />
            <div className="label"></div>
          </label>
          <label className="form-control w-full max-w-xs my-2">
            <div className="label">
              <span className="label-text">Photo URL</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}  
            />
            <div className="label"></div>
          </label>
          <label className="form-control w-full max-w-xs my-2">
            <div className="label">
              <span className="label-text">Gender</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              value={gender}
              onChange={(e) => setGender(e.target.value)}  
            />
            <div className="label"></div>
          </label>
          <label className="form-control w-full max-w-xs my-2">
            <div className="label">
              <span className="label-text">About</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              value={about}
              onChange={(e) => setAbout(e.target.value)}  
            />
            <div className="label"></div>
          </label>
        </div>
        <p className="text-red-500">{error}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary m-2" onClick={saveProfile}>Save Profile</button>
        </div>
      </div>
    </div>
  </div>
  <UserCard user={user}/>
  </div>
{ showToast && ( <div className="toast toast-center toast-top">
  <div className="alert alert-success">
    <span>Profile saved successfully.</span>
  </div>
</div>)}
  </>
  )
}

export default EditProfile