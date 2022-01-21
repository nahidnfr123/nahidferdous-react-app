import Banner from "../components/Banner";
import About from "./About";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Hobbies from "./Hobbies";
import Contact from "./Contact";
import React from "react";

function Home() {
    return (
        <>
            <Banner/>
            <About/>
            <Portfolio/>
            <Services/>
            <Hobbies/>
            <Contact/>
        </>
    )
}

export default Home