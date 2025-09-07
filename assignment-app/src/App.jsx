import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./NavBar.jsx"
import Home from "./Home.jsx"
import Search from "./Search.jsx"

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
      </div>
      <hr />
      <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
