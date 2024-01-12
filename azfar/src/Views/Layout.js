import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../component/Nav'; 
import Footer from '../component/Footer';

const Layout = () => {
    return (
        <>
            <Nav />
            <Outlet />
            <Footer />
        </>
    );
}

export default Layout;