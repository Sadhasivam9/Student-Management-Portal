import React, { useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import StudentList from './pages/StudentList';
import StudentDetails from './pages/StudentDetails';
import RegisterStudent from './pages/RegisterStudent';
import EditStudent from './pages/EditStudent';
import studentsData from './students.json';

function App() {
  const [students, setStudents] = useState(() => {
    // Ensure all existing students have numeric IDs
    return studentsData.map(student => ({
      ...student,
      id: Number(student.id)
    }));
  });

  const handleRegisterStudent = (newStudent) => {
    const currentIds = students.map(s => Number(s.id));
    const maxId = currentIds.length > 0 ? Math.max(...currentIds) : 0;
    
    const studentWithId = {
      ...newStudent,
      id: maxId + 1,
      age: Number(newStudent.age)
    };

    setStudents(prevStudents => [...prevStudents, studentWithId]);
    return studentWithId.id; // Return the new ID for navigation
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/students" element={<StudentList students={students} setStudents={setStudents} />} />
            <Route path="/register" element={<RegisterStudent onRegister={handleRegisterStudent} />} />
            <Route path="/students/:id" element={<StudentDetails students={students} />} />
            <Route path="/students/edit/:id" element={<EditStudent students={students} setStudents={setStudents} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
