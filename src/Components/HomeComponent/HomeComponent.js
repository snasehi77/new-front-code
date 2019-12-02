import React from 'react';
import FrontComponent from "./FrontComponent";
import CasesComponent from "./CasesComponent";
import FooterComponent from "./FooterComponent";
import HowItWorks from "./HowItWorks";


const HomeComponent = () => {

  return (
    <div className="container-fluid p-0">

      <FrontComponent/>

      <CasesComponent/>

      <HowItWorks/>

      <FooterComponent/>

    </div>
  )
};


export default HomeComponent;