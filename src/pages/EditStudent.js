import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditStudent = ({ students, setStudents }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const student = students.find((s) => s.id === parseInt(id));
  
    const [formData, setFormData] = useState(student || {});
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleUpdate = (updatedStudent) => {
      const updatedStudents = students.map(student =>
        student.id === updatedStudent.id ? updatedStudent : student
      );
      setStudents(updatedStudents);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      handleUpdate({ ...formData, id: student.id }); // Ensure to keep the ID
      navigate('/students');
    };
  
    if (!student) return <p>Student not found</p>;
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        <input type="number" name="age" value={formData.age} onChange={handleChange} required />
        <input type="text" name="class" value={formData.class} onChange={handleChange} required />
        <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        <button type="submit">Update</button>
      </form>
    );
  };
  export default EditStudent;

  