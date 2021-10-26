import React  from 'react'
import { Toast  } from 'react-bootstrap'; 
import './index.css'

const ToastWrapper = ({ show = false, toggleshow, description }) => {

    return (
        <div className='toastWrapperRow'> 
                <Toast show={show} onClose={toggleshow} bg={'danger'} delay={1500} autohide className='toast'>
                    <Toast.Header>
                        <img
                            src='holder.js/20x20?text=%20'
                            className='rounded me-2'
                            alt=''
                        />
                        <strong className='me-auto'>Error</strong>
                    </Toast.Header>
                    <Toast.Body>{description}</Toast.Body>
                </Toast> 
        </div>
    );
}

export default ToastWrapper;