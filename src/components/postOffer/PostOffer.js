import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import "./post-style.css";

const PostOffer = () => {
    return (
        <>
            <Navbar />
            <Sidebar />
            <div className="post-div pl-4">
                <h1 className='pt-4 pb-3'>Post an Offer</h1>
                <form action="#">
                    <table class="table">
                        <tbody>
                            <tr className="form-group">
                                <th>Name</th>
                                <td>
                                    <input type="text" class="form-control" id="offerName" placeholder="Enter offer name" required />
                                </td>
                            </tr>
                            <tr className="form-group">
                                <th>Description</th>
                                <td><input type="text" class="form-control" id="desc" placeholder="Enter offer description" required /></td>
                            </tr>

                            <tr className="form-group">
                                <th>Category</th>
                                <td><input type="text" class="form-control" id="category" placeholder="Enter offer category" required /></td>
                            </tr>

                            <Link to="/" className="btn btn-dark mr-3 mt-4">Go back</Link>
                            <button type="submit" className="btn btn-success mt-4">Post</button>
                        </tbody>

                    </table>
                </form>

            </div>
        </>
    );
};

export default PostOffer;