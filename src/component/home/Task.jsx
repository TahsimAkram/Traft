import { Button } from '@mui/base'
import { Avatar, Card, CardActions, CardContent, Divider, IconButton, Typography } from '@mui/material'
import React from 'react'
import CrisisAlertRoundedIcon from '@mui/icons-material/CrisisAlertRounded';
import avatarlogo from "../../images/avatar.png"
import DescriptionIcon from '@mui/icons-material/Description';
import TaskIcon from '@mui/icons-material/Task';
import ScheduleIcon from '@mui/icons-material/Schedule';

const Task = ({taskDetails}) => {
    return (
        <Card sx={{ maxWidth: 345,borderRadius:'14px',marginBottom:'8px' }}>
            <CardContent sx={{
                padding: '16px 16px 0px 16px'
            }}>
                <div>
                    <div className='taskHead'>
                        <div className='taskHeading'>
                            <h4>{taskDetails.heading}</h4>
                            <p>DeadLine : {taskDetails.endDate}</p>
                        </div>
                        <div className='priority' style={{ backgroundColor: taskDetails.priorityIndicator }}><CrisisAlertRoundedIcon sx={{
                            fontSize: '1em'
                        }} /><span>{taskDetails.priority}</span></div>
                    </div>
                    <div className="taskDesc">
                        <p>{taskDetails.description}</p>
                    </div>
                    <Divider />
                </div>
            </CardContent>
            <CardActions sx={{
                justifyContent:'space-between'
            }}>
                <IconButton sx={{ p: 0 }}>
                    <Avatar sx={{
                        width: '20px',
                        height: '20px',
                        marginLeft: '10px'
                    }} alt="user" src={avatarlogo} />
                </IconButton>
                <div className='taskTimeDetails'>
                        <ScheduleIcon sx={{
                            width: '0.8em',
                            height: '0.8em'}} color='primary'/>
                        <p>{taskDetails.time}</p>
                </div>
                <div>
                    <IconButton sx={{
                        padding:'4px'
                    }}>
                        <DescriptionIcon sx={{ color: 'red' }}/>
                    </IconButton>
                    <IconButton  sx={{
                        padding:'4px'
                    }}>
                        <TaskIcon color="primary" />
                    </IconButton>
                </div>
            </CardActions>
        </Card>
    )
}

export default Task