import React from "react";
import NavBar from "./NavBar.jsx"
import Home from "./Home.jsx"
import Search from "./Search.jsx"

function App() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <hr />
      <div>
        <Home />
      </div>
      <div>
        <Search />
      </div>
    </div>
  );
}

export default App;
