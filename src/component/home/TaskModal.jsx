import React, { useEffect, useRef, useState } from 'react'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Divider } from '@mui/material';
import dayjs from 'dayjs';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '40%',
    bgcolor: 'background.paper',
    border: '2px solid #7c7cff',
    boxShadow: 24,
    p: 4,
    borderRadius: '1em'
  };

const TaskModal = ({open,handleClose,submitTaskDetails,operationType,currentTask,updateOperation}) => {
  const priorities = ['High', 'Medium', 'Low'];
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDesc, setTaskDesc] = useState('');
  const [selectedPriority, setSelectedPriority] = useState('');
  const [startDate, setStartDate] = useState(dayjs().startOf('day'));
  const [endDate, setEndDate] = useState(dayjs().endOf('day'));

  const resetDetails = ()=>{
      setTaskTitle('');
      setTaskDesc('');
      setSelectedPriority('');
      setStartDate(dayjs().startOf('day'));
      setEndDate(dayjs().endOf('day')); 
  }

  useEffect(()=>{
    if (operationType === 'update' && currentTask) {
      setTaskTitle(currentTask.heading || '');
      setTaskDesc(currentTask.description || '');
      setStartDate(dayjs(currentTask.startDate).startOf('day') || null);
      setEndDate(dayjs(currentTask.endDate).endOf('day') || null);
      setSelectedPriority(currentTask.priority || '');
    } else {
      resetDetails();
    }
  },[operationType,currentTask])

  const performOperation = ()=>{
    if(operationType === 'insert'){
        submitTaskDetails(taskTitle,taskDesc,selectedPriority,endDate,startDate);
    }else{
      updateOperation(currentTask.id,taskTitle,taskDesc,selectedPriority,endDate,startDate,currentTask.status,currentTask.priorityIndicator,currentTask.time);
    }
    resetDetails();
  }

  return (
    <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
            <h1 className="taskBoxHeader">{operationType === 'update' ? 'Update Task' : 'Add Task'}</h1>
              <Divider />
              <TextField value={taskTitle} onChange={(e)=>setTaskTitle(e.target.value)} id="outlined-basic" label="Task Name" variant="outlined"
                sx={{
                  'width': '100%',
                  'marginTop': '1em',
                  '& .MuiFormLabel-root': {
                    color: 'rgb(177, 177, 176)',
                    width: '100%',
                    '&.Mui-focused': {
                      color: '#7c7cff', // Color when focused
                    }
                  },
                  '& .MuiOutlinedInput-root': {
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#7c7cff', // Border color when focused
                      borderWidth: '2px'
                    },
                  }
                }}
              />
              <TextField value={taskDesc}
              onChange={(e) => setTaskDesc(e.target.value)} 
              id="outlined-basic" label="Task Description" variant="outlined"
                sx={{
                  'width': '100%',
                  'marginTop': '1em',
                  'borderBottom': 'none',
                  '& .MuiFormLabel-root': {
                    color: 'rgb(177, 177, 176)',
                    width: '100%',
                    '&.Mui-focused': {
                      color: '#7c7cff', 
                    }
                  },
                  '& .MuiOutlinedInput-root': {
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#7c7cff', 
                      borderWidth: '2px'
                    },
                  }
                }} />
              <div className='priorityContainer'>
                <FormControl sx={{
                  'width': '48%',
                  'marginTop': '1em',
                  
                  }}>
                  <InputLabel id="priority-label" sx={{
                    '&.MuiFormLabel-root': {
                      color: '#b3a6a6'
                    },
                    '&.Mui-focused': {
                      color: '#7c7cff',
                    },
                  }}>Priority</InputLabel>
                  <Select value={selectedPriority}
                    onChange={(event) => {setSelectedPriority(event.target.value)}}
                    sx={{
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#7c7cff'
                      },

                    }}
                    labelId="Priority-label"
                    label="Priority"
                  >

                    {priorities.map((priority, index) => {
                      return <MenuItem key={index} sx={{
                        '&.MuiButtonBase-root': {
                          '&.MuiMenuItem-root:hover': {
                            backgroundColor: 'rgba(124, 124, 255, 0.2)',
                          },
                          '&.MuiMenuItem-root.Mui-selected:hover': {
                            backgroundColor: 'rgba(124, 124, 255, 0.5)',
                          },
                          '&.MuiMenuItem-root.Mui-selected': {
                            backgroundColor: 'rgba(124, 124, 255, 1)',
                          }
                        }
                      }} value={priority}>{priority}</MenuItem>
                    })}
                  </Select>
                </FormControl>
                <TextField disabled variant="filled" id="outlined-basic" label="Project" defaultValue="Working on It"
                  InputProps={{
                    readOnly: true,
                  }}
                  sx={{
                    width: '48%',
                    marginTop: '1em',
                    '& .MuiFormLabel-root': {
                      color: '#434343',
                      width: '100%'
                    },
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: '#cdcdd1'
                    },
                    '& .MuiInputBase-root': {
                      '&.MuiFilledInput-root.Mui-disabled::before': {
                        borderBottomStyle: 'none'
                      }
                    }
                  }}
                />
              </div>
              <div className="dateContainer">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker value={startDate} onChange={(date) => setStartDate(date)} label="StartDate" name="startDate" sx={{width:'48%'}}/>
                <DatePicker value={endDate} onChange={(date) => setEndDate(date)} label="EndDate" name="endDate" sx={{width:'48%'}}/>
                </LocalizationProvider>
              </div>
              <div className='buttonContainer'>
                <Button onClick={()=>performOperation()} sx={{
                  '&.MuiButtonBase-root': {
                    '&.MuiButton-root:hover': {
                      backgroundColor: '#6969f7'
                    },
                    '&.MuiButton-root': {
                      backgroundColor: 'rgb(124, 124, 255)'
                    }
                  }
                }} variant="contained">Submit</Button>
                <Button variant="outlined" onClick={handleClose}>Cancel</Button>
              </div>
            </Box>
          </Fade>
        </Modal>
      </div>
  )
}

export default TaskModal