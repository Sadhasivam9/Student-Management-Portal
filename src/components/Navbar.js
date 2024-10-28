// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <h1>Student Management Portal</h1>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/students">Student List</Link></li>
        <li><Link to="/register">Register Student</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
