
import React from 'react';

const PastAppointments = () => {
  const pastAppointments = [
    { id: 1, doctor: 'Dr. Smith', date: '2024-11-10' },
    { id: 2, doctor: 'Dr. Alice', date: '2024-12-05' }
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Past Appointments</h2>
      <div className="space-y-4">
        {pastAppointments.map(appt => (
          <div key={appt.id} className="bg-gray-100 rounded-lg shadow-sm p-4">
            <p className="text-lg font-medium">{appt.doctor}</p>
            <p className="text-sm text-gray-600">Date: {appt.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PastAppointments;
