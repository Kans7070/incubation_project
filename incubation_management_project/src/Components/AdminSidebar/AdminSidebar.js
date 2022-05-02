import React from 'react'
import { Box } from '@mui/material'
import './AdminSidebar.css'
import ArticleIcon from '@mui/icons-material/Article';
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
import BookIcon from '@mui/icons-material/Book';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';




function AdminSidebar() {
  const navigate = useNavigate()


  return (
    <Box className='display' sx={{ boxShadow: 20, padding: 3, position: 'fixed', height: '100%' }}>
      <div className='side-content' onClick={e => {
        navigate('/admin/')
      }}>
        <ArticleIcon sx={{ marginRight: '5px' }} />

        <p style={{ width: "110px" }}>Application List</p>
      </div>
      <div className='side-content' onClick={e => {
        navigate('/admin/record_track')
      }}>
        <CalendarViewMonthIcon sx={{ marginRight: '5px' }} />
        <p>Record Track</p>
      </div>
      <div className='side-content' onClick={e => {
        navigate('/admin/booking_slot')
      }}>
        <BookIcon sx={{ marginRight: '5px' }} />
        <p>Booking Slot</p>
      </div>
      <div className='side-content' onClick={e => {
        navigate('/admin/login')
      }}>
        <LogoutIcon sx={{ marginRight: '5px' }} />
        <p>Logout</p>
      </div>
    </Box>
  )
}

export default AdminSidebar