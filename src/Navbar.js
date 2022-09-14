import React from "react"
import "./Navbar.css"

function Navbar() {
    return(
        <nav className="navbar">
            <img className="navbar-logo" src="./react-logo.png" alt="React Logo"/>
            <h3 className="project-name">ReactFacts</h3>
            <h4 className="project-number">React Course - Project 1</h4>
        </nav>

    );
}

export default Navbar;