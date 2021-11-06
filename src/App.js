import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
    console.log(newTodo);
  };
  const handleTodo = (item) => {
    setTodos(
      todos.filter((element) => {
        return element !== item;
      })
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <Form addTodo={addTodo} />
        <TodoList todos={todos} setTodo={setTodos} handleTodo={handleTodo} />
      </header>
    </div>
  );
}

export default App;
