import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from 'pages/Main';
import OtherPage from 'pages/OtherPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/other-page" element={<OtherPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
