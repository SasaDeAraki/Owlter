import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Sobre from "./pages/Sobre/Sobre";

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" Component={ Sobre }/>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
