import "./NavStyling/NavMain.scss";
import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div className='nav'>
            <NavLink to={"/"} className='nav__link nav__link--home'>
                Home
            </NavLink>
            <NavLink to={"/about"} className='nav__link nav__link--about'>
                About Me
            </NavLink>
            <NavLink to={"/projects"} className='nav__link nav__link--projects'>
                Projects
            </NavLink>
            <NavLink to={"/skills"} className='nav__link nav__link--skills'>
                Skills
            </NavLink>
            {/* <NavLink
                to={"/experience"}
                className='nav__link nav__link--experience'
            >
                Experience
            </NavLink> */}
            <NavLink to={"/contact"} className='nav__link nav__link--contact'>
                Contact Me
            </NavLink>
        </div>
    );
};

export default Nav;
