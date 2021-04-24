import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => (

    <nav className="navbar navbar-expand-lg navbar-dark bg-primary  ">
        <div className="container">
            <a className="navbar-brand" href="#">React App</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item ">
                        <NavLink className="nav-link" exact to="/">
                            Home
                            </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/contact">Contact</NavLink>
                    </li>

                </ul>
            </div>
            <Link className="btn btn-outline-light" to="/user/AddUser">Add user</Link>
        </div>
    </nav>

)



export default Navbar;