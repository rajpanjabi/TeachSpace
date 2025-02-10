import React from 'react'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import StudentProfile from './pages/StudentProfile';
import Landing from './pages/LandingPage';

const App = () => {
  return (
    <Router>
    <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-grow">
    
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/:teacherName" element={<Dashboard />} />
        <Route path="/student/:id" element={<StudentProfile />} />
      </Routes>
      </main>
      <Footer />
    </div>
    </Router>
    
  )
}

export default App


