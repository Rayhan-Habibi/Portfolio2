import React, { useRef } from "react";
import { Icon } from "@iconify/react";
import '../../App.css'

const SkillsData = (props) => {
    return(
        <div className="border-2 border-white m-3 p-3 rounded-lg flex flex-col justify-center items-center w-32 h-40  duration-75 lg:bg-white/50 hover:backdrop-blur-md hover:border-0 hover:bg-white/25 hover:shadow-[#ECF0F8] shadow-xl bg-gray-100">
            <Icon icon={props.iconName} width="70" height="70" />
            <h5 className="text-center text-md mt-2">{props.skillName}</h5>
        </div>
    )
}

const Skills = () => {
    return(
        <div id="Skills">
            <h2 className="lg:mt-10 lg:text-4xl lg:mb-5 text-2xl mt-5 lg:static sticky top-0">My Expertise</h2>
            <div className="flex flex-wrap duration-100">
                <SkillsData iconName="logos:react" skillName="React" />
                <SkillsData iconName="logos:javascript" skillName="JavaScript" />
                <SkillsData iconName="teenyicons:nextjs-solid" skillName="NextJs" />
                <SkillsData iconName="vscode-icons:file-type-tailwind" skillName="Tailwind CSS" />
                <SkillsData iconName="vscode-icons:file-type-css" skillName="CSS3" />
                <SkillsData iconName="logos:bootstrap" skillName="Bootstrap 5" />
                <SkillsData iconName="devicon:git" skillName="Git" />
            </div>
        </div>
    )
}

export default Skills;