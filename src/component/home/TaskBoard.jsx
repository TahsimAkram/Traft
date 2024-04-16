import React, { useState } from 'react'
import { Divider} from '@mui/material'
import './HomePage.css'
import Task from './Task'
import AddIcon from '@mui/icons-material/Add';

const TaskBoard = () => {
  const todoTasks = [
    {
    'Heading':'Concept Idea',
    'Deadline':"14 Apr",
    'PriorityDetails':{
        'priority' : 'High',
        'indicator' : 'red'
    },
    'Desc':'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
    'Duration' : '10:00 AM'
    },
    {
      'Heading':'Concept Idea',
      'Deadline':"14 Apr",
      'PriorityDetails':{
          'priority' : 'Medium',
          'indicator' : '#e89903'
      },
      'Desc':'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
      'Duration' : '10:00 AM'
    }
  ]

  const inProgressTasks = [
    {
      'Heading':'Concept Idea',
      'Deadline':"14 Apr",
      'PriorityDetails':{
          'priority' : 'Low',
          'indicator' : '#00b000'
      },
      'Desc':'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
      'Duration' : '10:00 AM'
    },
    {
    'Heading':'Concept Idea',
    'Deadline':"14 Apr",
    'PriorityDetails':{
        'priority' : 'High',
        'indicator' : 'red'
    },
    'Desc':'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
    'Duration' : '10:00 AM'
    }
    
  ]

  const inReviewTasks = [
    {
      'Heading':'Concept Idea',
      'Deadline':"14 Apr",
      'PriorityDetails':{
          'priority' : 'High',
          'indicator' : 'red'
      },
      'Desc':'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
      'Duration' : '10:00 AM'
    },
    {
    'Heading':'Concept Idea',
    'Deadline':"14 Apr",
    'PriorityDetails':{
        'priority' : 'Medium',
        'indicator' : '#e89903'
    },
    'Desc':'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
    'Duration' : '10:00 AM'
    }
    
  ]
  const doneTasks = [
    {
      'Heading':'Concept Idea',
      'Deadline':"14 Apr",
      'PriorityDetails':{
          'priority' : 'High',
          'indicator' : 'red'
      },
      'Desc':'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
      'Duration' : '10:00 AM'
    },
    {
    'Heading':'Concept Idea',
    'Deadline':"14 Apr",
    'PriorityDetails':{
        'priority' : 'Low',
        'indicator' : '#00b000'
    },
    'Desc':'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
    'Duration' : '10:00 AM'
    }
    
  ]


  const addTask = (event)=>{
  console.log(event);
}
  return (
    <div className='boardContainer'>
      <div className='operationBar'>
        <div className='operationHeader'>
          <p>Project Tasks</p>
          <Divider orientation="vertical" variant="middle" flexItem />
        </div>      
        <div className='operations'>
          <button onClick={(event)=>{addTask(event)}}><span className='createTaskDesc'><AddIcon sx={{'color' : 'white'}}/>New Task</span></button>
        </div>
      </div>
      <div className='gridContainer'>
        <div className='item'>
          <div className='itemHeading'>To do</div>
          <ul className='taskListcontainer'>
            {todoTasks.map(task=><li><Task taskDetails ={task}/></li>)}
          </ul>
        </div>
        <div className='item'>
          <div className='itemHeading'>In progress</div>
          <ul className='taskListcontainer'>
            {inProgressTasks.map(task=><li><Task taskDetails ={task}/></li>)}
          </ul>
        </div>
        <div className='item'>
          <div className='itemHeading'>In review</div>
          <ul className='taskListcontainer'>
            {inReviewTasks.map(task=><li><Task taskDetails ={task}/></li>)}
          </ul>
        </div>
        <div className='item'>
          <div className='itemHeading'>Done</div>
          <ul className='taskListcontainer'>
            {doneTasks.map(task=><li><Task taskDetails ={task}/></li>)}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TaskBoard