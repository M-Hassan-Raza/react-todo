import React from "react";

function Form(props) {
    const inputTextHandler = (e) => {
        props.setInputText(e.target.value);
    }
    const inputPriorityHandler = (e) => {
        props.setPriority(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        props.setTodosList([
            ...props.todosList,
            { text: props.inputText, completed: false, id: Math.random() * 1000, priority: 0 }
        ]);
        props.setInputText("");
    };
    return (
        <form>
            <input onChange={inputTextHandler} type="text" className="todo-input" placeholder="TODO Item"/>
            <input onChange={inputPriorityHandler} type="number" min="1" max="5" className="todo-input priority" placeholder="Priority"/>
            <button onClick={submitHandler} className="todo-button" type="submit">
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