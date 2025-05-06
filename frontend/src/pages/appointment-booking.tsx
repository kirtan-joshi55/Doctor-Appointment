import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { CalendarDaysIcon, ClockIcon, CreditCardIcon, UserIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const BookAppointment = () => {
  const { id } = useParams();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [visitType, setVisitType] = useState('New Patient Visit');
  const [visitReason, setVisitReason] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const timeSlots = Array.from({ length: 8 }, (_, i) => {
    const hour = 9 + Math.floor(i / 2);
    const minute = i % 2 === 0 ? '00' : '30';
    return `${hour}:${minute}`;
  });

  const generateCalendarDays = () => {
    const days = [];
    const today = new Date();
    for (let i = 0; i < 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      days.push(date);
    }
    return days;
  };

  const handleConfirmBooking = () => {
    setIsModalOpen(true);
  };

  return (
      <div className="p-8 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Book an Appointment</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <CalendarDaysIcon className="w-6 h-6 mr-2 text-primary" />
                Select Date & Time
              </h2>
              <div className="grid grid-cols-7 gap-2 mb-6">
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                  <div key={day} className="text-center text-sm font-medium text-gray-500">
                    {day}
                  </div>
                ))}
                {generateCalendarDays().map((date, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedDate(date)}
                    className={`p-2 text-center rounded-lg transition-colors ${
                      selectedDate?.toDateString() === date.toDateString()
                        ? 'bg-blue-600 text-white'
                        : 'hover:bg-blue-100'
                    }`}
                  >
                    {date.getDate()}
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`p-3 rounded-lg border text-center transition-colors ${
                      selectedTime === time
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'border-gray-200 hover:border-blue-400'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <UserIcon className="w-6 h-6 mr-2 text-primary" />
                Visit Details
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Visit Type</label>
                  <select
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                    value={visitType}
                    onChange={(e) => setVisitType(e.target.value)}
                  >
                    <option>New Patient Visit</option>
                    <option>Follow-up Visit</option>
                    <option>Consultation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Reason for Visit</label>
                  <textarea
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                    rows={3}
                    placeholder="Please describe your symptoms or reason for visit"
                    value={visitReason}
                    onChange={(e) => setVisitReason(e.target.value)}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Doctor Information</h2>
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-xl font-bold">DSJ</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Dr. Sarah Johnson</h3>
                  <p className="text-blue-600">Cardiology</p>
                  <p className="text-sm text-gray-600">MD, FACC</p>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Specializing in cardiovascular health with a focus on preventative care and heart disease management.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Appointment Summary</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CalendarDaysIcon className="w-5 h-5 text-gray-400 mr-3" />
                  <div>
                    <p className="text-sm text-gray-600">Date</p>
                    <p className="font-medium">
                      {selectedDate ? selectedDate.toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      }) : 'Not selected'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <ClockIcon className="w-5 h-5 text-gray-400 mr-3" />
                  <div>
                    <p className="text-sm text-gray-600">Time</p>
                    <p className="font-medium">{selectedTime || 'Not selected'}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <CreditCardIcon className="w-5 h-5 text-gray-400 mr-3" />
                  <div>
                    <p className="text-sm text-gray-600">Visit Fee</p>
                    <p className="font-medium">$150</p>
                  </div>
                </div>
              </div>
              <button
                onClick={handleConfirmBooking}
                disabled={!selectedDate || !selectedTime}
                className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
        <Transition appear show={isModalOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={() => setIsModalOpen(false)}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <div className="flex justify-center mb-4">
                      <CheckCircleIcon className="h-12 w-12 text-green-500" />
                    </div>
                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900 text-center">
                      Appointment Confirmed!
                    </Dialog.Title>
                    <div className="mt-4">
                      <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                        <div>
                          <p className="text-sm text-gray-500">Doctor</p>
                          <p className="font-medium">Dr. Sarah Johnson - Cardiology</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Date & Time</p>
                          <p className="font-medium">
                            {selectedDate?.toLocaleDateString('en-US', {
                              weekday: 'long',
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })} at {selectedTime}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Visit Type</p>
                          <p className="font-medium">{visitType}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Visit Fee</p>
                          <p className="font-medium">$150</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6">
                      <button
                        type="button"
                        className="w-full inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none"
                        onClick={() => setIsModalOpen(false)}
                      >
                        Done
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
  );
};

export default BookAppointment;