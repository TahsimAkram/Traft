import React, { useRef } from 'react'
import { Button, FormControl, FormControlLabel, FormGroup, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import logo from '../../images/logo-2.png'
import PlatformLogin from './PlatformLogin';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterPage = () => {
    const navigate = useNavigate();

    const username = useRef();
    const email = useRef();
    const password = useRef();
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const signUp = async ({ username, password, email }) => {
        const response = await axios.post("http://localhost:8080/signup", {
            username: username,
            password: password,
            email: email
        });
        console.log(response.data);
        return response.data;
    }

      
    const registerUser = (event) => {
        event.preventDefault();
        console.log("username: " + username.current.value);
        console.log("password: " + password.current.value);
        signUp(username.current.value,password.current.value,email.current.value);
        navigate("/login");
    }


    return (
        <div className='container'>
            <div className='registerLeftPan'>
                <div className='registerleftPanBg' />
            </div>
            <div className='rightPan'>
                <div className='registerRightPanContainer'>
                    <div className='banner'>
                        <img src={logo} alt="logo" />
                    </div>
                    <div className='bannerTitle'>
                        <p>Adventure starts here 🚀</p>
                    </div>
                    <div className='registerBannerDesc'>
                        <p>Make your app management easy and fun!</p>
                    </div>
                    <form onSubmit={(event)=>registerUser(event)}>
                        <TextField inputRef={username} sx={{
                            width: '100%',
                            marginBottom: '1em',
                            '& .MuiFormLabel-root': {
                                color: 'rgb(177, 177, 176)',
                                '&.Mui-focused': {
                                    color: '#7c7cff', // Color when focused
                                }
                            },
                            '& .MuiOutlinedInput-root': {
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#7c7cff', // Border color when focused
                                    borderWidth: '2px'
                                },
                            },
                            '& .MuiInputBase-root': {
                                borderRadius: '9px'
                            }
                        }} id="outlined-basic" label="Username" variant="outlined" required
                        />
                        <TextField inputRef={email} sx={{
                            width: '100%',
                            marginBottom: '1em',
                            '& .MuiFormLabel-root': {
                                color: 'rgb(177, 177, 176)',
                                '&.Mui-focused': {
                                    color: '#7c7cff', // Color when focused
                                }
                            },
                            '& .MuiOutlinedInput-root': {
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#7c7cff', // Border color when focused
                                    borderWidth: '2px'
                                },
                            },
                            '& .MuiInputBase-root': {
                                borderRadius: '9px'
                            }
                        }} id="outlined-basic" label="Email" variant="outlined" type="email" required
                        />
                        <FormControl sx={{ width: '100%' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password"
                                sx={{
                                    '&.MuiInputLabel-root': {
                                        color: 'rgb(177, 177, 176)',
                                        '&.Mui-focused': {
                                            color: '#6c6cfc', // Color when focused
                                        }
                                    }
                                }}
                            >Password</InputLabel>
                            <OutlinedInput
                                required
                                inputRef={password}
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                sx={{
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#6c6cfc',
                                        borderWidth: '2px',
                                    },
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderRadius: '9px'
                                    }
                                }}
                                label="Password"
                            />
                        </FormControl>
                        <p className='policy'>By clicking Signup, you agree to the Traft<span><a href='#'> User Agreement</a>, <a href="#">Privacy Policy</a>, and <a href="#">Cookie Policy</a></span>. </p>
                        <Button type="submit" variant="contained" sx={{
                            width: '100%', fontSize: '1em', backgroundColor: '#7c7cff', borderRadius: "8px",
                            '&:hover': {
                                backgroundColor: '#6c6cfc'
                            }
                        }} >SIGN UP</Button>
                    </form>
                    <div>
                        <p className='createAccountLink'>Already have an account? <Link to="/login">Sign In</Link></p>
                    </div>
                    <PlatformLogin />
                </div>
            </div>
        </div>
    )
}

export default RegisterPage