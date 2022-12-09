import React from 'react'
import TaskItem from './TaskItem'
import { useSelector } from 'react-redux';
import {Modal, Button} from 'react-bootstrap';

function AppContent() {
  const taskList = useSelector((state) => state.task.taskList);

  const sortedTaskList = [...taskList];

  const handleDelete = () => {
    console.log('deleting');
  };

  const handleUpdate = () => {
    console.log('editing');
  };

  return (
    <div className="mt-5 d-flex justify-content-center">
     {sortedTaskList && sortedTaskList.length >0
    ? sortedTaskList.map((task,i) => <TaskItem key={i}  task={task}  /> )
    : 'no task found'}
  
  <Button variant="secondary" onClick={handleUpdate} tabIndex ={0}>
            Edit
    </Button>
    <Button variant="secondary" onClick={handleDelete} tabIndex ={0}>
            Delete
    </Button> 
    
    </div>
  )
}

export default AppContent