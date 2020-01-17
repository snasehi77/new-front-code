import React, {useState} from 'react';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from "reactstrap";
import LogoComponent from "./LogoComponent";


const NavbarComponent = () => {

    const [collapsed, setCollapsed] = useState<boolean>(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

    return <div className="container-fluid position-absolute p-0">
        <Navbar className="bg-front sticky" light>
            <NavbarBrand href="/" className="mr-auto">
                <LogoComponent className="your-case-logo my-auto ml-4 pt-md-3 ml-md-4"/>
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