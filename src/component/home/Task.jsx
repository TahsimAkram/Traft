import { Button } from '@mui/base'
import { Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'
import CrisisAlertRoundedIcon from '@mui/icons-material/CrisisAlertRounded';

const Task = () => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardContent>
                <div>
                    <div className='taskHead'>
                        <div className='taskHeading'>
                            <h4>Concept Idea</h4>
                            <p>Deadline : 14 Apr</p>
                        </div>
                        <div className='priority'><CrisisAlertRoundedIcon/><span>High</span></div>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                    <hr></hr>
                </div>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}

export default Task