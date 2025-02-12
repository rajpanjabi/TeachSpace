import React from 'react'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import StudentProfile from './pages/StudentProfile';
import Landing from './pages/LandingPage';
import AboutUs from './pages/About';

const App = () => {
  return (
    <Router>
    <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-grow">
    
      <Routes>
        <Route path="/" element={<AboutUs/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/:teacherName" element={<Dashboard />} />
        <Route path="/studentprofile/:studentName" element={<StudentProfile />} />
        {/* <Route path="/about" element={<AboutUs/>} />  */}
      </Routes>
      </main>
      <Footer />
    </div>
    </Router>
    
  )
}

export default App


