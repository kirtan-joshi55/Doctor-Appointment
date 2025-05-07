import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserRound, Users, Stethoscope } from 'lucide-react';

function Sidebar() {
  return (
    <div className="w-64 bg-white border-r border-gray-200 h-full flex flex-col">
      <div className="p-6 border-b">
        <div className="flex items-center gap-3">
          <Stethoscope className="text-teal-600 h-8 w-8" />
          <h1 className="text-2xl font-bold text-gray-800">MediCare</h1>
        </div>
      </div>
      
      <nav className="flex-1 p-4 space-y-1">
        <NavLink to="/doctors" className={({isActive}) => `sidebar-link ${isActive ? 'active' : ''}`}>
          <UserRound className="h-5 w-5" />
          <span>Doctors</span>
        </NavLink>
        
        <NavLink to="/patients" className={({isActive}) => `sidebar-link ${isActive ? 'active' : ''}`}>
          <Users className="h-5 w-5" />
          <span>Patients</span>
        </NavLink>
      </nav>
      
      <div className="p-4 border-t">
        <div className="flex items-center gap-3 p-3">
          <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 font-medium">
            A
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">Admin</p>
            <p className="text-xs text-gray-500 truncate">admin@medicare.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;