import React from "react";
import NameAndDesc from "./NameAndDesc";
import Navigation from "./Navigation";
import Socmed from "./SocialMedia";
import StickyBox from "react-sticky-box";
import { useState } from "react";

const AsidePage = () => {

  const screenRes = window.innerWidth;
  if (screenRes < 768){
    return(
      <div className="m-5">
        <NameAndDesc />
        <Socmed />
      </div>
    )
  } else {
    return(
      <div className="lg:m-20 lg:grid">
        <NameAndDesc /> 
        <Navigation /> 
        <Socmed />
      </div>
    )
  }
  
}

export default AsidePage;