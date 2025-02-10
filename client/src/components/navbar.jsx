import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios"; // For API calls

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [teacherName, setTeacherName] = useState(null); // State for storing teacher's name
  const navigate = useNavigate();

  useEffect(() => {
    const storedTeacherName = localStorage.getItem("teacherName");

    if (storedTeacherName) {
      setIsAuthenticated(true);
      setTeacherName(storedTeacherName); // Set the teacher's name here
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  // Handle Logout
  const handleLogout = async () => {
    try {
      setIsAuthenticated(false);
      setTeacherName(null); // Reset teacher's name on logout
      localStorage.removeItem("teacherName");
      navigate("/"); // Redirect to login page after logout
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

    

  return (
    <>
      <nav className="bg-blue-600 p-4">
        <div className="flex justify-between items-center container mx-auto">
          <div className="text-white text-2xl font-semibold">
            <Link to="/">TeachSpace</Link>
          </div>

          {/* Navigation links in the center */}
          <div className="space-x-6">
            <Link to="/" className="text-white hover:text-blue-300">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-blue-300">
              About
            </Link>

            {/* Conditionally render the Dashboard link */}
            {teacherName && (
              <Link to={`/dashboard/${teacherName}`} className="text-white hover:text-blue-300">
                Dashboard
              </Link>
            )}
          </div>

          {/* Conditional render for the button */}
          <div>
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500"
              >
                Logout
              </button>
            ) : (
              <Link to="/login">
                <button className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Sign Up / Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;














// import { Link, useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios"; // For API calls

// const Navbar = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedTeacherName = localStorage.getItem("teacherName");
  
//     if (storedTeacherName) {
//       setIsAuthenticated(true);
//       // You can also navigate directly if needed
//       // navigate(`/dashboard/${storedTeacherName}`);
//     } else {
//       setIsAuthenticated(false);
//     }
//   }, []);

//   // // Check if the teacher is authenticated
//   // useEffect(() => {
//   //   const checkAuth = async () => {
//   //     try {
//   //       // Make a request to the backend to check if the token is valid
//   //       const response = await axios.get("/api/auth/checkAuth", { withCredentials: true });
//   //       if (response.status === 200) {
//   //         setIsAuthenticated(true);
//   //       }
//   //     } catch (error) {
//   //       setIsAuthenticated(false);
//   //     }
//   //   };

//   //   checkAuth();
//   // }, []);

//   // Handle Logout
//   const handleLogout = async () => {
//     try {
//     setIsAuthenticated(false);
//     localStorage.removeItem("teacherName");
//     navigate("/"); // Redirect to login page after logout


//     // try {
//     //   // Send logout request to backend to clear the cookie
//     //   await axios.post("/api/auth/logout", {}, { withCredentials: true });

//     //   // Update frontend state and redirect
//     //   setIsAuthenticated(false);
//     //   navigate("/login"); // Redirect to login page after logout
//     } catch (error) {
//       console.error("Logout error:", error);
//     }
//   };

//   return (
//     <>
//       <nav className="bg-blue-600 p-4">
//         <div className="flex justify-between items-center container mx-auto">
//           <div className="text-white text-2xl font-semibold">
//             <Link to="/">TeachSpace</Link>
//           </div>

//           {/* Navigation links in the center */}
//           <div className="space-x-6">
//             <Link to="/" className="text-white hover:text-blue-300">
//               Home
//             </Link>
//             <Link to="/about" className="text-white hover:text-blue-300">
//               About
//             </Link>
//             <Link to={`/dashboard/${storedTeacherName}`} className="text-white hover:text-blue-300">
//             Dashboard
//             </Link>
//           </div>

//           {/* Conditional render for the button */}
//           <div>
//             {isAuthenticated ? (
//               <button
//                 onClick={handleLogout}
//                 className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500"
//               >
//                 Logout
//               </button>
//             ) : (
//               <Link to="/login">
//                 <button className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-700">
//                   Sign Up / Login
//                 </button>
//               </Link>
//             )}
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;


// // import { Link } from "react-router-dom";

// // const Navbar = () => {  
// //     return (
// //         <>
// //         <nav className="bg-blue-600 p-4">
// //         <div className="flex justify-between items-center container mx-auto">
// //         <div className="text-white text-2xl font-semibold">
// //           <Link to="/">TeachSpace</Link>
// //         </div>
// //         {/* Navigation links in the center */}
// //         <div className="space-x-6">
// //           <Link to="/" className="text-white hover:text-blue-300">
// //             Home
// //           </Link>
// //           <Link to="/about" className="text-white hover:text-blue-300">
// //             About
// //           </Link>
// //         </div>
        
// //         {/* Signup/Login button on the right */}
// //         <div>
// //           <Link to="/login">
// //             <button className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-700">
// //               Sign Up / Login
// //             </button>
// //           </Link>
// //         </div>



// //         </div>
// //         </nav>

// //         </>
// //     )}

// // export default Navbar;