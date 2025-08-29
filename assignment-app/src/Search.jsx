import React from "react"

export default function Search() {
    return (
        <div className="dropdown">
            <button>
            </button>
            <ul className="dropdown-menu">
                <li><button className="dropdown-item" type="button">model</button></li>
                <li><button className="dropdown-item" type="button">gender</button></li>
                <li><button className="dropdown-item" type="button">operatingSystem</button></li>
                <li><button className="dropdown-item" type="button">behaviorClass</button></li>
            </ul>
        </div>
    );
}