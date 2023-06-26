import React from "react";
import { Icon } from '@iconify/react';

const Socmed = () => {

    const handleClick = (e) =>{
        if (e === "Github"){
            window.open("https://github.com/Rayhan-Habibi");
        } else if (e === "Whatsapp"){
            window.open("https://wa.me/6283180412906")
        } else if (e === "Gmail"){
            window.open("https://mail.google.com/mail/?view=cm&to=nahyaribibah2017@gmail.com");
        } else if (e === "Instagram"){
            window.open("https://www.instagram.com/nahya_rn/")
        } else if (e === "Linkedin"){
            window.open("https://www.linkedin.com/in/rayhan-habibi-587b6b17b/")
        }
    }
    
    const className = "opacity-50 hover:opacity-100 m-1 "

    return(
        <div className="flex justify-center lg:justify-start lg:ml-4 mt-5">
            <button onClick={()=>handleClick("Github")}><Icon icon="mdi:github"  width="40" height="40" className={className}/></button>
            <button onClick={()=>handleClick("Whatsapp")}><Icon icon="ic:baseline-whatsapp" width="40" height="40" className={className}/></button>
            <button onClick={()=>handleClick("Gmail")}><Icon icon="mdi:gmail" width="40" height="40" className={className}/></button>
            <button onClick={()=>handleClick("Instagram")}><Icon icon="mdi:instagram" width="40" height="40" className={className}/></button>
            <button onClick={()=>handleClick("Linkedin")}><Icon icon="mdi:linkedin" width="40" height="40" className={className}/></button>
        </div>
    )
}

export default Socmed;