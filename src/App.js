import React, { useState } from 'react';
import './App.css';

function App() {
  // State để quản lý danh sách todo và giá trị input
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  // Hàm thêm công việc vào danh sách
  const addTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, taskInput]);
      setTaskInput(''); // Xóa input sau khi thêm
    } else {
      alert('Please enter a task!');
    }
  };

  // Hàm xóa công việc khỏi danh sách
  const deleteTask = (taskToDelete) => {
    setTasks(tasks.filter((task) => task !== taskToDelete));
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Todo List</h1>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Enter your task"
        />
        <button onClick={addTask}>Add</button>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => deleteTask(task)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;