import React, { useState } from "react";

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    };
    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  return (
    <div>
      <div className="addTask">
        <input onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task, key) => {
          return (
            <div style={{ display: "flex", gap: "10px" }}>
              <h1 key={key}>{task.taskName}</h1>
              <button onClick={() => deleteTask(task.id)}>X</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
