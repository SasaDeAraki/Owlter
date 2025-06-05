import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home/Home";
import Sobre from "./pages/Sobre/Sobre";
import FAQ from "./pages/FAQ/FAQ";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (

    <Router>
      <Header />
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </div>
      <Footer></Footer>
    </Router>

  );
}

export default App;
