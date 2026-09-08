import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from '../pages/home/Home';
import TourDetail from '../pages/tours/TourDetail';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tour/:slug" element={<TourDetail />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}
