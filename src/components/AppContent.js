import React from 'react'
import TaskItem from './TaskItem'
import { useDispatch, useSelector } from 'react-redux';
import {Modal, Button, Form} from 'react-bootstrap';
import { deleteTask } from '../slices/taskSlice';
import { toast } from 'react-hot-toast';

function AppContent() {
  const taskList = useSelector((state) => state.task.taskList);
  const dispatch = useDispatch();
  const sortedTaskList = [...taskList];

  const handleDelete = () => {
    dispatch(deleteTask(taskList.id));
    toast.success("success delete");
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