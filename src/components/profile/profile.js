import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import axios from "axios";
import { useEffect, useState } from 'react';

import "./profile-style.css";

const MyProfile = () => {
    const [item, setItem] = useState({
        empName: "", empEmail: ""
    });

    const [item2, setItem2] = useState(0);
    useEffect(() => {
        const id = localStorage.getItem("empid");
        console.log(localStorage.getItem("token"));
        let req = {
            method: "get",
            url: `http://localhost:8014/employee/viewprofile/${id}`,
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json",
            }

        }
        axios(req)
            .then((res) => {
                setItem(res.data);
            })
            .catch((err) => {
                console.log(err);
            });



        return () => {

        }
    }, []);

    useEffect(() => {
        const id = localStorage.getItem("empid");
        console.log(localStorage.getItem("token"));
        let req = {
            method: "get",
            url: `http://localhost:8090/points/getpointsbyemp/${id}`,
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json",
            }

        }
        axios(req)
            .then((res) => {
                setItem2(res.data);
            })
            .catch((err) => {
                console.log(err);
            });



        return () => {

        }
    }, [])
    return (
        <>
            <Navbar />
            <Sidebar />
            <div className="profile-div pl-4">
                <h1 className='pt-4 pb-3'>My Profile</h1>
                <table class="table table-striped">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col" className="w-25">Properties</th>
                            <th scope="col">value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Name</th>
                            <td>{item.empName}</td>
                        </tr>
                        <tr>
                            <th scope="row">Department</th>
                            <td>{item.empDepartment}</td>
                        </tr>

                        <tr>
                            <th scope="row">Gender</th>
                            <td>{item.empGender}</td>
                        </tr>

                        <tr>
                            <th scope="row">Age</th>
                            <td>{item.empAge}</td>
                        </tr>

                        <tr>
                            <th scope="row">Contact Number</th>
                            <td>{item.empContact}</td>
                        </tr>

                        <tr>
                            <th scope="row">Email</th>
                            <td>{item.empEmail}</td>
                        </tr>

                        <tr>
                            <th scope="row">Points Gained</th>
                            <td>{item2}</td>
                        </tr>

                    </tbody>
                </table>
            </div>

        </>
    );
};

export default MyProfile;