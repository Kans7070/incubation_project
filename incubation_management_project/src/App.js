import React from 'react';
import './App.css';
import RegisterPage from './Pages/UserRegisterPage/UserRegisterPage'
import UserLoginPage from './Pages/UserLoginPage/UserLoginPage'
import UserHomePage from './Pages/UserHomePage/UserHomePage'
import AdminLoginPage from './Pages/AdminLoginPage/AdminLoginPage'
import AdminHomePage from './Pages/AdminHomePage/AdminHomePage'
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'
import AdminRecordTrackPage from './Pages/AdminRecordTrackPage/AdminRecordTrackPage';
import AdminBookingSlotPage from './Pages/AdminBookingSlotPage/AdminBookingSlotPage';




function App() {
  
  return (

    
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={  <UserHomePage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<UserLoginPage />} />
          <Route path='/admin/login' element={<AdminLoginPage />} />
          <Route path='/admin/' element={<AdminHomePage />} />
          <Route path='/admin/record_track' element={<AdminRecordTrackPage />}></Route>
          <Route path='/admin/booking_slot' element={<AdminBookingSlotPage />}></Route>

        </Routes>
      </Router>


    </div>
  );
}

export default App;
