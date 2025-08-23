import React from "react"

export function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div className="container-fluid">
                <div className="navbar-nav">
                    <Link className="nav-link" to="/">User Behaviour Data</Link>
                    <Link className="nav-link" to="/search">Search Through Dataset</Link>
                </div>
            </div>
        </nav>
    )
}