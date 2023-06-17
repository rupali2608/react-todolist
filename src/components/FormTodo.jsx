import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";

function FormTodo({ addTodo }) {
  const [value, setValue] = useState("");
  const [v, setV] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value, v);
    setValue("");
    setV("");
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>
            <b>Add Todo</b>
          </Form.Label>
          <Form.Control
            type="text"
            className="input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Add new todo"
            style={{ maxWidth: "600px" }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>
            <b>Description</b>
          </Form.Label>
          <Form.Control
            type="text"
            className="input"
            value={v}
            onChange={(e) => setV(e.target.value)}
            placeholder="Write in brief about your task"
            style={{ maxWidth: "600px" }}
          />
        </Form.Group>
        <Button
          variant="primary mb-3"
          type="submit"
          style={{ marginTop: "5px", backgroundColor: "black" }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}
export default FormTodo;
