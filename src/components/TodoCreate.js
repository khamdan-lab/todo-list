import React from "react";
import { useState } from "react";

const TodoCreate = (props) => {

    const [getInputTodos, setInputTodos] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault()

        const newTodo = {
            id : Math.floor(Math.random()* 100 ) + 1,
            title: getInputTodos
        }
        props.onCreateTodos(newTodo);
        setInputTodos('')

    }

    const handleInputTodo = (event) => {
        setInputTodos(event.target.value);
    }
    
    return (
        <form onSubmit={handleSubmit} className="todo-form">
            <input type="text"  className="todo-input" value={getInputTodos} onChange={handleInputTodo} />
            <button type="submit" className="todo-button">Add</button>
        </form>
    )
}

export default TodoCreate;