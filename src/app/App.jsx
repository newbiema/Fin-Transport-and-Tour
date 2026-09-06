import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import TourDetail from '../pages/tours/TourDetail';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tour/:slug" element={<TourDetail />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
