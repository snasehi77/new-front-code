import React, {useState} from 'react';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler} from "reactstrap";
import whiteLogo from '../../Assets/Images/yourcase-logo-light.png'
import darkLogo from '../../Assets/Images/yourcase-logo-green.png'
import reactResponsive from 'react-responsive'

const MediaQuery = reactResponsive

const Media = {
    small: {
        minWidth: 0,
        maxWidth: "1024px"
    },
    large: {
        minWidth: "1025px",
        maxWidth: "100000px"
    }
}

const NavbarComponent = (props: any) => {
    const { showProgress, progress, light = true } = props
    const [collapsed, setCollapsed] = useState<boolean>(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div className="container-fluid position-absolute p-0">
            {!!showProgress && <div className="progress step-bar">
            <div 
                id="progress" 
                className={"progress-bar step-track-color " + ("step-track-width" + "-" + progress.toString())}>
            </div>
            </div>}
            <Navbar className="navbar" light>
                <NavbarBrand href="/" className="mr-auto">
                    <MediaQuery {...Media.small}>
                        <img  className="your-case-logo my-auto" src={darkLogo} alt="logo"/>
                    </MediaQuery>
                    <MediaQuery {...Media.large}>
                        <img  className="your-case-logo my-auto" src={light ? darkLogo : whiteLogo} alt="logo"/>
                    </MediaQuery>
                </NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="mr-2 d-block d-lg-none" style={{border: '0'}}/>
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        {/*<NavItem>*/}
                        {/*    <NavLink href="/components/">Components</NavLink>*/}
                        {/*</NavItem>*/}
                        {/*<NavItem>*/}
                        {/*    <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>*/}
                        {/*</NavItem>*/}
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
};

export default NavbarComponent;
