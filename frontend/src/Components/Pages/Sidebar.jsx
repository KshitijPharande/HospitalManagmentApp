// Sidebar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';

export default function Sidebar({ patient }) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("uid");
    navigate("/");
  };

  return (
    <div className="sidebar">
      <h4>Welcome, {patient.name}</h4>
      <p>Email: {patient.email}</p>
      <ul>
        <li><a href="#dashboard">Dashboard</a></li>
        <li><a href="#appointments">Appointments</a></li>
        <li><a href="#settings">Settings</a></li>
        <li><a href="#" onClick={logout}>Logout</a></li>
      </ul>
    </div>
  );
}
