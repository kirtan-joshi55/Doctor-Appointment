
import React from 'react';

const UpcomingAppointments = () => {
  const upcomingAppointments = [
    { id: 1, doctor: 'Dr. Kevin', date: '2025-06-01' },
    { id: 2, doctor: 'Dr. Rose', date: '2025-06-15' }
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Upcoming Appointments</h2>
      <div className="space-y-4">
        {upcomingAppointments.map(appt => (
          <div key={appt.id} className="bg-green-50 rounded-lg shadow-sm p-4 border border-green-200">
            <p className="text-lg font-medium">{appt.doctor}</p>
            <p className="text-sm text-green-700">Scheduled for: {appt.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingAppointments;
