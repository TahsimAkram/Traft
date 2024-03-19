import React, { useEffect, useState } from 'react'
import { ProSidebarProvider } from 'react-pro-sidebar';
import { useNavigate } from 'react-router-dom';
import MenuSideBar from '../menuBar/MenuSideBar';

const HomePage = () => {

  const navigate = useNavigate();
  const checkIfLoggedIn = () => {
    const token = localStorage.getItem("token");
    return !!token;
  };
  const [isLoggedIn, setIsLoggedIn] = useState(checkIfLoggedIn());

  const logOut = ()=>{
    localStorage.removeItem("token");
    navigate("/");
  }
 
  useEffect(()=>{
    if(!isLoggedIn){
      navigate("/");
    }
  })

  return (
    isLoggedIn && (<MenuSideBar/>)
  )
}

export default HomePage