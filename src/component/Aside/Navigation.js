import React, { useEffect } from "react";

const NavData = (props) => {
    return(
        <a href={`#${props.value}`} className="text-base font-bold duration-100 hover:translate-x-4 mt-3 p-2 rounded-lg focus:border-2 focus:border-black focus:translate-x-4">{props.value}</a>
    )
}

const Navigation = () => {
    return(
        <div className="lg:ml-5 flex flex-col items-start">
            <NavData value="About" />
            <NavData value="Skills" />
            <NavData value="Projects" />
        </div>
    )
}

export default Navigation