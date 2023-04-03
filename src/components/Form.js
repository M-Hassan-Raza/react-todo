import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';
uuidv4();

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
            { text: props.inputText, id: uuidv4(), priority: props.priority }
        ]);
        props.setPrioritiesList([
            ...props.prioritiesList,
            { text: props.priority }]);

        props.setInputText("");
        props.setPriority("");

    };
    return (
        <form onSubmit={submitHandler}>
            <input onChange={inputTextHandler} value={props.inputText} type="text" className="todo-input" placeholder="What is the task today?"
                required />
            <input onChange={inputPriorityHandler} value={props.priority} type="number" min="1" max="5" className="priority" placeholder="How important it is?"
                required />
            <button className="todo-button" type="submit">
                <FontAwesomeIcon icon={faCheck} />
            </button>

        </form>
    );
}

export default Form;