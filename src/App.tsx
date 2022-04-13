import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from 'pages/Main';
import OtherPage from 'pages/OtherPage';
import Header from 'components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/other-page" element={<OtherPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
