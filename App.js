import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import AddExpense from './pages/AddExpense';
import Incomes from './pages/Incomes';
import ProtectedRoute from './components/ProtectedRoute';
import MainLayout from './layouts/MainLayout';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <MainLayout>
                  <Dashboard />
                </MainLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/add-expense"
            element={
              <ProtectedRoute>
                <MainLayout>
                  <AddExpense />
                </MainLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/incomes"
            element={
              <ProtectedRoute>
                <MainLayout>
                  <Incomes />
                </MainLayout>
              </ProtectedRoute>
            }
          />

          <Route path="/" element={<Navigate to="/dashboard" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
