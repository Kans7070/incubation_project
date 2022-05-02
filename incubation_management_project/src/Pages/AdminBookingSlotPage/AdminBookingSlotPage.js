import React, { useEffect } from 'react'
import AdminNavbar from '../../Components/AdminNavbar/AdminNavbar'
import AdminSidebar from '../../Components/AdminSidebar/AdminSidebar'
import { Grid } from '@mui/material'
import AdminBookingSlot from '../../Components/AdminBookingSlot/AdminBookingSlot'
import { useNavigate } from 'react-router-dom'


function AdminBookingSlotPage() {
  const navigate = useNavigate()
  useEffect(() => {
    let user = localStorage.getItem('admun')
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
      <AdminBookingSlot/>
    </div >
    </Grid>
  )
}

export default AdminBookingSlotPage