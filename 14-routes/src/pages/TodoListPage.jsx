import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./TodoListPage.css"

const initialTodos = [
    {id: 1, text: "Play games all day", priority:'low'},
    {id: 2, text: "Finish MintOS Flex", priority:'high'},
    {id: 3, text: "Get a pizza for a movie", priority:'low'},
    {id: 4, text: "Finish homework", priority:'high'},
    {id: 5, text: "Jump over a dog.", priority:'high'}
]

function Todo() {
    const [todos, setTodos] = useState(initialTodos);
    const [newTodo, setText] = useState('');

    const handleAddTodo = () => {
        if (newTodo.trim() == ""){
            return;
        }

        const newTodoItem = {
            id: Date.now(),
            text: newTodo,
            priority: 'low'
        }

        setTodos([...todos, newTodoItem]);
        setText('');
    }

    return (
        <>
            <div className="page-container">
                <Link to="/" className="nav-button">Back</Link>
                <h1>ToDo List</h1>

                <div className="add-todo-form">
                    <input type="text" value={newTodo} onChange={(e) => setText(e.target.value)} placeholder="e. g: Cook a pizza"/>
                    <button onClick={handleAddTodo}>Add a task</button>
                </div>

                <ul>
                    {
                        todos.map((todo) => (
                            <li key={todo.id} className={todo.priority}>
                                <span>{todo.text}</span>
                            </li>
                        ))
                    }

                </ul>
            </div>
        </>
    )
}

export default Todo
