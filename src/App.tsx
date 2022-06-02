import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from 'pages/Login';
import LandingPage from 'pages/LandingPage';
import Register from 'pages/Register';
import QueuePage from 'pages/QueuePage';
import { AuthProvider } from 'providers/AuthProvider';
import RequestPage from 'pages/RequestPage';

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
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
