import React from "react"

export default function Search() {
    //const filterTypeOptions = ["gender", "operatingSystem", "model", "behaviorclass"];

    //filterTypeOptions.map(item => <li>{item}</li>)
    
    return (
        <div className="dropdown">
            <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown">
                Dropdown button
            </button>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" type="button">model</a></li>
                <li><button className="dropdown-item" type="button">gender</button></li>
                <li><button className="dropdown-item" type="button">operatingSystem</button></li>
                <li><button className="dropdown-item" type="button">behaviorClass</button></li>
            </ul>
        </div>
    );
}