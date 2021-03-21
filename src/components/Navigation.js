import React, {  useState } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Button  } from 'reactstrap';
import  { NavLink } from 'react-router-dom';


export default function Navigation(props) {
    
        const [collapsed, setCollapsed] = useState(true);
         const toggleNavbar = () => setCollapsed(!collapsed);
        return (
            <div>
                <Navbar sticky="top" className="navbar navbar-expand-sm  navbar-dark" id="navbar">
                 <div className="container">
                <NavbarBrand className="d-flex logo align-items-center">
                <img  src="/assets/images/soundgaze-logo-white.svg" alt="soundgaze logo" width="30" />
                    <NavLink to="/home</div>" className="navbar-brand"> <span className="ml-2">SoundGaze</span></NavLink>
                </NavbarBrand>
    
                {/* <!-- Navbar  mobile--> */}
                <NavbarToggler onClick={toggleNavbar} />
                <Collapse isOpen={!collapsed} navbar className="collapse navbar-collapse" id="soundgazeNavbar">
                    <Nav navbar  className="navbar-nav">
                        <NavItem>
                            <NavLink className="nav-link" to="/book-room">Book Now</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/contact">contact</NavLink>
                        </NavItem>
                    </Nav>
                    <span className="navbar-text ml-auto nav-link">
                        <Button outline color="info"> Login</Button>
                        </span>
                </Collapse>
            </div> 
        </Navbar>
        </div>
        )
}