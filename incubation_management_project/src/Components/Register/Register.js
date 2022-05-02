import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import Avatar from '@mui/material/Avatar';
import './Register.css'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'


function Register() {
    const navigate = useNavigate()
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [errors,setErrors] = useState()
    const user= {
        credentials:{
            username: username,
            email: email,
            password: password
        }
    }
    const handleSubmit = e =>{
        if(username&&email&&password&&confirmPassword){
            if(password===confirmPassword){
            fetch('http://127.0.0.1:8000/api/users/',{
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user.credentials),
            }).then(data=>{
                console.log(data)
                var status = data.status
                console.log(status);
                if (status==400){
                    setErrors('User already exist')
                }else{
                    navigate('/login')
                }
                
            }).catch(error=>{
                console.log(error)
            })
        }
    }
    }
    return (
        <div>
            <Container maxWidth="sm" sx={{ pt: 5 }}>
                <Grid container >
                    <Grid item xs={1} md={1} />
                    <Grid item xs={10} md={10}>
                        <Box className='holder' sx={{ boxShadow: 4, padding: 5 }}>
                            <div className='logo-holder'>
                                <Avatar sx={{ bgcolor: 'black', mr: 1 }}>
                                    <PersonAddAltIcon fontSize='large' />
                                </Avatar>
                                <h2 >Sign In</h2>

                            </div>
                            <Grid container spacing={3} sx={{ pt: 4 }}>
                                <Grid item xs={12} sm={6}  >
                                    <TextField id="username-basic" label="Username" variant="standard" value={username} onChange={e=>setUsername(e.target.value)} />
                                </Grid>
                                <Grid item xs={12} sm={6} >
                                    <TextField id="email-basic" label="Email" variant="standard" value={email} onChange={e=>setEmail(e.target.value)}/>
                                </Grid>
                                <Grid item xs={12} sm={6} >
                                    <TextField id="password-basic" label="Password" variant="standard" type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
                                </Grid>
                                <Grid item xs={12} sm={6} >
                                    <TextField id="confirm_password-basic" label="Confirm-Password" variant="standard" type="password" value={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)}/>
                                </Grid>
                                {errors&&<Grid item xs={12} sm={12} >
                                    <p className="error">{errors}</p>
                                </Grid>}
                                <Grid item xs={12} sm={12} className='redirect'>
                                    <p onClick={() => {
                                        navigate('/login')
                                    }}>Already have an account?<span> ..login</span></p>
                                </Grid>
                            </Grid>
                            <Button onClick={handleSubmit} variant="text" sx={{ color: 'black', mt: 4 }}>Register</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={1} md={1} />
                </Grid>
            </Container>
        </div>
    )
}

export default Register