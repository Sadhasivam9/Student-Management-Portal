// src/pages/RegisterStudent.js
import React, { useState } from 'react';

function RegisterStudent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    class: '',
    address: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Student Registered:', formData);
    // Add to list logic here
  };

  return (
    <div>
      <h2>Register New Student</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="number" name="age" placeholder="Age" onChange={handleChange} required />
        <input type="text" name="class" placeholder="Class" onChange={handleChange} required />
        <input type="text" name="address" placeholder="Address" onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterStudent;
