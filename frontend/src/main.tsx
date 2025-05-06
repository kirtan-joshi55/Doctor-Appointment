
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/index.css';
import AppointmentBooking from './pages/appointment-booking';
import PastAppointments from './pages/PastAppointments';
import UpcomingAppointments from './pages/UpcomingAppointments';
import Sidebar from './components/layout/Sidebar';

const App = () => (
  <BrowserRouter>
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<AppointmentBooking />} />
          <Route path="/past" element={<PastAppointments />} />
          <Route path="/upcoming" element={<UpcomingAppointments />} />
        </Routes>
      </div>
    </div>
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
