// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import kid1 from "../assets/kid1.jpg";

// const Dashboard = () => {
//   const [students, setStudents] = useState([]);
//   const [selectedSubject, setSelectedSubject] = useState('');
//   const [observations, setObservations] = useState('');
//   const [selectedStudent, setSelectedStudent] = useState('');

//   useEffect(() => {
//     const fetchStudents = async () => {
//       try {
//         const response = await axios.get('http://localhost:4000/api/students/getAllStudents');
//         setStudents(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchStudents();
//   }, []);

//   const handleSaveObservation = () => {
//     // Save observation logic here
//     console.log(`Saving observation for ${selectedStudent}: ${observations}`);
//     // You can send it to your backend or store in a state as needed
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
      
//       {/* Student Carousel */}
//       <div className="mb-6">
//         <Swiper spaceBetween={30} slidesPerView={3} loop={true}>
//           {students.map(student => (
//             <SwiperSlide key={student._id} className="flex items-center justify-center">
//               <img
//                 src={student.picture || kid1} 
//                 alt={student.name}
//                 className="w-24 h-24 rounded-full object-cover"
//               />
//               <div className="text-center mt-2">{student.name}</div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
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
//           {/* Replace these options with actual subjects */}
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









// // import { useState, useEffect } from "react";
// // import axios from "axios";
// // import kid1 from "../assets/kid1.jpg";


// // const Dashboard = () => {
// //   const [students, setStudents] = useState([]);
// //   const [selectedStudent, setSelectedStudent] = useState(null); // For tracking selected student
// //   const [subject, setSubject] = useState("");
// //   const [metric, setMetric] = useState("");
// //   const [observation, setObservation] = useState("");
  
// //   useEffect(() => {
// //     const fetchStudents = async () => {
// //       try {
// //         const response = await axios.get("http://localhost:4000/api/students/getAllStudents");
// //         setStudents(response.data);
// //       } catch (error) {
// //         console.error(error);
// //       }
// //     };

// //     fetchStudents();
// //   }, []);

// //   const handleSubjectChange = (e) => setSubject(e.target.value);
// //   const handleMetricChange = (e) => setMetric(e.target.value);
// //   const handleObservationChange = (e) => setObservation(e.target.value);

// //   const handleSubmitObservation = async () => {
// //     if (!selectedStudent || !observation) return;
    
// //     try {
// //       const response = await axios.post("http://localhost:4000/api/observations", {
// //         studentId: selectedStudent._id,
// //         observation,
// //         metric,
// //       });
// //       console.log("Observation saved:", response.data);
// //       setObservation(""); // Clear the observation after submission
// //     } catch (error) {
// //       console.error("Error saving observation:", error);
// //     }
// //   };

// //   return (
// //     <div className="container mx-auto p-4">
// //       <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
      
// //       {/* Student Carousel */}
// //       <div className="carousel-container mb-6">
// //         <div className="flex overflow-x-auto space-x-6">
// //           {students.map((student) => (
// //             <div
// //               key={student._id}
// //               className="w-32 h-32 flex-shrink-0 rounded-full border-2 border-gray-300 p-2"
// //               onClick={() => setSelectedStudent(student)}
// //             >
// //               <img
// //                 src={student.picture || kid1}
// //                 alt={student.name}
// //                 className="w-full h-full rounded-full object-cover"
// //               />
// //               <p className="text-center text-sm mt-2">{student.name}</p>
// //             </div>
// //           ))}
// //         </div>
// //         <div className="mt-4">
// //           <select
// //             value={subject}
// //             onChange={handleSubjectChange}
// //             className="p-2 border rounded"
// //             disabled={!selectedStudent}
// //           >
// //             <option value="">Select Subject</option>
// //             <option value="Math">Math</option>
// //             <option value="Science">Science</option>
// //             <option value="History">History</option>
// //             {/* Add more subjects if necessary */}
// //           </select>
// //         </div>
// //       </div>

// //       {/* Metrics & Observation Section */}
// //       <div className="mt-6">
// //         <h2 className="text-xl font-semibold mb-4">Metrics & Observations</h2>

