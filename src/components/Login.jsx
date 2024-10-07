import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BASEURL } from "../utils/constants";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoginForm,setIsLoginForm] = useState(true);
  const dispatch = useDispatch();
 const navigate = useNavigate();
  const handleLogin = async() => {
    try{
   const res = await  axios.post(BASEURL+ "/login", {
      emailId,
      password
    },{withCredentials: true});
    console.log(res.data)
   dispatch(addUser(res.data));
   navigate("/")
  }catch(err){
    setError(err?.response?.data);
    console.error(err);
  }
  }

  const handleSignUp = async() =>{
    try{
    const res = await axios.post(BASEURL + "/signup", {firstName,lastName,emailId,password},{withCredentials: true});
    console.log(res.data)
    dispatch(addUser(res.data.data))
    navigate("/profile")
    }catch(err){
      setError(err?.response?.data);
      console.error(err);
    }
  }

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center">{isLoginForm ? "Login" : "Sign Up"}</h2>
          <div>
          {   !isLoginForm &&       <>  <label className="form-control w-full max-w-xs my-2">
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
            </label></>}
            <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text">Email ID</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}  
              />
              <div className="label"></div>
            </label>
            <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="label"></div>
            </label>
          </div>
          <p className="text-red-500">{error}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary m-2" onClick={isLoginForm? handleLogin:handleSignUp}>{isLoginForm?"Login":"Sign Up"}</button>
          </div>
          <p onClick={() => setIsLoginForm(!isLoginForm)} className="m-auto cursor-pointer py-2">{isLoginForm?"New User? Sign Up here":"Already have an account? Login here"}</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
