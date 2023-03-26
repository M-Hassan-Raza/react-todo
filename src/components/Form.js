import React from "react";

function Form(props) {
    const inputTextHandler = (e) => {
        props.setInputText(e.target.value);
    }
    return (
        <form>
            <input onChange={inputTextHandler} type="text" className="todo-input" />
            <button className="todo-button" type="submit">
                <i className="fas fa-check"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;