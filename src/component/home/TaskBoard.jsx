import React, {  useState } from 'react'
import { Divider } from '@mui/material'
import './HomePage.css'
import Task from './Task'
import AddIcon from '@mui/icons-material/Add';
import { useMutation, useQuery } from '@tanstack/react-query';
import { addTask, fetchTask } from '../util/APICalls';
import { ShimmerSimpleGallery } from 'react-shimmer-effects';
import TaskModal from './TaskModal';



const TaskBoard = ({logout}) => {
  const [open, setOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const [operationType, setOperationType] = useState("insert");
  const [updateOperation, setUpdateOperation] = useState(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {data: tasks, isLoading,refetch,isError} = useQuery({
    queryKey:['tasks'],
    queryFn: fetchTask, 
    retry: false, 
  })
  

  const updateBoard = ()=>{
    refetch();
    handleClose();
  }

  const mutateTask = useMutation({mutationFn:addTask,onSuccess:()=>updateBoard()})
  const openTaskPopup = () => {
    handleOpen();
  }

  const insertTask = ()=>{
    setOperationType("insert");
    openTaskPopup();
  }

  const submitTaskDetails = (heading,description,priority,endDate,startDate) => {
   console.log(endDate);
   mutateTask.mutate({heading,description,priority,endDate,startDate});
  }

  isError && logout();
  return (
    isLoading ? <div className='skeletonContainer'>
      <ShimmerSimpleGallery card imageHeight={250}  caption />
      </div>  
    : <div className='boardContainer'>
      <div className='operationBar'>
        <div className='operationHeader'>
          <p>Project Tasks</p>
          <Divider orientation="vertical" variant="middle" flexItem />
        </div>
        <div className='operations'>
          <button onClick={() => { insertTask() }}><span className='createTaskDesc'><AddIcon sx={{ 'color': 'white' }} />New Task</span></button>
        </div>
      </div>
      <div className='gridContainer'>
        <div className='item'>
          <div className='itemHeading'>To do</div>
          <ul className='taskListcontainer'>
            {tasks && tasks.ToDo?.map((task, index) => <li key={index}><Task key={task.id} handleClose={handleClose} setUpdateOperation={setUpdateOperation} setOperationType={setOperationType} handleOpen={handleOpen} refresh={refetch} taskDetails={task} setCurrentTask={setCurrentTask}/></li>)}
          </ul>
        </div>
        <div className='item'>
          <div className='itemHeading'>In progress</div>
          <ul className='taskListcontainer'>
            {tasks && tasks.InProgress?.map((task, index) => <li key={index}><Task taskDetails={task} handleClose={handleClose} setUpdateOperation={setUpdateOperation} setOperationType={setOperationType} handleOpen={handleOpen} key={task.id} refresh={refetch} setCurrentTask={setCurrentTask}/></li>)}
          </ul>
        </div>
        <div className='item'>
          <div className='itemHeading'>In review</div>
          <ul className='taskListcontainer'>
            {tasks && tasks?.InReview?.map((task, index) => <li key={index}><Task taskDetails={task} handleClose={handleClose} setUpdateOperation={setUpdateOperation} setOperationType={setOperationType} handleOpen={handleOpen} key={task.id} refresh={refetch} setCurrentTask={setCurrentTask}/></li>)}
          </ul>
        </div>
        <div className='item'>
          <div className='itemHeading'>Done</div>
          <ul className='taskListcontainer'>
            {tasks && tasks.Done?.map((task, index) => <li key={index}><Task key={task.id} handleClose={handleClose} setUpdateOperation={setUpdateOperation} setOperationType={setOperationType} handleOpen={handleOpen} taskDetails={task} refresh={refetch} setCurrentTask={setCurrentTask}/></li>)}
          </ul>
        </div>
      </div>
      <TaskModal open={open} handleClose={handleClose} operationType={operationType} submitTaskDetails={submitTaskDetails} currentTask={currentTask} updateOperation={updateOperation}/>
    </div>
  )
}

export default TaskBoard