import React, { useState } from "react";
import "./todo.css"; 

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask === "") return;
    const task = { id: Date.now(), text: newTask, completed: false };
    setTasks([...tasks, task]);
    setNewTask("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="todo-container">
      <h1 className="todo-title">Todo List</h1>

      <div className="todo-input-section">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task..."
          className="todo-input"
        />
        <button onClick={addTask} className="todo-add-button">Add</button>
      </div>

      <ul className="todo-list">
        {tasks.length === 0 && <p className="todo-empty">No tasks yet!</p>}
        {tasks.map((task) => (
          <li key={task.id} className="todo-item">
            <span>{task.text}</span>
            <button onClick={() => deleteTask(task.id)} className="todo-delete-button">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
