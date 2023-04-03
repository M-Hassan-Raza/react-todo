import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

function Todo(props) {
    const deleteHandler = () => {
        props.setTodosList(props.todosList.filter((el) => el.id !== props.todo.id));
    }

    const handlePriorityChange = (id, imp) => {
        var index = props.todosList.map(function (x) { return x.id; }).indexOf(id);
        const features = [...props.todosList];
        features[index].priority = imp;
        props.setTodosList([...features]);
    }

    const moveToTopHandler = (id) => {
        var index = props.todosList.map(function (x) { return x.id; }).indexOf(id);
        const features = [...props.todosList];
        features.unshift(features.splice(index, 1)[0])
        props.setTodosList([...features]);
    }

    return (
        <div className="todo">
            <li className="todo-item">{props.text}</li>
            <li className="todo-item-priority">{props.priority}</li>
            <button onClick={() => moveToTopHandler(props.todo.id)} className="top-btn" title="Move to the Top">
                <FontAwesomeIcon icon={faArrowUp} />
            </button>
            <button className="edit-btn increase" onClick={() => handlePriorityChange(props.todo.id, parseInt(props.todo.priority) + 1)} title="Increase Priority">
                <FontAwesomeIcon icon={faPlus} />
            </button>
            <button className="edit-btn decrease" onClick={() => handlePriorityChange(props.todo.id, parseInt(props.todo.priority) - 1)} title="Decrease Priority">
                <FontAwesomeIcon icon={faMinus} />
            </button>
            <button onClick={deleteHandler} className="delete-btn" title="Delete">
                <FontAwesomeIcon icon={faTrash} />
            </button>
        </div>
    );
}

export default Todo;