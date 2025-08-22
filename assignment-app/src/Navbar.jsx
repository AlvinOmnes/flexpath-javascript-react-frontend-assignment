import {Link} from "react-router-dom";

function navBar () {
    return (
        <nav className="navbar navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
            <Link className="nav-link" to="/">User Behaviour Data</Link>
            <Link className="nav-link" to="/search">Search Through Dataset</Link>
            </div>
        </nav>
    )
}