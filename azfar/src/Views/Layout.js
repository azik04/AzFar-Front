import React from 'react';
import Nav from '../component/Nav'
import Footer from '../component/Footer'
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <Nav/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default Layout;
