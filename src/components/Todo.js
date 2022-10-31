import React from "react";
import { useState } from "react";
import TodoList from "./TodoList";
import TodoCreate from "./TodoCreate";

const Todo = () => {

    const [getTodo, setTodo] = useState([])

    const eventCreateTodos = (todo) => {
        setTodo(getTodo.concat(todo))
        console.log(getTodo);
    }

    return(
        <div>
            <h1>Todo List</h1>
            <TodoCreate onCreateTodos={eventCreateTodos}/>
            <TodoList dataTodos={getTodo}/>
        </div>
    );
}


export default Todo;