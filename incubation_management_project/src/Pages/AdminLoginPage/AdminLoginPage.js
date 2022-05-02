import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import AdminLogin from '../../Components/AdminLogin/AdminLogin'

function AdminLoginPage() {
  const navigate = useNavigate()
  useEffect(() => {
    let user = localStorage.getItem('admin')
    if (user){
      console.log(user);
      navigate('/admin')
    }else{
      navigate('/admin/login')
    }
  }, [])
  return (
    <AdminLogin/>
  )
}

export default AdminLoginPage