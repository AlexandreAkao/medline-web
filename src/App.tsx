import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from 'pages/LandingPage';
import OtherPage from 'pages/OtherPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/other-page" element={<OtherPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
