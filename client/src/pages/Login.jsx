import Card from "../components/card";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import signUpIllustration from "../assets/signup-illustration.svg";
import axios from "axios";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  const handleGoogleSignIn = () => {
    // After successful Google authentication
    navigate("/dashboard"); // Redirect to the dashboard
  };

  // Handle sign-up form submission
  const handleSignUp = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target["confirm-password"].value;
    const subjects = [];
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:4000/api/teachers/register",
        { name, email, password, subjects },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        console.log("response", response);
        const teacherName = response.data.teacher.name; // Assuming the backend returns the teacher's name
        console.log(response.data);
        console.log(teacherName);
        // Store teacherName in localStorage
        localStorage.setItem("teacherName", teacherName);

        // navigate(`/dashboard/${name}`);
        navigate(`/getstarted/${name}`);
      } else {
        console.error("Sign-up failed");
      }
    } catch (error) {
      console.error("Error during sign-up:", error);
    }
  };

  // Handle sign-in form submission
  const handleSignIn = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const response = await axios.post(
        "http://localhost:4000/api/teachers/login",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // Include cookies in the request
        }
      );

      if (response.status === 200) {
        console.log("response", response);
        const teacherName = response.data.teacher.name; // Assuming the backend returns the teacher's name
        console.log(response.data);
        console.log(teacherName);
        // Store teacherName in localStorage
        localStorage.setItem("teacherName", teacherName);

        // Navigate to the dashboard with teacherName in the URL
        navigate(`/dashboard/${teacherName}`);
      } else {
        console.error("Sign-in failed");
      }
    } catch (error) {
      alert("Invalid email or password");
      console.error("Error during sign-in:", error);
    }
  };

  // return (
  //   <>
  //     <div className="flex justify-center items-center h-screen bg-gray-800">
  //       <Card>
  //         <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">
  //           {/* {isSignUp ? "Sign Up" : "Sign In"} */}
  //         </h2>
  //         <form onSubmit={isSignUp ? handleSignUp : handleSignIn}>
  //           {isSignUp && (
  //             <div className="mb-4">
  //               <label className="block text-gray-700 mb-2" htmlFor="name">
  //                 Full Name
  //               </label>
  //               <input
  //                 type="text"
  //                 id="name"
  //                 name="name"
  //                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
  //                 placeholder="Enter your name"
  //                 required
  //               />
  //             </div>
  //           )}
  //           <div className="mb-4">
  //             <label className="block text-gray-700 mb-2" htmlFor="email">
  //               Email
  //             </label>
  //             <input
  //               type="email"
  //               id="email"
  //               name="email"
  //               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
  //               placeholder="Enter your email"
  //               required
  //             />
  //           </div>
  //           <div className="mb-4">
  //             <label className="block text-gray-700 mb-2" htmlFor="password">
  //               Password
  //             </label>
  //             <input
  //               type="password"
  //               id="password"
  //               name="password"
  //               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
  //               placeholder="Enter your password"
  //               required
  //             />
  //           </div>
  //           {isSignUp && (
  //             <div className="mb-4">
  //               <label
  //                 className="block text-gray-700 mb-2"
  //                 htmlFor="confirm-password"
  //               >
  //                 Confirm Password
  //               </label>
  //               <input
  //                 type="password"
  //                 id="confirm-password"
  //                 name="confirm-password"
  //                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
  //                 placeholder="Confirm your password"
  //                 required
  //               />
  //             </div>
  //           )}
  //           <button
  //             type="submit"
  //             className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full hover:bg-blue-500 transition-all"
  //           >
  //             {isSignUp ? "Sign Up" : "Sign In"}
  //           </button>
  //         </form>
  //         <div className="text-center mt-6">
  //           <a href="http://localhost:4000/auth/google">
  //             <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-400 transition-all w-full">
  //               Sign in with Google
  //             </button>
  //           </a>
  //         </div>
  //         <p className="mt-4 text-center text-gray-600">
  //           {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
  //           <span
  //             className="text-blue-600 cursor-pointer hover:underline"
  //             onClick={toggleSignUp}
  //           >
  //             {isSignUp ? "Sign In" : "Sign Up"}
  //           </span>
  //         </p>
  //       </Card>
  //     </div>
  //   </>
  // );
  return (
    <div className="min-h-screen  flex  justify-center md:max-w-full xl:max-w-[60%] xl:mx-auto items-center xl:gap-10">
      <div className="w-full  bg-white  overflow-hidden ">
        <div className="flex flex-col md:flex-row items-center  justify-center">
          {/* Form Section */}
          <div className="w-full xl:w-[2/3]  p-6 sm:p-8 lg:p-12">
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  {isSignUp ? "Sign up with us" : "Welcome back"}
                  {/* Sign up with us */}
                </h1>
                <p
                  className="mt-4 text-sm text-gray-600 font-medium inline-block pr-2
                 
                  "
                >
                  {isSignUp
                    ? "Already have an account?"
                    : "Don't have an account?"}
                </p>
                <span
                  className="text-green-600 hover:text-green-500 font-medium border-b-2 border-green-500 cursor-pointer text-sm"
                  onClick={toggleSignUp}
                >
                  {isSignUp ? "Sign In" : "Sign Up"}
                </span>
              </div>
            </div>

            <form
              onSubmit={isSignUp ? handleSignUp : handleSignIn}
              className="space-y-8 mt-8"
            >
              <div className="space-y-2">
                {isSignUp && (
                  <div className="space-y-2">
                    <label className="text-sm text-gray-600">
                      Select Province
                    </label>
                    <input
                      type="text"
                      placeholder="Ontario"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-colors"
                      name="province"
                    />
                  </div>
                )}

                {isSignUp && (
                  <div className="space-y-2">
                    <label className="text-sm text-gray-600">Full Name</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      name="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-colors"
                    />
                  </div>
                )}

                <div className="space-y-2">
                  <label className="text-sm text-gray-600">
                    School Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-colors"
                    name="email"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-600">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder={
                        isSignUp
                          ? "Create your password"
                          : "Enter your Password"
                      }
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-colors"
                      name="password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>

                {isSignUp && (
                  <div className="space-y-2 relative">
                    <label className="text-sm text-gray-600">
                      Confirm Password
                    </label>
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-colors"
                      name="confirm-password"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg transition-colors font-medium"
              >
                {isSignUp ? "Create Account" : "Sign In"}
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* Illustration Section */}
      <div className="hidden md:block   bg-white  ">
        <div
          className={` w-full h-full flex justify-center items-center lg:h-[130%] lg:w-[130%] `}
        >
          <img src={signUpIllustration} alt="" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Login;

// import Card from "../components/card";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const Login = () => {
//   const [isSignUp, setIsSignUp] = useState(false);
//   const navigate = useNavigate();

//   const toggleSignUp = () => {
//     setIsSignUp(!isSignUp);
//   };

//   const handleGoogleSignIn = () => {
//     // After successful Google authentication
//     navigate("/dashboard"); // Redirect to the dashboard
//   };

//   // Handle sign-up form submission
//   const handleSignUp = async (e) => {
//     e.preventDefault();
//     const name = e.target.name.value;
//     const email = e.target.email.value;
//     const password = e.target.password.value;
//     const confirmPassword = e.target["confirm-password"].value;
//     const subjects=[]
//     if (password !== confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }

//     try {
//       const response = await axios.post(
//         "http://localhost:4000/api/teachers/register",
//         { name, email, password, subjects },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       if (response.status === 200) {
//         console.log("response", response)
//         const teacherName = response.data.teacher.name; // Assuming the backend returns the teacher's name
//         console.log(response.data)
//         console.log(teacherName)
//         // Store teacherName in localStorage
//         localStorage.setItem("teacherName", teacherName);

//         navigate(`/dashboard/${name}`);
//       } else {
//         console.error("Sign-up failed");
//       }
//     } catch (error) {
//       console.error("Error during sign-up:", error);
//     }
//   };

//   // Handle sign-in form submission
//   const handleSignIn = async (e) => {
//     e.preventDefault();
//     const email = e.target.email.value;
//     const password = e.target.password.value;

//     try {
//       const response = await axios.post(
//         "http://localhost:4000/api/teachers/login",
//         { email, password },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       if (response.status === 200) {
//         console.log("response", response)
//         // const teacherName = response.data.teacher.name; // Assuming the backend returns the teacher's name
//         // console.log(response.data)
//         // console.log(teacherName)
//         // localStorage.setItem("teacherName", teacherName);
//         // const teacherName = response.data.teacher.name; // Assuming the backend returns the teacher's name
//         // Navigate to the dashboard with teacherName in the URL

//         navigate(`/dashboard/${teacherName}`);

//       } else {
//         console.error("Sign-in failed");
//       }
//     } catch (error) {
//       alert("Invalid email or password");
//       console.error("Error during sign-in:", error);
//     }
//   };

//   return (
//     <>
//       <div className="flex justify-center items-center h-screen bg-gray-800">
//         <Card>
//           <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">
//             {isSignUp ? "Sign Up" : "Sign In"}
//           </h2>
//           <form onSubmit={isSignUp ? handleSignUp : handleSignIn}>
//             {isSignUp && (
//               <div className="mb-4">
//                 <label className="block text-gray-700 mb-2" htmlFor="name">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="Enter your name"
//                   required
//                 />
//               </div>
//             )}
//             <div className="mb-4">
//               <label className="block text-gray-700 mb-2" htmlFor="email">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Enter your email"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 mb-2" htmlFor="password">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Enter your password"
//                 required
//               />
//             </div>
//             {isSignUp && (
//               <div className="mb-4">
//                 <label
//                   className="block text-gray-700 mb-2"
//                   htmlFor="confirm-password"
//                 >
//                   Confirm Password
//                 </label>
//                 <input
//                   type="password"
//                   id="confirm-password"
//                   name="confirm-password"
//                   className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="Confirm your password"
//                   required
//                 />
//               </div>
//             )}
//             <button
//               type="submit"
//               className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full hover:bg-blue-500 transition-all"
//             >
//               {isSignUp ? "Sign Up" : "Sign In"}
//             </button>
//           </form>
//           <div className="text-center mt-6">
//             <a href="http://localhost:4000/auth/google">
//               <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-400 transition-all w-full">
//                 Sign in with Google
//               </button>
//             </a>
//           </div>
//           <p className="mt-4 text-center text-gray-600">
//             {isSignUp
//               ? "Already have an account?"
//               : "Don't have an account?"}{" "}
//             <span
//               className="text-blue-600 cursor-pointer hover:underline"
//               onClick={toggleSignUp}
//             >
//               {isSignUp ? "Sign In" : "Sign Up"}
//             </span>
//           </p>
//         </Card>
//       </div>
//     </>
//   );
// };

// export default Login;

// // import Card from "../components/card";
// // import { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import axios from "axios";

// // const Login = () => {
// //   const [isSignUp, setIsSignUp] = useState(false);
// //   const navigate = useNavigate();

// //   const toggleSignUp = () => {
// //     setIsSignUp(!isSignUp);
// //   };

// //   const handleGoogleSignIn = () => {
// //     // After successful Google authentication
// //     navigate("/dashboard");   // Redirect to the dashboard
// //   };
// //   // Handle sign up form submission

// //   const handleSignUp = async (e) => {
// //     e.preventDefault();
// //     const name = e.target.name.value;
// //     const email = e.target.email.value;
// //     const password = e.target.password.value;
// //     const subjects = []; // Add subjects or handle accordingly

// //     try {
// //       const response = await axios.post(
// //         "http://localhost:4000/api/teachers/register",
// //         { name, email, password, subjects },
// //         {
// //           headers: {
// //             "Content-Type": "application/json",
// //           },
// //         }
// //       );

// //       if (response.status === 200) {
// //         navigate("/dashboard");
// //       } else {
// //         console.error("Sign up failed");
// //       }
// //     } catch (error) {
// //       console.error("Error during sign up:", error);
// //     }
// //   };

// //   const handleSignIn = async (e) => {
// //     e.preventDefault();
// //     const email = e.target.email.value;
// //     const password = e.target.password.value;

// //     try {
// //       const response = await axios.post(
// //         "http://localhost:4000/api/teachers/login",
// //         { email, password },
// //         {
// //           headers: {
// //             "Content-Type": "application/json",
// //           },
// //         }
// //       );

// //       if (response.status === 200) {
// //         navigate("/dashboard");
// //       } else {
// //         console.error("Sign-in failed");
// //       }
// //     } catch (error) {
// //       console.error("Error during sign-in:", error);
// //     }
// //   };

// //     return (
// //      <>
// //      <div className="flex justify-center items-center h-screen bg-gray-800">
// //       <Card>
// //       <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">
// //           {isSignUp ? "Sign Up" : "Sign In"}
// //         </h2>
// //         <form onSubmit={isSignUp ? handleSignUp : handleSignIn}>
// //         <div className="mb-4">
// //         <label className="block text-gray-700 mb-2" htmlFor="fullname">
// //               Full Name
// //             </label>
// //             <input
// //               type="text"
// //               id="Name"
// //               name="name"
// //               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// //               placeholder="Enter your Name"
// //             />
// //         </div>
// //         <div className="mb-4">
// //         <label className="block text-gray-700 mb-2" htmlFor="email">
// //               Email
// //             </label>
// //             <input
// //               type="email"
// //               id="email"
// //               name="email"
// //               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// //               placeholder="Enter your email"
// //             />
// //         </div>
// //         <div className="mb-4">
// //         <label className="block text-gray-700 mb-2" htmlFor="password">
// //               Password
// //             </label>
// //             <input
// //               type="password"
// //               id="password"
// //               name="password"
// //               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// //               placeholder="Enter your password"
// //             />
// //         </div>
// //         {isSignUp && (
// //             <div className="mb-4">
// //               <label className="block text-gray-700 mb-2" htmlFor="confirm-password">
// //                 Confirm Password
// //               </label>
// //               <input
// //                 type="password"
// //                 id="confirm-password"
// //                 name="confirm-password"
// //                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// //                 placeholder="Confirm your password"
// //               />
// //             </div>
// //           )}
// //           <button
// //             type="submit"
// //             className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full hover:bg-blue-500 transition-all"
// //           >
// //             {isSignUp ? "Sign Up" : "Sign In"}
// //           </button>

// //         </form>
// //         <div className="text-center mt-6">
// //           <a href="http://localhost:4000/auth/google">
// //             <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-400 transition-all w-full">
// //               Sign in with Google
// //             </button>
// //           </a>
// //         </div>
// //         <p className="mt-4 text-center text-gray-600">
// //           {isSignUp
// //             ? "Already have an account?"
// //             : "Don't have an account?"}{" "}
// //           <span
// //             className="text-blue-600 cursor-pointer hover:underline"
// //             onClick={toggleSignUp}
// //           >
// //             {isSignUp ? "Sign In" : "Sign Up"}
// //           </span>
// //         </p>

// //       </Card>

// //       </div>
// //      </>
// //     );
// //   };

// //   export default Login;
