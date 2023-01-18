import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { LoginContext } from "../Context/LoginContext";
function Navbar(props) {
    // Add the code to remove the login link if the user is logged in
    return (
        <nav id="topnav">
            <div className="navbar">
                <ul className="nav-item">{/* display the links here */}</ul>
            </div>
        </nav>
    );
}

export default Navbar;
