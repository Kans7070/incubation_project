import React, {  useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Login from '../../Components/LogIn/LogIn'

function UserLoginPage() {
  const navigate = useNavigate()
  useEffect(() => {
    let user = localStorage.getItem('user')
    console.log(user)
    if (user){
      navigate('/')
    }else{
      console.log('Not logged in');
    }
  }, [])
  
  return (
   <Login/>
  )
}

export default UserLoginPage