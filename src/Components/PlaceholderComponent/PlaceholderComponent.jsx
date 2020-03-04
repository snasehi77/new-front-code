import React, { useState, useEffect } from 'react';
import NavbarComponent from "../Shared/NavbarComponent";
import FrontComponentCase from "./FrontComponentCase";
import HowItWork from "../HomeComponent/HowItWork.tsx";
import FooterComponent from "../HomeComponent/FooterComponent.tsx";
import { useLocation} from "react-router";
import { useHistory } from 'react-router-dom';
import {linkCases} from "../../Utils/Utilities";



const PlaceholderComponent = (props) => {
    const history = useHistory();
    const location = useLocation();

    const [linkBtn, setLinkBtn] = useState('');


    useEffect(() => {
        const linkBtn = linkCases[location.pathname];
        if (!linkBtn) {
            history.push('/')
        }else setLinkBtn(linkBtn)

    });

    return (
        <div>

            <NavbarComponent/>

            <FrontComponentCase buttonLink={linkBtn} />

            <HowItWork/>

            <FooterComponent/>

        </div>
    )
};


export default PlaceholderComponent;
