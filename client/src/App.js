// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { TaskProvider } from './context/TaskContext';

// Components
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Dashboard from './components/Dashboard';
import TaskCreate from './components/Tasks/TaskCreate';
import TaskList from './components/Tasks/TaskList';
import TaskDetails from './components/Tasks/TaskDetails';
import TaskEdit from './components/Tasks/TaskEdit';
import PrivateRoute from './components/Auth/PrivateRoute';
import Navbar from './components/Layout/Navbar';

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <Router>
          <div className="App">
            <Navbar />
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route 
                path="/dashboard" 
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                } 
              />
              <Route 
                path="/task/create" 
                element={
                  <PrivateRoute>
                    <TaskCreate />
                  </PrivateRoute>
                } 
              />
              <Route 
                path="/task/:id" 
                element={
                  <PrivateRoute>
                    <TaskDetails />
                  </PrivateRoute>
                } 
              />
              <Route 
                path="/task/edit/:id" 
                element={
                  <PrivateRoute>
                    <TaskEdit />
                  </PrivateRoute>
                } 
              />
            </Routes>
          </div>
        </Router>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;

