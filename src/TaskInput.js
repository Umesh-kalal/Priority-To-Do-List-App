// TaskInput.js
import React, { useState } from 'react';

const TaskInput = ({ addTask }) => {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('Low');

  const handleAddTask = () => {
    if (task.trim() !== '') {
      addTask({ task, priority });
      setTask('');
      setPriority('Low');
    }
  };

  return (
    <div className="mb-3">
        <h3>Priority To-DO-List</h3>
      <input
        type="text"
        className="form-control"
        placeholder="Add a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <select
        className="form-control mt-2"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="Low">Low Priority</option>
        <option value="Medium">Medium Priority</option>
        <option value="High">High Priority</option>
      </select>
      <button className="btn btn-primary mt-2" onClick={handleAddTask}>
        Add
      </button>
    </div>
  );
};

export default TaskInput;
