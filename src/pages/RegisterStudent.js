import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterStudent({ onRegister }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    class: '',
    address: '',
    phone: ''
  });

  const handleChange = (e) => {
    const value = e.target.type === 'number' 
      ? e.target.value === '' ? '' : Number(e.target.value)
      : e.target.value;
      
    setFormData(prev => ({
      ...prev,
      [e.target.name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudentId = onRegister(formData);
    navigate(`/students/${newStudentId}`);
  };

  return (

    <div className="max-w-3xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Register New Student</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
                required
                autoComplete="name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
                required
                autoComplete="email"
              />
            </div>
            <div>
              <label htmlFor="age" className="block text-gray-700 font-semibold mb-2">Age</label>
              <input
                id="age"
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
                required
                autoComplete="off"
              />
            </div>
            <div>
              <label htmlFor="class" className="block text-gray-700 font-semibold mb-2">Class</label>
              <select
                id="class"
                name="class"
                value={formData.class}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
                required
              >
                <option value="">Select Class</option>
                <option value="10th Grade">10th Grade</option>
                <option value="11th Grade">11th Grade</option>
                <option value="12th Grade">12th Grade</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label htmlFor="address" className="block text-gray-700 font-semibold mb-2">Address</label>
              <input
                id="address"
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
                required
                autoComplete="street-address"
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Phone Number</label>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
                required
                autoComplete="tel"
              />
            </div>
          </div>
          <br></br>
          <div className="flex gap-4 mt-8">
            <br></br>

            <button style={{ backgroundColor: '#FF6F61', color: '#FFF', padding: '10px', borderRadius: '8px' }}
              type="submit"
              className="w-1/2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105"
            >
              Register Student
            </button>
          </div>
        </form>
      </div>
    </div>
    
  );
}

export default RegisterStudent;