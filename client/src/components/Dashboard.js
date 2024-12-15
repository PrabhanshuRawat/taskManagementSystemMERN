import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TaskContext } from '../context/TaskContext';
import TaskList from './Tasks/TaskList';

const Dashboard = () => {
  const { getTasks, tasks } = useContext(TaskContext);

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>My Dashboard</h1>
        <Link to="/task/create" className="create-task-btn">
          Create New Task
        </Link>
      </div>
      
      <div className="task-summary">
        <div className="summary-card">
          <h3>Total Tasks</h3>
          <p>{tasks.length}</p>
        </div>
        <div className="summary-card">
          <h3>Pending Tasks</h3>
          <p>{tasks.filter(task => task.status === 'pending').length}</p>
        </div>
        <div className="summary-card">
          <h3>Completed Tasks</h3>
          <p>{tasks.filter(task => task.status === 'completed').length}</p>
        </div>
      </div>

      <TaskList />
    </div>
  );
};

export default Dashboard;