import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
    return (
        <div >
            <div classNameName="header shadow-lg bg-midle-green">
                <nav className="navbar navbar-expand-lg bg-low-green ">
                    <div className="container-fluid bg-midle-green p-3 kanit-regular fs-4">
                        <img style={{ width: "50px" }} src={logo} alt="logo" />
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse color-danger" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <NavLink className="nav-link  " to="/">BMI Calculator  <i class="bi bi-calculator-fill"></i></NavLink>
                                <NavLink className="nav-link color-danger " to="/about">About</NavLink>

                            </div>
                        </div>
                    </div>
                </nav>

            </div>
        </div>
    );
}

export default Navbar;
