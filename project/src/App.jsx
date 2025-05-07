import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Doctors from './pages/Doctors';
import Patients from './pages/Patients';
import DoctorEdit from './pages/DoctorEdit';
import PatientEdit from './pages/PatientEdit';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Doctors />} />
        <Route path="doctors" element={<Doctors />} />
        <Route path="doctors/:id" element={<DoctorEdit />} />
        <Route path="patients" element={<Patients />} />
        <Route path="patients/:id" element={<PatientEdit />} />
      </Route>
    </Routes>
  );
}

export default App;