
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './index.css'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { loginReqest } from '../../helpers/apiHelper';
import Toast from '../../components/toast';  

function Login() { 

  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showToggle, setShowToggle] = useState(false)


  const toggleshow = () => setShowToggle(!showToggle);
 

  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  }

  const handleSubmit = (event) => {
    event.preventDefault(); 
    loginReqest(email, password).then(res => { 
      localStorage.setItem('xyz-todos', res.token)
    }).then(() => {
      history.push('/')
    }).catch(e => {
      setShowToggle({ ...showToggle, show: true });
    })
  }

  return (
    <>
      <div className='login'>
        <Container>
          <div className='loginHeader'>Login </div> 

          <Form onSubmit={handleSubmit}>
            <Form.Group size='lg' controlId='email' className='formGroup'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                autoFocus
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
 
            <Form.Group size='lg' controlId='password' className='formGroup'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
 
            <Button block size='lg' type='submit' className='loginButton' disabled={!validateForm()}>
              Login
            </Button>
          </Form>
 
          <div className='bottomText'>Don't you have an account ? </div>  <Link className='loginLink' to='/signup'> sign up </Link>

        </Container>
      </div>

      <Toast show={showToggle} description={'Error occurred while login'} toggleshow={toggleshow} />
    </>
  )
}

export default Login