// //         {/* Metric Selection */}
// //         <div className="mb-4">
// //           <select
// //             value={metric}
// //             onChange={handleMetricChange}
// //             className="p-2 border rounded"
// //             disabled={!selectedStudent}
// //           >
// //             <option value="">Select Metric</option>
// //             <option value="Attendance">Attendance</option>
// //             <option value="Grades">Grades</option>
// //             <option value="Behavior">Behavior</option>
// //             {/* Add more metrics if needed */}
// //           </select>
// //         </div>

// //         {/* Observation Input */}
// //         <div className="mb-4">
// //           <input
// //             type="text"
// //             placeholder="Student Name"
// //             className="w-full p-2 border rounded mb-2"
// //             disabled={!selectedStudent}
// //           />
// //           <textarea
// //             value={observation}
// //             onChange={handleObservationChange}
// //             placeholder="Write your observation here..."
// //             className="w-full p-2 border rounded"
// //             disabled={!selectedStudent}
// //           ></textarea>
// //         </div>

// //         <button
// //           onClick={handleSubmitObservation}
// //           className="bg-blue-600 text-white p-3 rounded w-full"
// //           disabled={!selectedStudent || !observation}
// //         >
// //           Save Observation
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Dashboard;










// // // import { useState, useEffect } from 'react';
// // // import axios from 'axios';

// // // const Dashboard = () => {
// // //   const [students, setStudents] = useState([]);

// // //   useEffect(() => {
// // //     const fetchStudents = async () => {
// // //       try {
// // //         const response = await axios.get('http://localhost:4000/api/students/getAllStudents');
// // //         setStudents(response.data);
// // //       } catch (error) {
// // //         console.error(error);
// // //       }
// // //     };

// // //     fetchStudents();
// // //   }, []);

// // //   return (
// // //     <div className="container mx-auto p-4">
// // //       <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
// // //       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// // //         {students.map(student => (
// // //           <div key={student._id} className="card p-4 border border-gray-200 rounded-lg">
// // //             <h2 className="text-lg">{student.name}</h2>
// // //             <p>Metrics and observations...</p>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Dashboard;

import { useState, useEffect } from 'react';
import axios from 'axios';
import kid1 from "../assets/kid1.jpg";

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState('');
  const [observations, setObservations] = useState('');
  const [selectedStudent, setSelectedStudent] = useState('');

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/students/getAllStudents');
        setStudents(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStudents();
  }, []);

  const handleSaveObservation = () => {
    console.log(`Saving observation for ${selectedStudent}: ${observations}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
      
      {/* Student Carousel */}
      <div className="mb-6">
        <div className="flex overflow-x-auto space-x-6 animate-marquee">
          {students.map(student => (
            <div key={student._id} className="flex-shrink-0 w-32 h-32 text-center">
              <img
                src={student.picture || kid1} 
                alt={student.name}
                className="w-full h-full rounded-full object-cover"
              />
              <div className="mt-2 text-sm">{student.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Subject Selection */}
      <div className="mb-6">
        <label htmlFor="subject" className="block mb-2">Select Subject</label>
        <select
          id="subject"
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="">Select a Subject</option>
          <option value="Math">Math</option>
          <option value="Science">Science</option>
          <option value="History">History</option>
        </select>
      </div>

      {/* Metrics and Observation */}
      <div className="mb-6">
        <label htmlFor="studentName" className="block mb-2">Student Name</label>
        <input
          id="studentName"
          type="text"
          value={selectedStudent}
          onChange={(e) => setSelectedStudent(e.target.value)}
          placeholder="Enter Student's Name"
          className="p-2 border border-gray-300 rounded mb-4 w-full"
        />
        
        <label htmlFor="observation" className="block mb-2">Observation</label>
        <textarea
          id="observation"
          value={observations}
          onChange={(e) => setObservations(e.target.value)}
          placeholder="Write your observation here..."
          className="p-2 border border-gray-300 rounded mb-4 w-full"
        />

        <button
          onClick={handleSaveObservation}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Save Observation
        </button>
      </div>
    </div>
  );
};

export default Dashboard;