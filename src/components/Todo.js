import React from "react";

function Todo(props) {
    const deleteHandler = () => {

    }
    return (
        <div className="todo">
            <li className="todo-item">{props.text}</li>
            <li className="todo-item-priority">{props.priority}</li>
            <button className="complete-btn">
                <i className="fa-light fa-pen-to-square"></i>
            </button>
            <button onClick={deleteHandler} className="delete-btn"><i className="fas fa-trash"></i></button>
        </div>
    );
}

export default Todo;