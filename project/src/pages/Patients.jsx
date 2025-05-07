import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Search, X } from 'lucide-react';
import { patients } from '../data/mockData';
import {EditButton,DeleteButton} from '../components/EditButton';
import { DeleteModal } from '../components/Deletemodel';
import AddPatientModal from '../components/Createpatientform';

function Patients() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [patientToDelete, setPatientToDelete] = useState(null);
  const [newPatient, setNewPatient] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    dob: '',
    gender: 'male',
    bloodGroup: '',
    allergies: '',
    medicalHistory: ''
  });

  const filteredPatients = patients.filter(patient => 
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddPatient = (e) => {
    e.preventDefault();
    alert('Patient added successfully!');
    setShowAddModal(false);
    setNewPatient({
      name: '',
      email: '',
      phone: '',
      address: '',
      dob: '',
      gender: 'male',
      bloodGroup: '',
      allergies: '',
      medicalHistory: ''
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Manage Patients</h1>
        <button 
          className="btn btn-primary flex items-center gap-2"
          onClick={() => setShowAddModal(true)}
        >
          <Plus className="h-5 w-5" />
          <span>Add Patient</span>
        </button>
      </div>
      
      <div className="flex items-center bg-white rounded-lg border border-gray-300 px-3 py-2 w-full max-w-md">
        <Search className="h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search by name or email..."
          className="ml-2 outline-none flex-1"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>
      
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Gender</th>
              <th>Blood Group</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.length > 0 ? (
              filteredPatients.map(patient => (
                <tr key={patient.id}>
                  <td className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                      <span className="text-orange-700 font-medium">{patient.name.charAt(0)}</span>
                    </div>
                    <span>{patient.name}</span>
                  </td>
                  <td>{patient.email}</td>
                  <td>{patient.phone}</td>
                  <td className="capitalize">{patient.gender}</td>
                  <td>{patient.bloodGroup || 'Not set'}</td>
                  <td>
                    <EditButton onClick={() => navigate(`/patients/${patient.id}`)} />
                    <DeleteButton onClick={() => {
                      setPatientToDelete(patient);
                      setShowDeleteModal(true);
                    }} />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="text-center py-4 text-gray-500">No patients found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {showAddModal && (
        <AddPatientModal
        showAddModal={showAddModal}
        setShowAddModal={setShowAddModal}
        newPatient={newPatient}
        setNewPatient={setNewPatient}
        handleAddPatient={handleAddPatient}
      />
      )}
      {/* Delete Confirmation Modal */}
            {showDeleteModal && patientToDelete && (<DeleteModal
        doctorToDelete={patientToDelete}
        setShowDeleteModal={setShowDeleteModal}
        handleConfirmDelete={(doctor) => {
          alert(`Patient ${doctor.name} deleted`);
          setDoctorToDelete(null);
        }}
      />
            )}
    </div>
  );
}

export default Patients;