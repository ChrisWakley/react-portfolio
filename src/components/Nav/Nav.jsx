import "./NavStyling/NavMain.scss";
import React from "react";
// import { NavLink } from "react-router-dom";

const Nav = () => {

    return(
        <div className="nav">
                    <a href="#">Home</a> 
                    <a href="#">About Me</a> 
                    <a href="#">Projects</a> 
                    <a href="#">Skills</a> 
                    <a href="#">Experience</a> 
                    <a href="#">Contact Me</a> 
        </div>
    )
}

export default Nav;