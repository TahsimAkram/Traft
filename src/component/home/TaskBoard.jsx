import React from 'react'
import './HomePage.css'
import Task from './Task'
const TaskBoard = () => {
  return (
    <div>
      <div className='gridContainer'>
        <div className='item'>
          <div>To do</div>
          <ul>
            <li><Task/></li>
          </ul>
        </div>
        <div className='item'>
          <div>To do</div>
          <ul>
            <li><Task/></li>
          </ul>
        </div>
        <div className='item'>
          <div>To do</div>
          <ul>
            <li><Task/></li>
          </ul>
        </div>
        <div className='item'>
          <div>To do</div>
          <ul>
            <li><Task/></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TaskBoard