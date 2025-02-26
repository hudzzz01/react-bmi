import React from 'react';
import Navbar from '../../Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../Footer';

const Layout = () => {
    return (
        <div className="position-relative">
            <Navbar />
            <div className="main"> <Outlet /> </div>
            <Footer />
        </div>
    );
}

export default Layout;
