import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Save } from 'lucide-react';
import { getPatient } from '../data/mockData';

function PatientEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (id) {
      const patientData = getPatient(id);
      if (patientData) {
        setPatient(patientData);
      }
      setLoading(false);
    }
  }, [id]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (patient) {
      setPatient({ ...patient, [name]: value });
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Patient ${patient?.name} information updated!`);
    navigate('/patients');
  };
  
  if (loading) {
    return <div className="flex items-center justify-center h-64">Loading...</div>;
  }
  
  if (!patient) {
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Patient Not Found</h2>
        <button 
          onClick={() => navigate('/patients')}
          className="btn btn-primary"
        >
          Back to Patients
        </button>
      </div>
    );
  }
  
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <button 
          onClick={() => navigate('/patients')}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <h1 className="text-3xl font-bold text-gray-800">Edit Patient Profile</h1>
      </div>
      
      <form onSubmit={handleSubmit} className="edit-form max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={patient.name}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={patient.email}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="phone" className="form-label">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={patient.phone}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="dob" className="form-label">Date of Birth</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={patient.dob}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="gender" className="form-label">Gender</label>
            <select
              id="gender"
              name="gender"
              value={patient.gender}
              onChange={handleChange}
              className="form-input"
              required
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="bloodGroup" className="form-label">Blood Group</label>
            <select
              id="bloodGroup"
              name="bloodGroup"
              value={patient.bloodGroup || ''}
              onChange={handleChange}
              className="form-input"
            >
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="address" className="form-label">Address</label>
          <textarea
            id="address"
            name="address"
            value={patient.address}
            onChange={handleChange}
            className="form-input"
            rows={2}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="medicalHistory" className="form-label">Medical History</label>
          <textarea
            id="medicalHistory"
            name="medicalHistory"
            value={patient.medicalHistory || ''}
            onChange={handleChange}
            className="form-input"
            rows={3}
          />
        </div>
        
        <div className="flex justify-end gap-4 mt-8">
          <button 
            type="button" 
            onClick={() => navigate('/patients')}
            className="btn bg-gray-200 text-gray-800 hover:bg-gray-300"
          >
            Cancel
          </button>
          <button 
            type="submit" 
            className="btn btn-primary flex items-center gap-2"
          >
            <Save className="h-5 w-5" />
            <span>Save Changes</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default PatientEdit;