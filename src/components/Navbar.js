import React, { Component } from 'react';


export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm  navbar-dark" id="navbar">
                 <div className="container">
                <div className="d-flex logo align-items-center">
                <img  src="/assets/images/soundgaze-logo-white.svg" alt="soundgaze logo" width="30" />
                    <a href="#navbar" className="navbar-brand"> <span className="ml-2">SoundGaze</span></a>
                </div>
    
                {/* <!-- Navbar  mobile--> */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" 
                data-target="#soundgazeNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
    
                <div className="collapse navbar-collapse" id="soundgazeNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="www.facebook.com">Book Now</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="www.instagram.com">Rent Monthly</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="www.facebook.com">contact</a>
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