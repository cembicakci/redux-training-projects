import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit';
import { addTodo } from '../redux/todos/todosSlice'

function Form() {

    const [title, setTitle] = useState();
    const dispatch = useDispatch();

    const handleSumbit = (e) => {

        if(!title) return;
        e.preventDefault();
        dispatch(addTodo({ title }))
        setTitle('');
    }

    return (
        <form onSubmit={handleSumbit}>
            <input className="new-todo" placeholder="What needs to be done?" autoFocus value={title} onChange={(e) => setTitle(e.target.value)} />
            
        </form>
    )
}

export default Form