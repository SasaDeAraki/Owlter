import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from "./pages/Home/Home";
import Sobre from "./pages/Sobre/Sobre";
import FAQ from "./pages/FAQ/FAQ";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { useEffect } from 'react';

function AnimatedRoutes() {
  const location = useLocation();

  // Para rolar pro topo quando mudar de rota
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <AnimatedRoutes />
      <Footer />
    </Router>
  );
}

export default App;
