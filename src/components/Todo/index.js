import React, { useState } from "react";
import TodoItem from "../TodoItem";
import "./style.css";

const Todo = () => {

  const [todos, setTodos] = useState([
    { id: 1, name: "play" },
    { id: 2, name: "sleep" },
  ]
  );

  

  const addTodo = (e) => {
    e.preventDefault();
    if (e.target.task.value) {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          name: e.target.task.value,
        },
      ]);
    }
  };
  const deletTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  

  return (
    <div className="todo">
      <form onSubmit={addTodo}>
        <input type="text" name="task"/>
        <button>Add Task</button>
      </form>
      <ul>
        {todos.map((todo, i) => {
          return (
            <TodoItem
              todo={todo}
              key={i}
              deletTodo={deletTodo}
            />
          );
        })}
      </ul>
    </div>
  );
};
export default Todo;