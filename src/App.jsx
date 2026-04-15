import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { GlobalStyle } from './styles/GlobalStyles.js';
import Home from './pages/Home/Home.jsx';
import Marketing from './pages/Marketing/Marketing.jsx';
import Ugc from './pages/Ugc/Ugc.jsx';

function AnimatedRoutes() {
  const location = useLocation();

  useEffect(() => {
    const prefersReducedMotion = window
      .matchMedia('(prefers-reduced-motion: reduce)')
      .matches;

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/ugc" element={<Ugc />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <GlobalStyle />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
