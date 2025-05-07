import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Search, X } from 'lucide-react';
import { doctors } from '../data/mockData';
import { EditButton, DeleteButton } from '../components/EditButton';
import { DeleteModal } from '../components/Deletemodel';

function Doctors() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [doctorToDelete, setDoctorToDelete] = useState(null);
  const [newDoctor, setNewDoctor] = useState({
    name: '',
    specialty: '',
    email: '',
    phone: '',
    address: '',
    qualifications: '',
    experience: 0
  });

  const filteredDoctors = doctors.filter(doctor =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddDoctor = (e) => {
    e.preventDefault();
    alert('Doctor added successfully!');
    setShowAddModal(false);
    setNewDoctor({
      name: '',
      specialty: '',
      email: '',
      phone: '',
      address: '',
      qualifications: '',
      experience: 0
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Manage Doctors</h1>
        <button
          className="btn btn-primary flex items-center gap-2"
          onClick={() => setShowAddModal(true)}
        >
          <Plus className="h-5 w-5" />
          <span>Add Doctor</span>
        </button>
      </div>

      <div className="flex items-center bg-white rounded-lg border border-gray-300 px-3 py-2 w-full max-w-md">
        <Search className="h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search by name or specialty..."
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
              <th>Specialty</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Experience</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredDoctors.length > 0 ? (
              filteredDoctors.map(doctor => (
                <tr key={doctor.id}>
                  <td className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-700 font-medium">{doctor.name.charAt(0)}</span>
                    </div>
                    <span>{doctor.name}</span>
                  </td>
                  <td>{doctor.specialty}</td>
                  <td>{doctor.email}</td>
                  <td>{doctor.phone}</td>
                  <td>{doctor.experience} years</td>
                  <td>
                    <EditButton onClick={() => navigate(`/doctors/${doctor.id}`)} />
                    <DeleteButton onClick={() => {
                      setDoctorToDelete(doctor);
                      setShowDeleteModal(true);
                    }} />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="text-center py-4 text-gray-500">No doctors found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add Doctor Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Add New Doctor</h2>
              <button onClick={() => setShowAddModal(false)} className="text-gray-500 hover:text-gray-700">
                <X className="h-6 w-6" />
              </button>
            </div>

            <form onSubmit={handleAddDoctor} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    value={newDoctor.name}
                    onChange={e => setNewDoctor({ ...newDoctor, name: e.target.value })}
                    className="form-input bg-gray-50 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="specialty" className="form-label">Specialty</label>
                  <select
                    id="specialty"
                    value={newDoctor.specialty}
                    onChange={e => setNewDoctor({ ...newDoctor, specialty: e.target.value })}
                    className="form-input bg-gray-50 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select Specialty</option>
                    <option value="Cardiology">Cardiology</option>
                    <option value="Dermatology">Dermatology</option>
                    <option value="Neurology">Neurology</option>
                    <option value="Pediatrics">Pediatrics</option>
                    <option value="Orthopedics">Orthopedics</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={newDoctor.email}
                    onChange={e => setNewDoctor({ ...newDoctor, email: e.target.value })}
                    className="form-input bg-gray-50 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    value={newDoctor.phone}
                    onChange={e => setNewDoctor({ ...newDoctor, phone: e.target.value })}
                    className="form-input bg-gray-50 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="experience" className="form-label">Experience (years)</label>
                  <input
                    type="number"
                    id="experience"
                    value={newDoctor.experience}
                    onChange={e => setNewDoctor({ ...newDoctor, experience: parseInt(e.target.value) })}
                    className="form-input bg-gray-50 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    min="0"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="address" className="form-label">Address</label>
                <textarea
                  id="address"
                  value={newDoctor.address}
                  onChange={e => setNewDoctor({ ...newDoctor, address: e.target.value })}
                  className="form-input bg-gray-50 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={3}
                />
              </div>

              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="btn bg-gray-200 text-gray-800 hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Add Doctor
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && doctorToDelete && (<DeleteModal
  doctorToDelete={doctorToDelete}
  setShowDeleteModal={setShowDeleteModal}
  handleConfirmDelete={(doctor) => {
    alert(`Doctor ${doctor.name} deleted`);
    setDoctorToDelete(null);
    // TODO: Remove doctor from list or make API call
  }}
/>
      )}
    </div>
  );
}

export default Doctors;
