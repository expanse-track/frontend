import React from 'react'
import { Container, Nav, NavItem } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import './index.css'


const AppNavBar = ({ children }) => {

    const logout = () => {
        localStorage.removeItem('xyz-todos')
    }


    return (
        <div>
            <Navbar bg='dark' variant='dark' className='navBar'>
                <Container>
                    <Navbar.Brand href='#home'>XYZ Todos</Navbar.Brand>
                    <Nav className='me-auto'>
                        <NavItem>
                            <Link className='nav-link' to='/home'>Home</Link>
                        </NavItem>
                        <NavItem>
                            <Link className='nav-link' to='/history'>History</Link>
                        </NavItem>
                        <NavItem>
                            <Link className='nav-link' to='/summary'>Summary</Link>
                        </NavItem>
                        <NavItem>
                            <Link className='nav-link' onClick={logout} >Logout</Link>
                        </NavItem>
                    </Nav>
                </Container>
            </Navbar>
            {children}
        </div>
    )
}

export default AppNavBar
