import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Register from '../../Components/Register/Register'

function UserRegisterPage() {
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
    <Register/>
  )
}

export default UserRegisterPage