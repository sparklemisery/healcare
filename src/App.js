import logo from './logo.svg';
import './App.css';
import ViewPatient from './components/ViewPatient';
import SideBar from './components/SideBar';
import ViewPatientDetail from './components/ViewPatientDetail';
import ViewAppointment from './components/ViewAppointment';
import ViewAppointmentDetail from './components/ViewAppointmentDetail';
import ViewFeedback from './components/ViewFeedback';
import AppointmentHistory from './components/patient/AppointmentHistory';
import BookingAppointment from './components/patient/BookingAppointment';
function App() {
  return (
    <div className="App">
      <SideBar />
      <div class="p-4 sm:ml-64">
        <BookingAppointment />
      </div>

    </div>
  );
}

export default App;
