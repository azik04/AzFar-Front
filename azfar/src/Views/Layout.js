import React from 'react';
import Nav from '../component/Nav'
import Footer from '../component/Footer'
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Layout = () => {
    const location = useLocation();
    return (
        <>
            <Nav/>
            <Outlet/>
            <Footer/>
            
        </>
    );
}

export default Layout;
