import React from "react";
import Header from "../components/Layouts/Header/Header";
import Banner from "../components/Banner";
import About from "./About";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Hobbies from "./Hobbies";
import Contact from "./Contact";
import Footer from "../components/Layouts/Footer/Footer";
import {Outlet} from 'react-router-dom'

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