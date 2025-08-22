import React from "react";
import navBar from "./navBar.jsx"
import dataInfo from "./dataInfo.jsx"

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        {/* <p> tag is a placeholder, You'll need to change the tag/component type later*/}
        <p className="navbar-brand ms-4 nav-link">User Behavior Data</p>
      </nav>
      <hr />
      <p>
        //dataset-information
      </p>
    </div>
  );
}

export default App;
