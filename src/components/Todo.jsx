import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Button } from "react-bootstrap";
import "./Todo.css";

function Todo({ todo, index, markTodo, removeTodo }) {
  return (
    <div className="todo">
      <div className="task">
        <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
          {todo.text}
        </span>
        <div style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
          {todo.description}
        </div>
      </div>
      <div className="button">
        <Button variant="outline-success" onClick={() => markTodo(index)}>
          ✓
        </Button>{" "}
        <Button variant="outline-danger" onClick={() => removeTodo(index)}>
          ✕
        </Button>
      </div>
    </div>
  );
}
export default Todo;
