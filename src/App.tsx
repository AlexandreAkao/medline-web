import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { AuthProvider } from 'providers/AuthProvider';
import Login from 'pages/Login';
import LandingPage from 'pages/LandingPage';
import Register from 'pages/Register';
import QueuePage from 'pages/QueuePage';
import RequestPage from 'pages/RequestPage';
import EditProfile from 'pages/EditProfile';
import PrescriptionPage from 'pages/PrescriptionPage';
import EmployeePatienteCare from 'pages/EmployeePatienteCare';
import EmployeePrescription from 'pages/EmployeePrescription';
import EmployeePrescriptionDetails from 'pages/EmployeePrescriptionDetails';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ToastContainer />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/queue" element={<QueuePage />} />
          <Route path="/request" element={<RequestPage />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/prescription" element={<PrescriptionPage />} />
          <Route path="/employee/patiente-care" element={<EmployeePatienteCare />} />
          <Route path="/employee/prescription" element={<EmployeePrescription />} />
          <Route path="/employee/prescription-details" element={<EmployeePrescriptionDetails />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
