import './App.css';
import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {
  return (
    <div className="App">
      <header>
        <h1>Rai's TODO List</h1>
      </header>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
