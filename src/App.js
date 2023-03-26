import './App.css';
import React, { useState } from 'react';
import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {
  const [inputText, setInputText] = useState("");
  const [todosList, setTodosList] = useState([]);
  const [priority, setPriority] = useState("");
  return (
    <div className="App">
      <header>
        <h1>Rai's TODO List</h1>
      </header>
      <Form
        todosList={todosList}
        setTodosList={setTodosList}
        setInputText={setInputText}
        inputText={inputText}
        priority={priority}
        setPriority={setPriority}
      />
      <TodoList 
      todosList={todosList}
      priority={priority}
      />
    </div>
  );
}

export default App;
