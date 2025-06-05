import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Sobre from "./pages/Sobre/Sobre";
import FAQ from "./pages/FAQ/FAQ";

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" Component={ Home }/>
            <Route path="/sobre" Component={ Sobre }/>
            <Route path="/faq" Component={ FAQ }/>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
