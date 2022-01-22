import React from "react";
import {Outlet} from 'react-router-dom'
import Header from "../components/Layouts/Header/Header";
import Footer from "../components/Layouts/Footer/Footer";

function Layout() {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Layout