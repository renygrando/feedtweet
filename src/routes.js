import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import MostViwed from './pages/MostViwed';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/most-viwed" element={<MostViwed />} />
    </Routes>
  );
}
