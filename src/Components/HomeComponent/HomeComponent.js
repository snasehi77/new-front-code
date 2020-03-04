import React from 'react';
import NavbarComponent from "../Shared/NavbarComponent";
import FrontComponent from "./FrontComponent.tsx";
import CasesComponent from "./CasesComponent.tsx";
import HowItWork from "./HowItWork.jsx";
import FooterComponent from "./FooterComponent.tsx";



const HomeComponent = () => {

    return (
        <div>

            <NavbarComponent/>

            <FrontComponent/>

            <CasesComponent/>

            <HowItWork/>

            <FooterComponent/>

            {/*<FrontComponentLegacy/>*/}

            {/*<CasesComponentLegacy/>*/}

            {/*<HowItWork/>*/}

            {/*<ContactUsComponentLegacy/>*/}

            {/*<FooterComponentLegacy/>*/}

        </div>
    )
};


export default HomeComponent;
