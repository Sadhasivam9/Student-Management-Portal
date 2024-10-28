import React, { useEffect, useState } from 'react';
import studentsData from '../students.json';
import Chart from 'chart.js/auto';

const Dashboard = () => {

  const [studentCount, setStudentCount] = useState(0);
  const [classDistribution, setClassDistribution] = useState({});

  useEffect(() => {
    setStudentCount(studentsData.length);

    // Class-wise distribution
    const distribution = studentsData.reduce((acc, student) => {
      acc[student.class] = (acc[student.class] || 0) + 1;
      return acc;
    }, {});
    setClassDistribution(distribution);

    // Chart setup if distribution data is available
    if (Object.keys(distribution).length) {
        const ctx = document.getElementById('classChart');
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: Object.keys(distribution),
            datasets: [{
              label: 'Students per Class',
              data: Object.values(distribution),
              backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                // Add more colors as needed
              ],
            }],
          },
        });
      }
      
  }, []);
 

  return (
    <div>
        
      <h2>Dashboard</h2>
      <p>Welcome to the Student Management Portal!</p>
      <h3>Total Students: {studentCount}</h3>
      <canvas id="classChart" width="400" height="200"></canvas>
      {Object.keys(classDistribution).length > 0 && (
        <div>
          <h4>Class Distribution:</h4>
          <ul>
            {Object.entries(classDistribution).map(([className, count]) => (
              <li key={className}>{className}: {count} students</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
