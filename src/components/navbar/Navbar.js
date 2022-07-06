import { Link } from "react-router-dom";
import "./navbarStyle.css"

const Navbar = () => {
    return (
        <div className="header-main">
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
                <a className="navbar-brand">Corporate Classifieds</a>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/dashboard" class="nav-link">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/dash-contact" class="nav-link">Contact Us</Link>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" class="nav-link">Logout</a>
                    </li>

                </ul>
            </nav>
        </div>
    )
}

export default Navbar;

