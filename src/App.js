import './App.css';
import React, { useState } from 'react';
import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {
  const [inputText, setInputText] = useState("");
  const [todosList, setTodosList] = useState([]);
  const [priority, setPriority] = useState("");
  const [prioritiesList, setPrioritiesList] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>TODO List 🤡</h1>
      </header>
      <Form
        todosList={todosList}
        setTodosList={setTodosList}
        setInputText={setInputText}
        inputText={inputText}
        priority={priority}
        setPriority={setPriority}
        prioritiesList={prioritiesList}
        setPrioritiesList={setPrioritiesList}
      />
      <TodoList
        todosList={todosList}
        setTodosList={setTodosList}
      />
    </div>
  );
}

export default App;
