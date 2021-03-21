import React from "react";
import "./Homepage.styles.css";

function Homepage(props) {
    return (
        <main className="container-fluid container">
        <header className="jumbotron jumbotron-fluid">
            <div className="container hero-container">
                <h1 className="hero-text">A professional rehearsal  and recording space</h1>
                
            </div>
        </header>
        <div className="row row-content">
            <div className="col-sm-6">
                   <h2>Rehearse</h2>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
            <div className="col-sm-6">
                <img src="assets/images/jisu-han-D6T3vu5oErs-unsplash.jpg" alt="" className="img-fluid" />
            </div>
        </div>
        <div className="row row-content">
            <div className="col-sm-6 order-1">
                <img src="assets/images/marc-fanelli-isla-xo4ValczbuA-unsplash.jpg" alt="" className="img-fluid" />
            </div>
            <div className="col-sm-6 order-sm-1 ">
                   <h2>Record</h2>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
            
        </div>
        <div className="row row-content">
            <div className="col-sm-6">
                   <h2>Rent</h2>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
            <div className="col-sm-6">
                <img src="assets/images/brett-jordan-WzzGU9dwMnU-unsplash.jpg" alt="" className="img-fluid" />
            </div>
        </div>
    </main>
    )
}

export default Homepage