import React from "react";
import Todo from './Todo'
function TodoList(props) {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {props.todosList.map(todo => (
                    <Todo
                        todosList={props.todosList}
                        setTodosList={props.setTodosList}
                        key={todo.id}
                        text={todo.text}
                        todo={todo}
                        priority={todo.priority}
                    />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;