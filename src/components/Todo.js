import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function Todo(props) {
    const deleteHandler = () => {
        props.setTodosList(props.todosList.filter((el) => el.id !== props.todo.id));
    }
    return (
        <div className="todo">
            <li className="todo-item">{props.text}</li>
            <li className="todo-item-priority">{props.priority}</li>
            <button className="top-btn" title="Delete Item">
                <FontAwesomeIcon icon={faArrowUp} />
            </button>
            <button className="edit-btn">
                <FontAwesomeIcon icon={faPenToSquare} />
            </button>
            <button onClick={deleteHandler} className="delete-btn">
            <FontAwesomeIcon icon={faTrash} />
            </button>
        </div>
    );
}

export default Todo;