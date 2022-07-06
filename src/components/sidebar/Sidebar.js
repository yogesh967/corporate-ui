import './sidebar.css';
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div id="wrapper">
            <div id="sidebar-wrapper">
                <ul className="sidebar-nav">
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/profile">My Profile</Link>
                    </li>
                    <li>
                        <Link to="/post-offer">Post an offer</Link>
                    </li>
                    <li>
                        <Link to="/my-offer">My offers</Link>
                    </li>
                    <li>
                        <Link to="/recent-liked">View recently liked offers</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;