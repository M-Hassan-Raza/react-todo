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
            { text: props.inputText, completed: false, id: parseInt(Math.random() * 1000), priority: props.priority }
        ]);
        props.setPrioritiesList([
            ...props.prioritiesList,
           {text: props.priority}]);
        props.setInputText("");
        props.setPriority("");
    };
    return (
        <form>
            <input onChange={inputTextHandler} value={props.inputText} type="text" className="todo-input" placeholder="What is the task today?"/>
            <input onChange={inputPriorityHandler} value={props.priority} type="number" min="1" max="5" className="priority" placeholder="How important it is?"/>
            <button onClick={submitHandler} className="todo-button" type="submit">
            <i className="fa-sharp fa-solid fa-check"></i>
            </button>
            
        </form>
    );
}

export default Form;