import React, { useEffect } from 'react'
import AdminRecordTrack from "../../Components/AdminRecordTrack/AdminRecordTrack"
import AdminNavbar from '../../Components/AdminNavbar/AdminNavbar'
import AdminSidebar from '../../Components/AdminSidebar/AdminSidebar'
import { Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'


function AdminRecordTrackPage() {
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
      <AdminRecordTrack/>
    </div >
    </Grid>
  )
}

export default AdminRecordTrackPage