


import { useState, useEffect } from "react";
import axios from "axios";
import kid1 from "../assets/kid1.jpg";
import { useParams } from "react-router-dom";

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState("");
  const [observations, setObservations] = useState("");
  const [selectedStudent, setSelectedStudent] = useState("");
  const { teacherName } = useParams();

  // Fetch students and subjects when the component loads
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch students
        const studentResponse = await axios.get(
          `http://localhost:4000/api/students/getStudents/${teacherName}`
        );
        setStudents(studentResponse.data);

        // Fetch subjects
        const subjectResponse = await axios.get(
          `http://localhost:4000/api/subjects/getAllSubjects/${teacherName}`
        );
        setSubjects(subjectResponse.data.subjects); // Assuming subjects are returned as an array
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [teacherName]);

  // Save observation
  const handleSaveObservation = async () => {
    if (!selectedStudent || !selectedSubject || !observations) {
      alert("Please fill all fields before saving the observation.");
      return;
    }
  
    const data = {
      student: selectedStudent,
      teacher: teacherName,
      subject: selectedSubject,
      metric: "Behavior", // Replace this with your metric or make it dynamic if needed
      observationText: observations,
    };
  
    try {
      const response = await axios.post(
        "http://localhost:4000/api/observations/addObservation",
        data
      );
      alert("Observation saved successfully!");
      console.log(response.data); // Optional: log the success response
    } catch (error) {
      console.error("Error saving observation:", error);
      alert("Failed to save observation. Please try again.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>

      {/* Student Carousel */}
      <div className="mb-6">
        <div className="flex overflow-x-auto space-x-6 animate-marquee">
          {students.map((student) => (
            <div
              key={student._id}
              className="flex-shrink-0 w-32 h-32 text-center cursor-pointer"
              onClick={() => setSelectedStudent(student.name)} // Set student name on click
            >
              <img
                src={student.picture || kid1}
                alt={student.name}
                className="w-full h-full rounded-full object-cover"
              />
              <div className="mt-2 text-sm font-semibold">{student.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Subject Selection */}
      <div className="mb-6">
        <label htmlFor="subject" className="block mb-2 text-lg font-medium">
          Select Subject
        </label>
        <select
          id="subject"
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full"
        >
          <option value="">Select a Subject</option>
          {subjects.map((subject) => (
            <option key={subject._id} value={subject.name}>
              {subject.name}
            </option>
          ))}
        </select>
      </div>

      {/* Metrics and Observation */}
      <div className="mb-6">
        <label htmlFor="studentName" className="block mb-2 text-lg font-medium">
          Student Name
        </label>
        <input
          id="studentName"
          type="text"
          value={selectedStudent}
          onChange={(e) => setSelectedStudent(e.target.value)}
          placeholder="Enter Student's Name"
          className="p-2 border border-gray-300 rounded mb-4 w-full"
        />

        <label htmlFor="observation" className="block mb-2 text-lg font-medium">
          Observation
        </label>
        <textarea
          id="observation"
          value={observations}
          onChange={(e) => setObservations(e.target.value)}
          placeholder="Write your observation here..."
          className="p-2 border border-gray-300 rounded mb-4 w-full"
        />

        <button
          onClick={handleSaveObservation}
          className="bg-blue-500 text-white p-2 rounded w-full"
        >
          Save Observation
        </button>
      </div>
    </div>
  );
};

export default Dashboard;

// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import kid1 from "../assets/kid1.jpg";
// import { useParams } from 'react-router-dom';
// // import { useLocation } from 'react-router-dom';

// const Dashboard = () => {
//   const [students, setStudents] = useState([]);
//   const [selectedSubject, setSelectedSubject] = useState('');
//   const [observations, setObservations] = useState('');
//   const [selectedStudent, setSelectedStudent] = useState('');
//   // Extract teacherName from URL
//   // const location = useLocation();
//   // const queryParams = new URLSearchParams(location.search);
//   // const teacherName = queryParams.get('teacherName'); // Extract teacherName
//   const { teacherName } = useParams();
 

//   useEffect(() => {
//     const fetchStudents = async () => {
//       try {
//         const response = await axios.get(`http://localhost:4000/api/students/getStudents/${teacherName}`);
//         setStudents(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchStudents();
//   }, [teacherName]);

//   const handleSaveObservation = () => {
//     console.log(`Saving observation for ${selectedStudent}: ${observations}`);
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
      
//       {/* Student Carousel */}
//       <div className="mb-6">
//         <div className="flex overflow-x-auto space-x-6 animate-marquee">
//           {students.map(student => (
//             <div key={student._id} className="flex-shrink-0 w-32 h-32 text-center">
//               <img
//                 src={student.picture || kid1} 
//                 alt={student.name}
//                 className="w-full h-full rounded-full object-cover"
//               />
//               <div className="mt-2 text-sm">{student.name}</div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Subject Selection */}
//       <div className="mb-6">
//         <label htmlFor="subject" className="block mb-2">Select Subject</label>
//         <select
//           id="subject"
//           value={selectedSubject}
//           onChange={(e) => setSelectedSubject(e.target.value)}
//           className="p-2 border border-gray-300 rounded"
//         >
//           <option value="">Select a Subject</option>
//           <option value="Math">Math</option>
//           <option value="Science">Science</option>
//           <option value="History">History</option>
//         </select>
//       </div>

//       {/* Metrics and Observation */}
//       <div className="mb-6">
//         <label htmlFor="studentName" className="block mb-2">Student Name</label>
//         <input
//           id="studentName"
//           type="text"
//           value={selectedStudent}
//           onChange={(e) => setSelectedStudent(e.target.value)}
//           placeholder="Enter Student's Name"
//           className="p-2 border border-gray-300 rounded mb-4 w-full"
//         />
        
//         <label htmlFor="observation" className="block mb-2">Observation</label>
//         <textarea
//           id="observation"
//           value={observations}
//           onChange={(e) => setObservations(e.target.value)}
//           placeholder="Write your observation here..."
//           className="p-2 border border-gray-300 rounded mb-4 w-full"
//         />

//         <button
//           onClick={handleSaveObservation}
//           className="bg-blue-500 text-white p-2 rounded"
//         >
//           Save Observation
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;