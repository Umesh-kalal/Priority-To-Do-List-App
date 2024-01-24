// App.js
import React, { useState } from 'react';
import TaskInput from './TaskInput';
import TaskDisplay from './TaskDisplay';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="container mt-5">
      <TaskInput addTask={addTask} />
      <TaskDisplay tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
