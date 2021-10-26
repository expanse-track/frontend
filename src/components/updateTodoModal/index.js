import { Form, Modal } from 'react-bootstrap'
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { updateTodo } from '../../helpers/apiHelper';
import { useDispatch } from 'react-redux';
import { changeTodo  } from '../../state/actions/todo';


const Index = ({ id, title, description }) => {

  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [formData, setFormData] = useState({
    title,
    description
  })

  const handleChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value
    })
  }


  const dispatch = useDispatch()
  
  const handleSubmit = () => {
    console.log(id, formData.title, formData.description)
    updateTodo(id, formData.title, formData.description).then(res => {

      console.log(res)
      dispatch({ type: changeTodo, payload: res })
      setShow(false);
    }).catch(e => {
      console.log(e)
    })
  }


  return (
    <>
      <Button variant='success' onClick={handleShow}>
        Update
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton >
          <Modal.Title>Update todo</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
          <Form>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>Title</Form.Label>
              <Form.Control type='text' value={formData.title} onChange={(e) => handleChange('title', e.target.value)} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
              <Form.Label>Description</Form.Label>
              <Form.Control as='textarea' rows={3} value={formData.description} onChange={(e) => handleChange('description', e.target.value)} />
            </Form.Group>
          </Form>


        </Modal.Body>
        <Modal.Footer>
          <Button variant='primary' onClick={handleSubmit}>
            Update
          </Button>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}




export default Index
