import React, { Component } from 'react';
import  {NavLink } from 'react-router-dom';


export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm  navbar-dark" id="navbar">
                 <div className="container">
                <div className="d-flex logo align-items-center">
                <img  src="/assets/images/soundgaze-logo-white.svg" alt="soundgaze logo" width="30" />
                    <NavLink to="/home</div>" className="navbar-brand"> <span className="ml-2">SoundGaze</span></NavLink>
                </div>
    
                {/* <!-- Navbar  mobile--> */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" 
                data-target="#soundgazeNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
    
                <div className="collapse navbar-collapse" id="soundgazeNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/book-room">Book Now</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">contact</NavLink>
                        </li>
                    </ul>
                    <span className="navbar-text ml-auto nav-link">
                        <button data-toggle="modal" data-target="#loginModal"> Login</button>
                        </span>
                </div>
            </div> 
        </nav>
        </div>
        )
    }
   
    
}