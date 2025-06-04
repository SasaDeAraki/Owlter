import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./assets/pages/Home/Home";

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" Component={ Home }/>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
