import React, { useEffect, useState } from 'react'
import { fetchAlltodos } from '../../helpers/apiHelper'
import AppNavBar from '../../layouts/navbar'
import HistoryCard from './../../components/todoHistoryCard/index'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './index.css'
import { Container } from 'react-bootstrap'
import Footer from './../../components/footer'


const StatusCard = ({ type, amount = 0 }) => {
    return (
        <div className={type == 'Active' ? 'statusCardActive' : 'statusCardCompleted'}>
            {type} Todos
            <div className='statusAmount'>  {amount}</div>
        </div>
    )
}


const History = () => {
    const [todos, setTodos] = useState({
        active: [],
        completed: []
    })

    useEffect(() => {
        fetchAlltodos().then(res => {

            let active = [];
            let completed = [];


            res.forEach(todo => {
                if (todo.active) {
                    active.push(todo)
                } else {
                    completed.push(todo)
                }
            });

            setTodos({
                active, completed
            })
        })
    }, [])





    return (
        <AppNavBar>
            <Row className='statusRow' >
                <Col md={3}>
                    <StatusCard type='Active' amount={todos.active.length} />
                </Col>
                <Col md={3}>
                    <StatusCard type='Completed' amount={todos.completed.length} />
                </Col>
            </Row>
            <Container>
                <Row>
                    <Col sm={6}>
                        {
                            todos.active.map(task => {
                                return (
                                    <div key={task._id}>
                                        <HistoryCard
                                            title={task.title}
                                            description={task.description}
                                            active={task.active}
                                        />
                                    </div>

                                )
                            })
                        }
                    </Col>
                    <Col sm={6}>
                        {
                            todos.completed.map(task => {
                                return (
                                    <div key={task._id}>
                                        <HistoryCard
                                            title={task.title}
                                            description={task.description}
                                            active={task.active}
                                        />
                                    </div>
                                )
                            })
                        }
                    </Col>
                </Row>
            </Container>
            <Footer />
        </AppNavBar>
    )
}

export default History
