// src/components/StudentForm.js
import React, { useState } from 'react';

const StudentForm = ({ onSubmit, initialData = {} }) => {
  const [formData, setFormData] = useState({
    name: initialData.name || '',
    email: initialData.email || '',
    age: initialData.age || '',
    class: initialData.class || '',
    address: initialData.address || '',
    phoneNumber: initialData.phoneNumber || '',
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Pass form data to parent component
    setFormData({
      name: '',
      email: '',
      age: '',
      class: '',
      address: '',
      phoneNumber: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="container centered-content">
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="form-control" // Add Bootstrap or custom class for styling
        />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Class:</label>
        <input
          type="text"
          name="class"
          value={formData.class}
          onChange={handleChange}
          required
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Phone Number:</label>
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-register">Register</button>
    </form>
  );
};

export default StudentForm;
