
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, ClipboardList, FileText, MessageSquare, User, Settings, ChevronDown } from 'lucide-react';

const Sidebar = () => {
  const [openAppointments, setOpenAppointments] = useState(false);

  return (
    <div className="w-64 h-screen bg-white border-r flex flex-col justify-between">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-blue-600 mb-10">MediBook</h1>
        <nav className="flex flex-col gap-4 text-gray-700">
          <Link to="/" className="flex items-center gap-2 hover:text-blue-600">
            <CalendarDays size={18} /> Dashboard
          </Link>
          <div>
            <button
              onClick={() => setOpenAppointments(!openAppointments)}
              className="flex items-center w-full gap-2 hover:text-blue-600"
            >
              <ClipboardList size={18} /> Appointments
              <ChevronDown size={16} className={`ml-auto transform ${openAppointments ? 'rotate-180' : ''}`} />
            </button>
            {openAppointments && (
              <div className="ml-6 mt-2 flex flex-col gap-2 text-sm text-gray-600">
                <Link to="/past" className="hover:text-blue-600">Past Appointments</Link>
                <Link to="/upcoming" className="hover:text-blue-600">Upcoming Appointments</Link>
              </div>
            )}
          </div>
          <Link to="#" className="flex items-center gap-2 hover:text-blue-600">
            <FileText size={18} /> Medical Records
          </Link>
          <Link to="#" className="flex items-center gap-2 hover:text-blue-600">
            <MessageSquare size={18} /> Messages
          </Link>
          <Link to="#" className="flex items-center gap-2 hover:text-blue-600">
            <User size={18} /> Find Doctors
          </Link>
          <Link to="#" className="flex items-center gap-2 hover:text-blue-600">
            <User size={18} /> Profile
          </Link>
          <Link to="#" className="flex items-center gap-2 hover:text-blue-600">
            <Settings size={18} /> Settings
          </Link>
        </nav>
      </div>
      <div className="bg-gray-50 p-4 border-t">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-semibold">BY</div>
          <div>
            <p className="font-semibold text-sm">Bipin Yogi</p>
            <p className="text-xs text-gray-500">bipinyogi5@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
