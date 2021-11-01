import React from "react";
import "./style.css";

const TodoItem = ({ todo, deletTodo }) => {
  return (
    <div className="todoItem">
      <li>{todo.name}</li>
    
      <p className="close" onClick={() => deletTodo(todo.id)}>
        X
      </p>
    </div>
  );
}
export default TodoItem;