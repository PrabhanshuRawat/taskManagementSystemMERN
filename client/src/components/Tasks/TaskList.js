import React, { useContext, useEffect, useState } from 'react';
import { TaskContext } from '../../context/TaskContext';
import { Link } from 'react-router-dom';

const TaskList = () => {
  const { tasks, getTasks, updateTaskStatus, deleteTask } = useContext(TaskContext);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState({ priority: '', status: '' });

  useEffect(() => {
    getTasks(page, filter);
  }, [page, filter]);

  const priorityColors = {
    low: 'bg-green-100',
    medium: 'bg-yellow-100',
    high: 'bg-red-100'
  };

  return (
    <div className="task-list-container">
      <h2>My Tasks</h2>
      <div className="filters">
        <select 
          value={filter.priority} 
          onChange={(e) => setFilter({...filter, priority: e.target.value})}
        >
          <option value="">All Priorities</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <select 
          value={filter.status} 
          onChange={(e) => setFilter({...filter, status: e.target.value})}
        >
          <option value="">All Statuses</option>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
          </select>
      </div>
      <div className="task-grid">
        {tasks.map(task => (
          <div 
            key={task._id} 
            className={`task-card ${priorityColors[task.priority]}`}
          >
            <h3>{task.title}</h3>
            <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>
            <p>Priority: {task.priority}</p>
            <p>Status: {task.status}</p>
            <div className="task-actions">
              <Link to={`/task/${task._id}`}>View</Link>
              <Link to={`/task/edit/${task._id}`}>Edit</Link>
              <button onClick={() => updateTaskStatus(task._id, task.status === 'completed' ? 'pending' : 'completed')}>
                {task.status === 'completed' ? 'Mark Pending' : 'Mark Complete'}
              </button>
              <button onClick={() => deleteTask(task._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button 
          disabled={page === 1} 
          onClick={() => setPage(page - 1)}
        >
          Previous
        </button>
        <span>Page {page}</span>
        <button 
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TaskList;
