import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Home from '../../Components/Home/Home'

function UserHomePage() {
  const navigate = useNavigate()
  useEffect(() => {
    let user = localStorage.getItem('user')
    if (user){
      console.log(user);
    }else{
      navigate('/login')
    }
  }, [])
  
    return (
    <Home/>
  )
}

export default UserHomePage


