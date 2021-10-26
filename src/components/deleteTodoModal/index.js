import { Form, Modal } from 'react-bootstrap'
import React, { useState } from 'react'
import Button from "react-bootstrap/Button";
import { deleteTodo } from '../../helpers/apiHelper';
import { useDispatch } from 'react-redux';
import { removeTodo } from '../../state/actions/todo';


const Index = ({ id, title }) => {
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true);
  const dispatch = useDispatch()
  const handleClose = () => setShow(false);

  const handleSubmit = () => {
    deleteTodo(id).then(res => {
      
    console.log(res)
      dispatch({ type: removeTodo, payload: res })
      setShow(false);
    }).catch(e => {
      console.log(e)
    })
  }


  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Delete
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton >
          <Modal.Title>Do you want to delete todo {title} ?</Modal.Title>
        </Modal.Header>
        <Modal.Footer> 
          <Button variant="danger" onClick={handleSubmit}>
            Yes
          </Button>

          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          </Modal.Footer>

      </Modal>
    </>
  );
}


export default Index
