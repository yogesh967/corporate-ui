import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import "./post-style.css";
import axios from "axios";


const PostOffer = () => {
    const id = localStorage.getItem("empid");
    const postOffer = async (e) => {
        e.preventDefault();
        console.log(e.target);
        let data = {
            closedDate: e.target[2].value,
            empId: id,
            likes: 0,
            offerCategory: {
                offCategoryId: e.target[3].value,
                offCategoryName: ""
            },
            offerName: e.target[0].value,
            openedDate: e.target[1].value,
        };
        console.log(data);
        axios.post("http://localhost:8003/offer/saveoffer", data, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json",
            }
        }).then((res) => {
            console.log(res.data);
            alert("Offer posted successfully!");
        })

    }
    return (
        <>
            <Navbar />
            <Sidebar />
            <div className="post-div pl-4">
                <h1 className='pt-4 pb-3'>Post an Offer</h1>
                <form onSubmit={postOffer}>
                    <table class="table">
                        <tbody>
                            <tr className="form-group">
                                <th>Offer Name</th>
                                <td>
                                    <input type="text" class="form-control" id="offerName" placeholder="Enter offer name" required />
                                </td>
                            </tr>
                            <tr className="form-group">
                                <th>Open Date</th>
                                <td><input type="date" class="form-control" id="open_date" required /></td>
                            </tr>

                            <tr className="form-group">
                                <th>Close Date</th>
                                <td><input type="date" class="form-control" id="close_date" required /></td>
                            </tr>

                            <tr className="form-group">
                                <th>Category</th>
                                <td>
                                    <select name="offerCategoryId" class="form-control"
                                        id="selectcategory" required>
                                        <option value="">Choose Category</option>
                                        <option value="120">Homes</option>
                                        <option value="121">Vehicles</option>
                                        <option value="122">Electronics</option>
                                        <option value="123">Home Appliances</option>
                                        <option value="124">Mobiles & Tablets</option>
                                        <option value="125">Furniture & Decors</option>
                                        <option value="126">Commercial Rentals</option>
                                    </select>
                                </td>
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