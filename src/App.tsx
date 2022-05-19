import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from 'pages/Login';
import LandingPage from 'pages/LandingPage';
import Register from 'pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
