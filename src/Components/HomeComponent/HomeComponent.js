import React from 'react';
import FrontComponent from "./FrontComponent";
import CasesComponent from "./CasesComponent";
import FooterComponent from "./FooterComponent";
import HowItWorks from "./HowItWorksComponent";
import ContactUsComponent from "./ContactUsComponent";


const HomeComponent = () => {

  return (
    <div className="container-fluid p-0">

      <FrontComponent/>

      <CasesComponent/>

      <HowItWorks/>

      <ContactUsComponent/>

      <FooterComponent/>

    </div>
  )
};


export default HomeComponent;