import React, {useState} from 'react';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler} from "reactstrap";
import logo from '../../Assets/Images/yourcase-logo-green.png'


const NavbarComponent = (props: any) => {
    const { showProgress, progress } = props
    const [collapsed, setCollapsed] = useState<boolean>(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

    return <div className="container-fluid position-absolute p-0">
        {!!showProgress && <div className="progress step-bar">
          <div 
            id="progress" 
            className={"progress-bar step-track-color " + ("step-track-width" + "-" + progress.toString())}>
          </div>
        </div>}
        <Navbar className="navbar" light>
            <NavbarBrand href="/" className="mr-auto">
                {/*<LogoComponent className="your-case-logo my-auto ml-4 pt-md-3 ml-md-4"/>*/}
                <img  className="your-case-logo my-auto" src={logo} alt="logo"/>
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
};

export default NavbarComponent;
