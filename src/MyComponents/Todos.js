import React from 'react'
import { TodoItems } from './TodoItems'

export const Todos = (props) => {
    const todoListStyle ={
        minHeight: "70vh"
    }
    return (
        <div className="container" style={todoListStyle}>
            <h3 className="text-center my-3">Todos List</h3>
            {props.todos.length === 0 ? "No Todo item to display" :
                props.todos.map((todo) => {
                    return( <TodoItems todo={todo} key={todo.sno} onDelete={props.onDelete}/>
                )
                })}

        </div>
    )
}
