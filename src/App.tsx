import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AuthProvider } from 'providers/AuthProvider';
import Login from 'pages/Login';
import LandingPage from 'pages/LandingPage';
import Register from 'pages/Register';
import QueuePage from 'pages/QueuePage';
import RequestPage from 'pages/RequestPage';
import EditProfile from 'pages/EditProfile';
import PrescriptionPage from 'pages/PrescriptionPage';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/queue" element={<QueuePage />} />
          <Route path="/request" element={<RequestPage />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/prescription" element={<PrescriptionPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
