import React from "react";
import Todolist from '../../Assets/Image/Todolist.png'
import Hairday from '../../Assets/Image/Hairday.png'
import Goclean from '../../Assets/Image/GoClean.png'
import { Icon } from "@iconify/react";

const ProjectsData = (props) => {
    return(
        <div className="border-2 border-white rounded-lg mt-6 grid grid-cols-3 p-3 items-center lg:bg-white/50 hover:backdrop-blur-md hover:border-0 hover:bg-white/25 hover:shadow-[#ECF0F8] shadow-xl duration-100 bg-gray-100" id="Projects">
            <img src={props.image} className="rounded-lg w-11/12 border-2"/>
            <div className="col-span-2">
                <a href={props.link} className="text-xl flex hover:text-[#767feb]">{props.title} <Icon icon="iconoir:arrow-tr" width="15" height="15" className="duration-100" /></a>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}

const ProjectsDataJson = [
    {
        image: Todolist,
        link: "https://rayhan-habibi.github.io/Todolist/",
        title: "TodoList",
        desc: "A simple Todo web-based application that that has ability to Create, Manipulate, and delete the data that inseted by user. this is the first most web-application i have built that contains many technologies, Such as React tailwind CSS ect."
    },
    {
        image: Hairday,
        link: "https://rayhan-habibi.github.io/Hair-Day/",
        title: "HairDay",
        desc: "A website that created by Bootstrap 5 and Vanilla CSS to provide beautiful website with less code written. This Website is built in purpose to finish the course final exam and practice how the website is built by semantic tag to enhanced SEO and clarity"
    },
    {
        image: Goclean,
        link: "https://rayhan-habibi.github.io/goclean/",
        title: "GoClean",
        desc: "The first website i made that have purpose to know the basic HTML structure and figuring out how's the website is built. This website is powered by Bootstrap with additional vanilla CSS"
    },
]

const Projects = () => {
    return(
        <div className="mt-5 pt-5" id="Projects">
            <h2 className="lg:text-4xl text-2xl mb-5">Past projects</h2>
            {
                ProjectsDataJson.map((e) => {
                    return(
                        <ProjectsData image={e.image} link={e.link} title={e.title} desc={e.desc}/>
                    )
                })
            }
        </div>
    )
}

export default Projects;