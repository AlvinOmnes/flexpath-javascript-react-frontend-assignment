import React from "react";
import NavBar from "./navBar.jsx"
import DataInfo from "./dataInfo.jsx"

function App() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        { <p> tag is a placeholder, You'll need to change the tag/component type later}
        <p className="navbar-brand ms-4 nav-link">User Behavior Data</p>
      </nav>*/}
      <hr />
      <div>
        <DataInfo />
      </div>
    </div>
  );
}

export default App;
