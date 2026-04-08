import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePages';
import DetailPage from './pages/DetailPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/restaurant/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
