
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate

const AddStudentsPage = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize useNavigate
  const { teacherName, subjectName } = location.state || { teacherName: '', subjectName: '' };

  const [students, setStudents] = useState([{ name: '', grade: '', subject: subjectName }]);

  const handleInputChange = (index, event) => {
    const values = [...students];
    values[index][event.target.name] = event.target.value;
    setStudents(values);
  };

  const handleAddStudent = () => {
    setStudents([...students, { name: '', grade: '', subject: subjectName }]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    for (const student of students) {
      const studentData = {
        name: student.name,
        grade: student.grade,
        picture: '', // You can add a picture upload feature if needed
        teacherName: teacherName,
        subjects: [student.subject]
      };

      try {
        const response = await fetch('http://localhost:4000/api/students/addStudent', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(studentData),
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        console.log('Student added:', result);
      } catch (error) {
        console.error('Error adding student:', error);
      }
    }

    // Navigate to the dashboard after saving students
    navigate(`/dashboard/${teacherName}`);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Set Up Your Students</h1>
      <form onSubmit={handleSubmit}>
        {students.map((student, index) => (
          <div key={index} className="mb-4">
            <input
              type="text"
              name="name"
              value={student.name}
              onChange={(event) => handleInputChange(index, event)}
              placeholder="Student Name"
              className="border p-2 mr-2"
            />
            <input
              type="text"
              name="grade"
              value={student.grade}
              onChange={(event) => handleInputChange(index, event)}
              placeholder="Grade"
              className="border p-2 mr-2"
            />
            <input
              type="text"
              name="subject"
              value={student.subject}
              onChange={(event) => handleInputChange(index, event)}
              placeholder="Subject"
              className="border p-2 mr-2"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddStudent}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Add Another Student
        </button>
        <button
          type="submit"
          className="bg-green-500 text-white p-2 rounded ml-2"
        >
          Save Students
        </button>
      </form>
    </div>
  );
};

export default AddStudentsPage;