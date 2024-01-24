// TaskDisplay.js
import React from 'react';

const TaskDisplay = ({ tasks, deleteTask }) => {
  return (
    <div>
      <h3>Task Lists</h3>
      <ul className="list-group">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {task.task} - {task.priority} Priority
            <button
              className="btn btn-danger btn-sm"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskDisplay;
