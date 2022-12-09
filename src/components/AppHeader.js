/*
import React from 'react'
import { Button } from 'react-bootstrap'
import InfoModal from './InfoModal'
import TaskModal from './TaskModal'

function AppHeader() {
  return (
    <div className="mt-5 d-flex justify-content-center">
        <Button variant="primary">Add Task</Button>
        
        
    </div>
  )
}

export default AppHeader
*/

import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button, Form} from 'react-bootstrap';
import { useDispatch,} from "react-redux";
import { addTask } from "../slices/taskSlice";
import { v4 as uuid } from 'uuid';
import toast from 'react-hot-toast';

export default function AppHeader() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('incomplete');
  const [data, setData] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');
  const dispatch = useDispatch();
  //console.log(taskList);
  const handleSubmit = (e) => {
    e.preventDefault();
    if(title)
    {
      dispatch(addTask({
        id: uuid(),
        title,
        status,
        description,
        status,
        priority,
        data: new Date().toLocaleString(),
      })
      );
      toast.success('Task added successfully');
      //setModalOpen(false);
    } else {
      toast.error("empty data!");
    }
    //console.log({title, status, data, description, priority});
  }

  return (
    <div>
      <Button className="mt-5 d-flex justify-content-center" onClick={handleShow}>
        Add Task
      </Button>

      <Modal className="mt-5 d-flex justify-content-center" show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={(e) => handleSubmit(e)}> 
        <Form.Group>
        <Form.Label htmlFor="title">
                Title
                <input
                  type="text"
                  id="title"
                  maxLength={100}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  
                />
         </Form.Label>
         </Form.Group>
         
         <Form.Group>
        <Form.Label htmlFor="data">
                Data
                <input
                  type="date"
                  min="2022-12-09"
                  id="data"
                  value={data}
                  onChange={(e) => setData(e.target.value)}
                  
                />
         </Form.Label>
         </Form.Group>

         <Form.Group>
        <Form.Label htmlFor="description">
                Description
                <textarea
                  id="description"
                  maxLength={100}
                  rows="4" cols="50"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  
                />
         </Form.Label>
         </Form.Group>

        <Form.Label htmlFor="type">
            Status
       <select
         id="type"
         value={status}
         onChange={(e) => setStatus(e.target.value)}

       >
         <option value="incomplete">Incomplete</option>
         <option value="complete">Completed</option>
       </select>
         </Form.Label>
        </Form>
        
        <Form>
         <Form.Label htmlFor="type">
                Priority
                <select
                  id="type"
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}

                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
            </Form.Label>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary" onClick={(e) => handleSubmit(e)}>
            Add Task
          </Button>
        </Modal.Footer>
    
      </Modal>
    </div>
  );
}