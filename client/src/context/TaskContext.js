import React, { createContext, useContext, useState } from 'react';
import api from '../utils/api';

// Create the Task Context
const TaskContext = createContext();

// Custom hook to use the Task Context
export const useTask = () => useContext(TaskContext);

// Task Provider component
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  // Create a new task
  const createTask = async (taskData) => {
    try {
      const response = await api.post('/tasks', taskData);
      setTasks([...tasks, response.data.task]);
    } catch (error) {
      console.error('Create task error:', error);
    }
  };

  // Fetch all tasks
  const getTasks = async () => {
    try {
      const response = await api.get('/tasks');
      setTasks(response.data.tasks);
    } catch (error) {
      console.error('Get tasks error:', error);
    }
  };

  // Update a task
  const updateTask = async (taskId, updatedTask) => {
    try {
      await api.put(`/tasks/${taskId}`, updatedTask);
      setTasks(tasks.map((task) => (task._id === taskId ? { ...task, ...updatedTask } : task)));
    } catch (error) {
      console.error('Update task error:', error);
    }
  };

  // Delete a task
  const deleteTask = async (taskId) => {
    try {
      await api.delete(`/tasks/${taskId}`);
      setTasks(tasks.filter((task) => task._id !== taskId));
    } catch (error) {
      console.error('Delete task error:', error);
    }
  };

  // Provide the Task Context to the children components
  return (
    <TaskContext.Provider value={{ tasks, createTask, getTasks, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};
