import { Divider, IconButton } from '@mui/material'
import React from 'react'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';

const PlatformLogin = () => {
    return (
        <div>
            <Divider sx={{
                color: 'rgb(80, 80, 78)',
                marginTop: '1.2em'
            }}>or</Divider>
            <div className='loginOptions'>
                <IconButton aria-label="delete" size="small">
                    <FacebookRoundedIcon sx={{
                        color: 'rgb(82, 95, 193)'
                    }} />
                </IconButton>
                <IconButton aria-label="delete" size="small">
                    <TwitterIcon sx={{
                        color: 'rgb(29, 161, 242)',
                        fontSize:'1.1em'
                    }} />
                </IconButton>
                <IconButton aria-label="delete" size="small">
                    <GitHubIcon sx={{
                        color: 'black',
                        fontSize:'1.1em'
                    }} />
                </IconButton>
                <IconButton aria-label="delete" size="small">
                    <GoogleIcon sx={{
                        color: 'rgb(225, 30, 30)',
                        fontSize:'1.1em'
                    }} />
                </IconButton>
            </div>
        </div>
    )
}

export default PlatformLogin