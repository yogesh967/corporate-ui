import { Link } from "react-router-dom";
import Header from "../header/Header";

const HomePage = () => {
    return (
        <>
            <Header />
            <div className="d-flex align-items-center min-vh-100">
                <div class="container text-center">
                    <h1>Welcome to Corporate Classifieds</h1><br />
                    <h6>Your personal online exchange</h6><br />
                    <Link to="/login" className="btn btn-success">Login</Link>
                </div>
            </div>
        </>
    )
}

export default HomePage;