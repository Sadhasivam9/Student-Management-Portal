import React, { useState } from 'react';
import Pagination from '../components/Pagination';
import { useNavigate } from 'react-router-dom';

const StudentList = ({ students, setStudents }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const [sortType, setSortType] = useState('');
  const [filterClass, setFilterClass] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleView = (id) => navigate(`/students/${id}`);
  const handleEdit = (id) => navigate(`/students/edit/${id}`);
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      const updatedStudents = students.filter(student => student.id !== id);
      setStudents(updatedStudents);
    }
  };

  const filteredStudents = students
    .filter(student => student.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(student => !filterClass || student.class === filterClass)
    .sort((a, b) => {
      if (sortType === 'name') return a.name.localeCompare(b.name);
      if (sortType === 'class') return a.class.localeCompare(b.class);
      return 0;
    });

  const paginatedStudents = filteredStudents.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Student List</h2>
        <button 
          onClick={() => navigate('/register')}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105"
        >
          + Register New Student
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <input
            type="text"
            placeholder="Search students..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
          />
          <select 
            onChange={(e) => setFilterClass(e.target.value)} 
            defaultValue=""
            className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
          >
            <option value="">All Classes</option>
            <option value="10th Grade">10th Grade</option>
            <option value="11th Grade">11th Grade</option>
            <option value="12th Grade">12th Grade</option>
          </select>
          <select 
            onChange={(e) => setSortType(e.target.value)} 
            defaultValue=""
            className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
          >
            <option value="">Sort By</option>
            <option value="name">Name</option>
            <option value="class">Class</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-4 text-left text-gray-700 font-semibold">Name</th>
                <th className="px-6 py-4 text-left text-gray-700 font-semibold">Email</th>
                <th className="px-6 py-4 text-left text-gray-700 font-semibold">Class</th>
                <th className="px-6 py-4 text-center text-gray-700 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {paginatedStudents.map(student => (
                <tr key={student.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">{student.name}</td>
                  <td className="px-6 py-4">{student.email}</td>
                  <td className="px-6 py-4">{student.class}</td>
                  <td className="px-6 py-4 text-center space-x-2">
                    <button 
                      onClick={() => handleView(student.id)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold transform transition-all duration-200 hover:scale-105"
                    >
                      View
                    </button>
                    <button 
                      onClick={() => handleEdit(student.id)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-semibold transform transition-all duration-200 hover:scale-105"
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => handleDelete(student.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold transform transition-all duration-200 hover:scale-105"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Pagination
        totalItems={filteredStudents.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default StudentList;