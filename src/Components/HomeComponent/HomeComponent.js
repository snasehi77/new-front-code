import React from 'react';
import FrontComponent from "./FrontComponent";
import CasesComponent from "./CasesComponent";
import FooterComponent from "./FooterComponent";


const HomeComponent = () => {
  return (
    <div className="container-fluid p-0">

      <FrontComponent/>

      <CasesComponent/>

      <FooterComponent/>

    </div>
  )
};


export default  HomeComponent;