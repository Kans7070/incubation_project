import React, { useEffect } from 'react'
import ApplicantsList from "../../Components/ApplicantsList/ApplicantsList"
import AdminNavbar from '../../Components/AdminNavbar/AdminNavbar'
import AdminSidebar from '../../Components/AdminSidebar/AdminSidebar'
import './AdminHomePage.css'
import { Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function AdminHomePage() {
  const navigate = useNavigate()
  useEffect(() => {
    let user = localStorage.getItem('admin')
    if (user){
      console.log(user);
    }else{
      navigate('/admin/login')

    }
  }, [])
  return (
    <Grid xs={12}>
    <AdminNavbar/>
    <div className='content-holder'>
      
        <AdminSidebar/>
      
      
        <ApplicantsList/>
      
    </div >
    </Grid>
  )
}

export default AdminHomePage