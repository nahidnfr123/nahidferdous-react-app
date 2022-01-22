import Banner from "../components/Banner";
import About from "./About";
import Work from "./Work";
import Experience from "./Experience";
import Services from "./Services";
import Hobbies from "./Hobbies";
import Contact from "./Contact";
import React from "react";

function Home() {
    return (
        <>
            <Banner/>
            <About/>
            <Experience/>
            <Work/>
            <Services/>
            <Hobbies/>
            <Contact/>
        </>
    )
}

export default Home