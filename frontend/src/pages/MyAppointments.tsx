
import React from 'react';

const MyAppointments = () => {
  const pastAppointments = [];
  const futureAppointments = [];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Appointments</h1>
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Past Appointments</h2>
        {pastAppointments.length === 0 ? (
          <p className="text-gray-500">No appointments made in the past.</p>
        ) : (
          <ul>{pastAppointments.map((appt, index) => <li key={index}>{appt}</li>)}</ul>
        )}
      </div>
      <div>
        <h2 className="text-xl font-semibold">Upcoming Appointments</h2>
        {futureAppointments.length === 0 ? (
          <p className="text-gray-500">No appointments in the future.</p>
        ) : (
          <ul>{futureAppointments.map((appt, index) => <li key={index}>{appt}</li>)}</ul>
        )}
      </div>
    </div>
  );
};

export default MyAppointments;
