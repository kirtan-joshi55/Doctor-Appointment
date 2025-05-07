export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  email: string;
  phone: string;
  address: string;
  qualifications: string;
  experience: number;
  photo?: string;
}

export interface Patient {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  dob: string;
  gender: 'male' | 'female' | 'other';
  bloodGroup?: string;
  allergies?: string;
  medicalHistory?: string;
  photo?: string;
}

export interface Appointment {
  id: string;
  patientId: string;
  doctorId: string;
  date: string;
  time: string;
  status: 'completed' | 'pending' | 'scheduled';
  notes?: string;
}

export const doctors: Doctor[] = [
  {
    id: 'd1',
    name: 'Dr. Smith',
    specialty: 'Cardiology',
    email: 'smith@medicare.com',
    phone: '(123) 456-7890',
    address: '123 Medical Dr, New York, NY',
    qualifications: 'MD, FACC',
    experience: 15
  },
  {
    id: 'd2',
    name: 'Dr. Sam',
    specialty: 'Dermatology',
    email: 'sam@medicare.com',
    phone: '(123) 456-7891',
    address: '124 Medical Dr, New York, NY',
    qualifications: 'MD, FAAD',
    experience: 10
  },
  {
    id: 'd3',
    name: 'Dr. Shyam',
    specialty: 'Pediatrics',
    email: 'shyam@medicare.com',
    phone: '(123) 456-7892',
    address: '125 Medical Dr, New York, NY',
    qualifications: 'MD, FAAP',
    experience: 12
  },
  {
    id: 'd4',
    name: 'Dr. Aayan',
    specialty: 'Neurology',
    email: 'aayan@medicare.com',
    phone: '(123) 456-7893',
    address: '126 Medical Dr, New York, NY',
    qualifications: 'MD, FAAN',
    experience: 8
  }
];

export const patients: Patient[] = [
  {
    id: 'p1',
    name: 'Kriti Joshi',
    email: 'kriti@example.com',
    phone: '(234) 567-8901',
    address: '456 Patient St, Boston, MA',
    dob: '1985-05-15',
    gender: 'female',
    bloodGroup: 'O+',
    allergies: 'Penicillin'
  },
  {
    id: 'p2',
    name: 'Kritan Joshi',
    email: 'kritan@example.com',
    phone: '(234) 567-8902',
    address: '457 Patient St, Boston, MA',
    dob: '1978-08-22',
    gender: 'male',
    bloodGroup: 'AB-'
  },
  {
    id: 'p3',
    name: 'Bibisha Sapkota',
    email: 'bibisha@example.com',
    phone: '(234) 567-8903',
    address: '458 Patient St, Boston, MA',
    dob: '1992-11-30',
    gender: 'female',
    bloodGroup: 'B+',
    medicalHistory: 'Asthma'
  },
  {
    id: 'p4',
    name: 'Subha Ghimire',
    email: 'subha@example.com',
    phone: '(234) 567-8904',
    address: '459 Patient St, Boston, MA',
    dob: '1980-02-10',
    gender: 'female',
    bloodGroup: 'A+'
  }
];

export const appointments: Appointment[] = [
  {
    id: 'a1',
    patientId: 'p1',
    doctorId: 'd1',
    date: '2025-04-21',
    time: '10:00',
    status: 'completed',
    notes: 'Regular checkup'
  },
  {
    id: 'a2',
    patientId: 'p2',
    doctorId: 'd2',
    date: '2025-04-20',
    time: '14:30',
    status: 'scheduled'
  },
  {
    id: 'a3',
    patientId: 'p3',
    doctorId: 'd3',
    date: '2025-04-19',
    time: '09:15',
    status: 'pending',
    notes: 'Follow-up appointment'
  },
  {
    id: 'a4',
    patientId: 'p4',
    doctorId: 'd4',
    date: '2025-04-25',
    time: '16:00',
    status: 'completed'
  }
];

export const getDoctor = (id: string): Doctor | undefined => {
  return doctors.find(doctor => doctor.id === id);
};

export const getPatient = (id: string): Patient | undefined => {
  return patients.find(patient => patient.id === id);
};

export const getDoctorPatients = (doctorId: string): Patient[] => {
  const doctorAppointments = appointments.filter(app => app.doctorId === doctorId);
  const patientIds = [...new Set(doctorAppointments.map(app => app.patientId))];
  return patients.filter(patient => patientIds.includes(patient.id));
};

export const getPatientAppointments = (patientId: string): Appointment[] => {
  return appointments.filter(app => app.patientId === patientId);
};

export const getRecentAppointments = (limit = 5): (Appointment & { patient: Patient, doctor: Doctor })[] => {
  return appointments
    .slice(0, limit)
    .map(appointment => {
      const patient = patients.find(p => p.id === appointment.patientId)!;
      const doctor = doctors.find(d => d.id === appointment.doctorId)!;
      return { ...appointment, patient, doctor };
    });
};

export const getStats = () => {
  return {
    doctors: doctors.length,
    patients: patients.length,
    appointments: appointments.length,
    pending: appointments.filter(a => a.status === 'pending').length
  };
};