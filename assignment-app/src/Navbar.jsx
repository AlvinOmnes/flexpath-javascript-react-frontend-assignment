import React from "react"

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className = "navbar-brand ms-4 nav-link" href="/">User Behavior Data</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/search">Search Through Dataset</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}