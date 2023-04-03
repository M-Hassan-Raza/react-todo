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
        if (props.inputText !== "" && props.priority !== "") {
            if (parseInt(props.priority) >= 1 && parseInt(props.priority) <= 5) {
                props.setTodosList([
                    ...props.todosList,
                    { text: props.inputText, completed: false, id: uuidv4(), priority: props.priority, isEditing: false }
                ]);
                props.setPrioritiesList([
                    ...props.prioritiesList,
                    { text: props.priority }]);

                props.setInputText("");
                props.setPriority("");
            }
            else {
                alert("Priority Must be between 1-5");
            }
        }
        else {
            alert("No field can be left empty");
        }
    };
    return (
        <form>
            <input onChange={inputTextHandler} value={props.inputText} type="text" className="todo-input" placeholder="What is the task today?"
                required />
            <input onChange={inputPriorityHandler} value={props.priority} type="number" min="1" max="5" className="priority" placeholder="How important it is?"
                required />
            <button onClick={submitHandler} className="todo-button" type="submit">
                <FontAwesomeIcon icon={faCheck} />
            </button>

        </form>
    );
}

export default Form;