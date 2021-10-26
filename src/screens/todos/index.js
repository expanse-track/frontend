import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchActiveTodos } from '../../helpers/apiHelper'
import AppNavBar from '../../layouts/navbar'
import NewTaskModal from '../../components/newTodoModal/index'
import TodoCard from './../../components/todoCard/index'
import { setTodos } from '../../state/actions/todo'
import './index.css'
import { Container } from 'react-bootstrap'
import Footer from './../../components/footer'

const Tasks = () => {
    const dispatch = useDispatch()
    const todos = useSelector((state) => state.todo.todos)

    useEffect(() => {
        fetchActiveTodos().then(res => {
            dispatch({ type: setTodos, payload: res })
        })
    }, [])


    return (
        <AppNavBar>
            <Container>


                <div className='createNewTodoContainer'>
                    <NewTaskModal />
                </div>

                {
                    todos.map(task => {
                        return (

                            <div key={task._id}>
                                <TodoCard
                                    id={task._id}
                                    title={task.title}
                                    description={task.description}
                                    active={task.active}
                                />
                            </div>

                        )
                    })
                }</Container>
                <Footer />
        </AppNavBar>
    )
}

export default Tasks
