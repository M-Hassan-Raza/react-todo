import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function Todo(props) {
    const deleteHandler = () => {
        props.setTodosList(props.todosList.filter((el) => el.id !== props.todo.id));
    }

    const editHandler = (id) => {

    }

    const moveToTopHandler = (id) => {
        var index = props.todosList.map(function (x) { return x.id; }).indexOf(id);
        props.setTodosList(props.todosList.unshift(props.todosList.splice(index, 1)[0]));
    }

    return (
        <div className="todo">
            <li className="todo-item">{props.text}</li>
            <li className="todo-item-priority">{props.priority}</li>
            <button onClick={() => moveToTopHandler(props.todo.id)} className="top-btn" title="Move to the Top">
                <FontAwesomeIcon icon={faArrowUp} />
            </button>
            <button className="edit-btn" onClick={() => editHandler(props.todo.id)} title="Edit">
                <FontAwesomeIcon icon={faPenToSquare} />
            </button>
            <button onClick={deleteHandler} className="delete-btn" title="Delete">
                <FontAwesomeIcon icon={faTrash} />
            </button>
        </div>
    );
}

export default Todo;