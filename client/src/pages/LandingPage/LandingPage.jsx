// import Footer from "../components/footer";
// import Navbar from "../components/navbar";

// const Landing = () => {
//   return (
//     <>
//       {/* Main Landing Section */}
//       <div>
//         <section
//           className="h-screen bg-cover bg-center relative"
//           style={{ backgroundImage: 'url("https://via.placeholder.com/1500")' }}
//         >
//           <div className="absolute inset-0 bg-black opacity-50"></div>
//           <div className="relative z-10 flex justify-center items-center h-full">
//             <div className="text-center text-white px-6">
//               <h1 className="text-4xl font-bold mb-4">Welcome to TeachSpace</h1>
//               <p className="text-xl mb-6">
//                 Effortlessly Track & Share Student Progress
//               </p>
//               <a href="/login">
//                 <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition-all">
//                   Get Started
//                 </button>
//               </a>
//             </div>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// };

// export default Landing;
import React from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer";
import heroIllustration from "../../assets/hero-illustration.svg";
// import observation from "../../assets/observation.png";
// import reports from "../../assets/reports.png";
// import group from "../../assets/group.png";
// import logo from "../../asset/s/logo.png";

import "./LandingPage.css";
import Typewriter from "typewriter-effect";
import { ArrowRight, Quote, School } from "lucide-react";
import { Sparkles, ClipboardCheck, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
// import SchoolLogosMarquee from "../../components/schoolLogoMarquee/schoolLogoMarquee";

const LandingPage = () => {

  const teacherName=localStorage.getItem("teacherName");
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* <div className="hero-section flex bg-secondary">
          <section className="text-center  flex-1 p-12">
            <h1 className="text-5xl font-bold text-gray-900">
              Effortlessly Track & Share{" "}
              <span className="text-green-500">Student Progress</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Save time on observations and focus on what matters—helping
              students grow!
            </p>
            <button className="mt-6 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600">
              Register
            </button>
          </section>
          <section className="flex-1 hero-illustration">
            <img
              src={heroIllustration}
              alt="Hero Illustration"
              className="w-full h-auto"
              onError={(e) => {
                e.target.onerror = null;
                console.error("Failed to load hero illustration");
              }}
            />
          </section>
        </div> */}
        <div className="hero-section flex items-center justify-between bg-secondary min-h-[70vh] px-8 md:px-16 lg:px-24">
          <section className="flex-1 max-w-2xl py-16 lg:py-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Effortlessly Track & Share{" "}
              {/* <span className="text-green-500">Student Progress</span> */}
              <span className="text-green-500 pt-4 block">
                <Typewriter
                  options={{
                    strings: [
                      "Student Progress",
                      "Learning Goals",
                      "Class Performance",
                      "Teacher Feedback",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 30,
                    delay: 80,
                    cursor: "|",
                    wrapperClassName: "typewriter-text",
                    cursorClassName: "typewriter-cursor",
                  }}
                />
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-xl">
              Save time on observations and focus on what matters—helping
              students grow!
            </p>
            {/* <button className="mt-8 px-6 py-2 bg-green-500 text-white text-lg font-semibold rounded-lg hover:bg-green-600 transition-colors duration-300">
              Register
            </button> */}
            {/* <button className="mt-8 px-4 py-2 bg-green-500 text-white text-lg font-semibold rounded-lg hover:bg-green-600 transition-all duration-300 flex items-center gap-2 group">
              <Link to={`/dashboard/${teacherName}`}>Get Started </Link>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button> */}

            <button className="mt-8 px-4 py-2 bg-green-500 text-white text-lg font-semibold rounded-lg hover:bg-green-600 transition-all duration-300 flex items-center gap-2 group">
              <Link to={teacherName ? `/dashboard/${teacherName}` : "/login"}>Get Started</Link>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </section>

          <section className="flex-1 hero-illustration hidden md:block">
            <img
              src={heroIllustration}
              alt="Hero Illustration"
              className="w-full h-auto max-w-xl mx-auto float-animation animate-[slideIn_1s_ease-in]"
              onError={(e) => {
                e.target.onerror = null;
                console.error("Failed to load hero illustration");
              }}
            />
          </section>
        </div>
        {/* <section className="py-20 px-6">
          <h2 className="text-3xl font-semibold text-gray-800 text-center">
            Simplifying Observations, Enhancing Learning
          </h2>
          <p className="mt-2 text-center text-gray-600">
            Our platform helps teachers save time, track student progress
            efficiently, and communicate insights seamlessly.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 border rounded-lg shadow">
              <h3 className="text-xl font-semibold">Smart Observations</h3>
              <p className="text-gray-600">
                Easily capture and organize student observations with AI-powered
                suggestions.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow">
              <h3 className="text-xl font-semibold">Insightful Reports</h3>
              <p className="text-gray-600">
                Generate real-time progress reports and identify learning trends
                effortlessly.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow">
              <h3 className="text-xl font-semibold">Keep Parents Informed</h3>
              <p className="text-gray-600">
                Seamless communication with automated updates and personalized
                feedback.
              </p>
            </div>
          </div>
        </section> */}

        <section className="py-16 px-6 services ">
          <h2 className="text-3xl font-semibold text-gray-800 text-center">
            Simplifying Observations, Enhancing Learning
          </h2>
          <p className="mt-2 text-center text-gray-600 max-w-2xl mx-auto italic ">
            &quot;Our platform helps teachers save time, track student progress
            efficiently, and communicate insights seamlessly&quot;
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-16 px-10 md:px-28  ">
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition-all duration-300 bg-white">
              <div className="flex flex-col items-center">
                {/* <div className="p-3 mb-6 mr-10">
                  <img
                    src={observation}
                    alt=" Smart Observations"
                    className="w-16 h-16"
                  />
                </div> */}
                <div className="p-3 bg-green-50 rounded-full mb-6">
                  <Sparkles className="w-8 h-8 text-green-500" />
                </div>

                <h3 className="text-2xl font-semibold mb-3">
                  Smart Observations
                </h3>
                <p className="text-gray-600 text-center">
                  Easily capture and organize student observations with
                  AI-powered suggestions
                </p>
              </div>
            </div>

            <div className="p-8 border rounded-xl shadow-sm hover:shadow-md transition-all duration-300 bg-white">
              <div className="flex flex-col items-center">
                <div className="p-3 bg-green-50 rounded-full mb-6">
                  <ClipboardCheck className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">
                  Insightful Reports
                </h3>
                <p className="text-gray-600 text-center">
                  Generate real-time progress reports and identify learning
                  trends effortlessly
                </p>
              </div>
            </div>

            <div className="p-8 border rounded-xl shadow-sm hover:shadow-md transition-all duration-300 bg-white">
              <div className="flex flex-col items-center">
                <div className="p-3 bg-green-50 rounded-full mb-6">
                  <Share2 className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">
                  Keep Parents Informed
                </h3>
                <p className="text-gray-600 text-center">
                  Seamless communication with automated updates and personalized
                  feedback for parents
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-secondary py-20 flex justify-center text-center">
          <div className="container mx-auto text-center ">
            {/* Left side - Content */}
            <div className="md:w-full mb-10 md:mb-0 ">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Need Help Tracking Student Progress?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto">
                Request a demo to see how we can help you save time on
                observations, track student progress efficiently, and
                communicate insights seamlessly.
              </p>
              <button className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300 mx-auto">
                <span>Request Demo</span>
              </button>
            </div>
          </div>
        </section>

        {/* <section className="clients py-16 px-6">
          <h2 className="text-3xl font-semibold text-gray-800 text-center">
            Schools Work With Us
          </h2>
          <p className="mt-2 text-center text-gray-600">
            We have been working with some Fortune 500+ schools
          </p>
          <SchoolLogosMarquee />
        </section> */}
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
