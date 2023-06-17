import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Card } from "react-bootstrap";
import "./App.css";
import FormTodo from "./FormTodo";
import Todo from "./Todo";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      text: "This is a sample todo",
      description: "Here is brief about your task",
      isDone: false,
    },
  ]);

  const addTodo = (text, description) => {
    const newTodo = {
      text: text,
      description: description,
      isDone: false,
    };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  const markTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Todo List</h1>
        <FormTodo addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (
            <Card key={index} style={{ maxWidth: "600px", marginTop: "10px" }}>
              <Card.Body>
                <Todo
                  key={index}
                  index={index}
                  todo={todo}
                  markTodo={markTodo}
                  removeTodo={removeTodo}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
