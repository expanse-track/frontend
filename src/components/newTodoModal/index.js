import { Form, Modal } from 'react-bootstrap'
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { createTodo } from '../../helpers/apiHelper';
import { useDispatch } from 'react-redux';
import { addTodo  } from '../../state/actions/todo';


const Index = () => {
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true);
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    title: '',
    description: ''
  })

  const handleChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value
    })
  }

  const handleClose = () => {
    setShow(false);
  }
 
  const handleSubmit = () => {
    createTodo(formData.title, formData.description).then(res => {
      dispatch({ type: addTodo, payload: res })
      setShow(false);
    }).catch(e => {
      console.log(e)
    })
  }


  return (
    <>
      <Button variant='primary' onClick={handleShow}>
        Create a new todo
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton >
          <Modal.Title>New todo</Modal.Title>
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
          <Button variant='primary' onClick={handleSubmit} >
            Save
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
