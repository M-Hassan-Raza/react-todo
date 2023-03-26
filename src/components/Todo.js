import React from "react";

function Todo() {
    return (
        <div className="todo">
            <li className="todo-item">Hi</li>
            <li className="todo-item-priority">5</li>
            <button className="complete-btn"><i className="fas fa-thumbs-up"></i></button>
            <button className="delete-btn"><i className="fas fa-trash"></i></button>
        </div>
    );
}

export default Todo;