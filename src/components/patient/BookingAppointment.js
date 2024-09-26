import React, { useEffect, useState } from 'react';

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const BookingAppointment = () => {
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState();
    const [count, setCount] = useState(0);
    const [days, setDays] = useState([]);
    const [description, setDescription] = useState("");

    const data = [
        ['8am-9:30am', '8am-9:30am', '10am-12am', '8am-9:30am', '8am-9:30am'],
        ['8am-9:30am', '8am-9:30am', '8am-9:30am', '8am-9:30am'],
        ['8am-9:30am', '8am-9:30am', '8am-9:30am'],
        ['8am-9:30am', '8am-9:30am', '8am-9:30am', '8am-9:30am', '8am-9:30am'],
    ];

    const handleTabClick = (tab, index) => {
        setActiveTab(tab);
        setCount(index);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleConfirmClick = () => {
        alert(`Appointment confirmed with description: ${description}`);
    };

    useEffect(() => {
        const start = (new Date()).getDay();
        const newDay = [];
        for (let i = start; i < 7; i++) {
            newDay.push(dayNames[i]);
        }
        for (let i = 0; i < start; i++) {
            newDay.push(dayNames[i]);
        }
        setDays(newDay);
        setActiveTab(newDay[0]);
        setLoading(false);
    }, []);

    return (
        <div>
            {loading ? null : (
                <div className="border-b border-gray-200 dark:border-gray-700">
                    {/* Tabs for days of the week */}
                    <ul className="flex flex-wrap -mb-px text-sm font-medium text-center justify-center text-gray-500 dark:text-gray-400">
                        {days.map((item, index) => (
                            <li className="me-2" key={index}>
                                <a
                                    href="#"
                                    className={`inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg ${activeTab === item ? 'border-blue-600 text-blue-600 dark:text-blue-500 dark:border-blue-500' : 'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group'}`}
                                    onClick={() => handleTabClick(item, index)}
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Displaying appointments for the selected day */}
                    <div className="container mx-auto p-4 flex flex-col items-center">
                        <div className="overflow-x-auto mt-5">
                            <img src="https://i.pinimg.com/564x/84/18/9b/84189b7d9cdeadd2b7d9e739446d48ad.jpg" width="200px" className="rounded-lg shadow-md" alt="Doctor Poster" />
                        </div>
                        <div className='mt-5 grid grid-cols-3 gap-4 content-center'>
                            {count < data.length ? data[count].map((item) => {
                                return (
                                    <button
                                        type="button"
                                        className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                    >
                                        {item}
                                    </button>
                                )
                            }) : <p className="text-red-500">Doctor too busy</p>}
                        </div>

                        {/* Input field for description */}
                        <div className="mt-6 w-full max-w-md">
                            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Appointment Description</label>
                            <input
                                type="text"
                                id="description"
                                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={description}
                                onChange={handleDescriptionChange}
                            />
                        </div>

                        {/* Confirm button */}
                        <button
                            type="button"
                            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                            onClick={handleConfirmClick}
                        >
                            Confirm Appointment
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BookingAppointment;
