import React from "react";
import About from "./About";
import Skills from "./Skills";
import '../../App.css'
import Projects from "./Projects";

const Container = () => {
    return(
        <div className="lg:mr-24 overflow-y-auto hide-scrollbar m-5 lg:pt-24 lg:pb-24 scroll-smooth">
            <About />
            <Skills />
            <Projects />
        </div>
    )
}

export default Container;