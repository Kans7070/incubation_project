import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import LockIcon from '@mui/icons-material/Lock';
import Avatar from '@mui/material/Avatar'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './LogIn.css'


function Login() {
    const navigate = useNavigate()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [errors, setErrors] = useState('')
    const user = {
        credentials: { username: username, password: password }
    }
    const handleSubmit = (e) => {
        console.log(user.credentials)
        if (username && password) {
            if (username.length > 3 && password.length > 3) {
                fetch('http://127.0.0.1:8000/auth/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user.credentials)
                }).then(data =>{
                    console.log(data);
                    return data.json()
                }
                ).then(data => {
                    console.log(data.token)
                    if (data.token) {
                        localStorage.setItem("user_token", data.token);
                        localStorage.setItem("user", username);
                        navigate('/')
                    } else {
                        navigate('/login')
                        setErrors("user not found")
                    }
                }).catch(error => {
                    console.error(error)
                })
                
            }
            else {
                if (username.length > 3) {
                    setErrors("Password Must Have 3 Letters")
                }
                else {
                    setErrors("Username Must Have 3 Letters")
                }
            }
        }
        else {
            setErrors("All Fields Are Required")
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
                                <Avatar sx={{ bgcolor: 'black' }}>
                                    <LockIcon fontSize='large' />
                                </Avatar>
                                <h2>Login</h2>

                            </div>
                            <form >
                                <Grid container spacing={3} sx={{ pt: 2 }}>

                                    <Grid item xs={12} sm={6} >
                                        <TextField id="email-basic" label="username" variant="standard" value={username} onChange={(e) => setUsername(e.target.value)} />
                                    </Grid>
                                    <Grid item xs={12} sm={6} >
                                        <TextField id="password-basic" label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} variant="standard" />
                                    </Grid>
                                    {
                                        errors && <Grid item xs={12} sm={12} >
                                            <p className="error">{errors}</p>
                                        </Grid>
                                    }

                                    <Grid item xs={12} sm={12} className='redirect'>
                                        <p onClick={() => {
                                            navigate('/register')
                                        }}>Don't have an account?<span> ..signup</span></p>
                                    </Grid>

                                </Grid>
                                <Button onClick={handleSubmit} variant="text" sx={{ color: 'black', mt: 2 }}>Login</Button>
                            </form>
                        </Box>
                    </Grid>
                    <Grid item xs={1} md={1} />
                </Grid>
            </Container>
        </div>
    )
}

export default Login