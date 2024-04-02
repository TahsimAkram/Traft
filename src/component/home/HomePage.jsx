import { Skeleton } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import TaskBoard from './TaskBoard';

const HomePage = () => {

  const navigate = useNavigate();
  const checkIfLoggedIn = () => {
    const token = localStorage.getItem("token");
    return !!token;
  };
  const [isLoggedIn, setIsLoggedIn] = useState(checkIfLoggedIn());

  const logOut = ()=>{
    localStorage.removeItem("token");
    navigate("/login");
  }
 
  useEffect(()=>{
    if(!isLoggedIn){
      navigate("/login");
    }
  })

  
 return(
  !isLoggedIn ? <Skeleton/> : 
  <div>
    <h1>Home Page</h1>
    <button onClick={logOut}>Logout</button>
    <TaskBoard/>
  </div>

 )
}

export default HomePage