const ViewAppointmentDetail = () => {
    const appointment = {
        patientName: "John Doe",
        phone: "0905XXXXXX",
        email: "john.doe@example.com",
        date: "2024-09-30T14:00:00Z",
        time: "2024-09-30T14:00:00Z",
        location: "123 Main St, City",
        notes: "Please arrive 15 minutes early."
    };
    return (
        <div className="container mx-auto mt-10 p-5 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Appointment Details</h2>
            <img
                src="https://i.pinimg.com/564x/25/ae/e9/25aee98c000020ab1bf4b35c80290d19.jpg"
                alt={`${appointment.patientName}'s profile`}
                className="w-24 h-24 rounded-full border-2 border-blue-500 mr-4 mb-4"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-700">Patient Information</h3>
                    <p><strong>Name:</strong> {appointment.patientName}</p>
                    <p><strong>Phone:</strong> {appointment.phone}</p>
                    <p><strong>Email:</strong> {appointment.email}</p>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-700">Appointment Information</h3>
                    <p><strong>Date:</strong> {new Date(appointment.date).toLocaleDateString()}</p>
                    <p><strong>Time:</strong> {new Date(appointment.time).toLocaleTimeString()}</p>
                    <p><strong>Location:</strong> {appointment.location}</p>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg col-span-1 md:col-span-2">
                    <h3 className="font-semibold text-gray-700">Notes</h3>
                    <p>{appointment.notes || "No additional notes."}</p>
                </div>
            </div>

            <div className="mt-6">
                <a href="/appointments" className="text-blue-600 hover:underline">Back to Appointments</a>
            </div>
        </div>
    )
}
export default ViewAppointmentDetail;