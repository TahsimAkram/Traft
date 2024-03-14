import React from 'react'
import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import logo from '../../images/logo-2.png'
import PlatformLogin from './PlatformLogin';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
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
                    <form>
                        <TextField sx={{
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
                            '& .MuiInputBase-root':{
                                borderRadius:'9px'
                            }
                        }} id="outlined-basic" label="Username" variant="outlined"
                        />
                        <TextField sx={{
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
                            '& .MuiInputBase-root':{
                                borderRadius:'9px'
                            }
                        }} id="outlined-basic" label="Email" variant="outlined"
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
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
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
                                    '& .MuiOutlinedInput-notchedOutline':{
                                        borderRadius:'9px'
                                    }
                                }}
                                label="Password"
                            />
                        </FormControl>
                        <div className='otherOperation'>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox
                                    sx={{
                                        '&.Mui-checked': {
                                            color: '#6c6cfc', // Change the color when checked
                                        },
                                        color: 'rgb(186, 184, 182)', // Default color
                                    }} />} label={
                                        <Typography className='policy'>
                                            I agree to &nbsp;<span><a href='#'>privacy policy & terms</a></span>
                                        </Typography>
                                    }
                                />
                            </FormGroup>
                        </div>
                        <Button variant="contained" sx={{
                            width: '100%', fontSize: '1em', backgroundColor: '#7c7cff', borderRadius: "8px",
                            '&:hover': {
                                backgroundColor: '#6c6cfc'
                            }
                        }}>SIGN IN</Button>
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