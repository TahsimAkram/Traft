import { Skeleton } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import TaskBoard from './TaskBoard';
import Header from '../header/Header';

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
    <Header/>
    <TaskBoard logout={logOut}/>
  </div>

 )
}

export default HomePage