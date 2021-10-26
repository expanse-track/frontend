import axios from 'axios'
import { baseURL } from '../config/apiConfig';

const performRequest = async (method, url, data) => {
    const token = localStorage.getItem('xyz-todos') || '';
    try {


        return await axios({
            baseURL: `${baseURL}`,
            url: url,
            method: method,
            data: data,
            headers: {
                'Content-Type': 'application/json',
                Authorization: token ? `Bearer ${token}` : '',
            },
        }).then(res => {
            return res.data;
        })
    } catch (error) {
        console.log(error)
    }
}



export const loginReqest = async (email, password) => {
    return await performRequest(
        'POST',
        '/users/login',
        { password, email },
    );
};


export const signUpReqest = async (email, password) => {
    return await performRequest(
        'POST',
        '/users/signup',
        { password, email },
    );
};


export const fetchActiveTodos = async () => {
    return await performRequest(
        'GET',
        'todos/getActiveTodos',
    );
};


export const fetchAlltodos  = async () => {
    return await performRequest(
        'GET',
        'todos/getTodos',
    );
};


export const createTodo = async (title, description) => {
    console.log(title, description)
    return await performRequest(
        'POST',
        'todos/add',
        { title, description }
    );
};

export const deleteTodo = async (id) => {
    console.log(id)
    return await performRequest(
        'DELETE',
        `todos/delete/${id}`
    );
};

export const updateTodo = async (id, title, description) => {
    console.log(id)
    return await performRequest(
        'PUT',
        `todos/update/${id}`,
        { title, description }
    );
};


export const completeTodo = async (id) => {
    console.log(id)
    return await performRequest(
        'PUT',
        `todos/complete/${id}` 
    );
};