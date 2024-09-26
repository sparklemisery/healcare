import React, { useState } from 'react';

const ViewPatientDetail = () => {
    const [activeTab, setActiveTab] = useState('profile'); // Default active tab
    const appointments = [
        { date: '2024-09-30', time: '10:00 AM', patient: 'John Doe', status: 'Confirmed' },
        { date: '2024-09-30', time: '11:30 AM', patient: 'Jane Smith', status: 'Pending' },
        { date: '2024-09-30', time: '01:00 PM', patient: 'Emily Johnson', status: 'Cancelled' },
        { date: '2024-09-30', time: '03:00 PM', patient: 'Michael Brown', status: 'Confirmed' },
        { date: '2024-09-30', time: '04:30 PM', patient: 'Jessica Davis', status: 'Confirmed' },
    ];

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="border-b border-gray-200 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                <li className="me-2">
                    <a
                        href="#"
                        className={`inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg ${activeTab === 'profile' ? 'border-blue-600 text-blue-600 dark:text-blue-500 dark:border-blue-500' : 'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group'}`}
                        onClick={() => handleTabClick('profile')}
                    >
                        <svg
                            className={`w-4 h-4 me-2 ${activeTab === 'profile' ? 'text-blue-600 dark:text-blue-500' : 'text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300'}`}
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                        </svg>
                        Profile
                    </a>
                </li>
                <li className="me-2">
                    <a
                        href="#"
                        className={`inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg ${activeTab === 'appointment' ? 'border-blue-600 text-blue-600 dark:text-blue-500 dark:border-blue-500' : 'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group'}`}
                        onClick={() => handleTabClick('appointment')}
                        aria-current={activeTab === 'appointment' ? 'page' : undefined}
                    >
                        <svg
                            className={`w-4 h-4 me-2 ${activeTab === 'appointment' ? 'text-blue-600 dark:text-blue-500' : 'text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300'}`}
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 18 18"
                        >
                            <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                        </svg>
                        Appointment
                    </a>
                </li>
            </ul>
            {activeTab == "profile" ? <div className="container mx-auto p-4">
                {/* Profile Header */}
                <div className="flex items-center mb-4">
                    <img
                        src="https://i.pinimg.com/564x/01/e9/e7/01e9e729e6c45534c114e627ca277d57.jpg" // Replace with actual avatar path
                        alt="User Avatar"
                        className="w-24 h-24 rounded-full border-2 border-blue-600 shadow-lg"
                    />
                    <div className="ml-4">
                        <h2 className="text-2xl font-bold text-gray-800">John Doe</h2>
                        <p className="text-gray-600">"Your health, our priority."</p>
                    </div>
                </div>


                {/* User Details Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 shadow-md rounded-lg">
                        <h3 className="font-semibold text-lg text-gray-700">Contact Information</h3>
                        <p className="text-gray-600">Email: johndoe@example.com</p>
                        <p className="text-gray-600">Phone: +123 456 7890</p>
                    </div>
                    <div className="bg-white p-4 shadow-md rounded-lg">
                        <h3 className="font-semibold text-lg text-gray-700">Address</h3>
                        <p className="text-gray-600">123 Main St, City, Country</p>
                    </div>
                    {/* Add more cards for other information as needed */}
                </div>


            </div> : <div className="container mx-auto p-4">

                <div className="overflow-x-auto mt-5">
                    <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
                        <thead>
                            <tr className="bg-blue-600 text-white text-left">
                                <th className="py-3 px-4 uppercase font-semibold text-sm">Id</th>
                                <th className="py-3 px-4 uppercase font-semibold text-sm">Date</th>
                                <th className="py-3 px-4 uppercase font-semibold text-sm">Time</th>

                                <th className="py-3 px-4 uppercase font-semibold text-sm">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {appointments.map((appointment, index) => (
                                <tr key={index} className={`hover:bg-gray-100 transition duration-300 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                                    <td className="py-3 px-4 border-b border-gray-300">001</td>
                                    <td className="py-3 px-4 border-b border-gray-300">{appointment.date}</td>
                                    <td className="py-3 px-4 border-b border-gray-300">{appointment.time}</td>

                                    <td className={`py-3 px-4 border-b border-gray-300 ${appointment.status === 'Confirmed' ? 'text-green-600' : appointment.status === 'Pending' ? 'text-yellow-600' : 'text-red-600'}`}>
                                        {appointment.status}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>}

        </div>
    );
};

export default ViewPatientDetail;
