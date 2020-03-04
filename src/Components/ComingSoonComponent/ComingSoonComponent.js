import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom";
import LogoComponent from "../Shared/LogoComponent";
import FooterComponent from "../HomeComponent/FooterComponent";

const ComingSoonComponent = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div className='bg-beige-custom'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink to="/" className="navbar-brand" href="#">
                    <LogoComponent className="mr-1" light={false} styles={{width: "120px"}} />
                </NavLink>
            </nav>
            <div className="container coming-soon">
               <div className="row align-self-center">
                   <div className="col">
                       <h1 className="text-center">Coming Soon</h1>
                   </div>
               </div>
            </div>
            <FooterComponent/>
        </div>
    )
};

export default ComingSoonComponent;
