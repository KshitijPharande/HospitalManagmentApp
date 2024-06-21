import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Doctor_Sidebar({ doctor }) {
  return (
    <div className="sidebar">
      <h4>Doctor Dashboard</h4>
      <ul>
        <li><strong>Name:</strong> {doctor.name}</li>
        <li><strong>Email:</strong> {doctor.email}</li>
        <li><strong>Phone:</strong> {doctor.phone}</li>
      </ul>
      <ul>
        <li><Link to="/doctor-dashboard">Dashboard</Link></li>
        <li><Link to="/appointments">Appointments</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/" onClick={() => { localStorage.removeItem("uid"); }}>Logout</Link></li>
      </ul>
    </div>
  );
}
