import React,{useEffect} from 'react'
import NavBar from './NavBar'
import { Outlet,useNavigate } from 'react-router-dom'
import Footer from './Footer'
import axios from 'axios'
import { useDispatch,useSelector } from 'react-redux'
import { BASEURL } from '../utils/constants'
import {addUser} from '../utils/userSlice';
const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) =>store.user);
 const fetchUser = async() => {
    try{
  const res = await axios.get(BASEURL+ "/profile/view",{withCredentials: true});
  dispatch(addUser(res.data));
}catch(err){
  navigate("/login")
  console.error(err);
}
}

useEffect(()=>{
  if(!userData){
  fetchUser()
  }
},[])
  return (
    <>
    <NavBar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Body