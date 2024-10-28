import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const StudentDetails = ({ students }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const studentId = parseInt(id, 10);

  // Find student by numeric ID
  const student = students.find(s => Number(s.id) === studentId);

  if (!student) {
    return (
      <div className="p-4">
        <p>Student not found (ID: {id})</p>
        <button 
          onClick={() => navigate('/students')}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Back to Student List
        </button>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Student Details</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="mb-2"><strong>ID:</strong> {student.id}</p>
        <p className="mb-2"><strong>Name:</strong> {student.name}</p>
        <p className="mb-2"><strong>Age:</strong> {student.age}</p>
        <p className="mb-2"><strong>Email:</strong> {student.email}</p>
        <p className="mb-2"><strong>Class:</strong> {student.class}</p>
        <p className="mb-2"><strong>Address:</strong> {student.address}</p>
        <p className="mb-2"><strong>Phone:</strong> {student.phone}</p>
      </div>
      <button 
        onClick={() => navigate('/students')}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Back to Student List
      </button>
    </div>
  );
};

export default StudentDetails;