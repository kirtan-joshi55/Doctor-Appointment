// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";          
import Register from "./pages/Register";    
import DoctorRegister from "./pages/Doctorregister";  
import SignIn from "./pages/sign";          // careful, small 's' because file is 'sign.jsx'

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Home redirects to login */}
        <Route path="/" element={<Navigate to="/login" />} />
        
        {/* Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/doctorregister" element={<DoctorRegister />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}
