import React from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import './index.css'
import DeleteTodo from './../deleteTodoModal/index'
import UpdateTodo from '../updateTodoModal/index'
import { completeTodo } from '../../helpers/apiHelper'
import { useDispatch } from 'react-redux'
import { removeTodo } from '../../state/actions/todo'


const Index = ({ id, title, active, description }) => {
    const dispatch = useDispatch()

    const setComplete = () => {
        completeTodo(id).then(res => {

            console.log(res)
            dispatch({ type: removeTodo, payload: res })
        }).catch(e => {
            console.log(e)
        })
    }


    return (
        <Container>
            <Card className='toddoCardStyle'>
                <Card.Body>
                    <Card.Title>Title :- {title}</Card.Title>
                    <Card.Text>
                    Description :- {description}  
                    </Card.Text>
                    <div className='buttonSpacing'><Button variant='primary' onClick={setComplete}>Complete</Button></div>
                    <div className='buttonSpacing'> <UpdateTodo title={title} id={id} description={description} /></div>
                    <div className='buttonSpacing'><DeleteTodo title={title} id={id} /></div>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Index
