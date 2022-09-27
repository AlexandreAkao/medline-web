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
import Loader from 'components/Loader';
import { useLoader } from 'hooks/useLoader';
import NotFound from 'pages/NotFound';

function App() {
  const { isLoading } = useLoader();

  return (
    <BrowserRouter>
      <AuthProvider>
        <ToastContainer />
        <Loader isVisible={isLoading} />

        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="queue" element={<QueuePage />} />
          <Route path="request" element={<RequestPage />} />
          <Route path="edit-profile" element={<EditProfile />} />
          <Route path="prescription" element={<PrescriptionPage />} />
          <Route path="employee">
            <Route path="patiente-care" element={<EmployeePatienteCare />} />
            <Route path="prescription" element={<EmployeePrescription />} />
            <Route path="prescription-details/:id" element={<EmployeePrescriptionDetails />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
