import React, { useState } from "react";
import { Collapse, Button } from "reactstrap";
import AppointmentCalendar from "../appointment-calendar/AppointmentCalendar";
import "./Room.styles.css";

function Room(props) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="container mt-4 mb-4">
            <div className="row">
                <div className="col">
                    <img width="500px" src="assets/images/jonathan-velasquez-c1ZN57GfDB0-unsplash.jpg" alt="room with instruments" />
                    <h3 className="">Room 1 - $25/hr</h3>
                    <Button onClick={toggle} data-target="#roomDetailsRM1">
                            {" "}
                            <h4>Learn More</h4>
                        </Button>
                    
                    <Collapse isOpen={isOpen} id="roomDetailsRM1">
                    <div role="tab" className="tab">
                            <h4>Room Details</h4>
                    </div>
                        <ul className="room-details">
                            <li className="room-details-item">
                                240 Square Feet
                            </li>
                            <li className="room-details-item">
                                Fits 6 Comfortably
                            </li>
                            <li className="room-details-item">Maple Drums</li>
                            <li className="room-details-item">
                                88 Key Weighted Keyboard
                            </li>
                        </ul>

                        <div role="tab" className="tab">
                            <h4>Equipment Details</h4>
                        </div>

                        <div>
                            <ul className="room-details">
                                <li className="room-details-equip">
                                    Marshall Guitar Cabinet Amp w/ external Head
                                    Amp
                                </li>
                                <li className="room-details-equip">
                                    Fender Princeton Guitar Amp
                                </li>
                                <li className="room-details-equip">
                                    Line 6 Guitar Combo Amp
                                </li>
                                <li className="room-details-equip">
                                    Yamaha Portable PA w/ 2 Yamaha Speakers
                                </li>
                                <li className="room-details-equip">
                                    Full Pearl Drum Kit w/ Stool &amp; Cymbals
                                </li>
                                <li className="room-details-equip">
                                    Am peg Bass Amp
                                </li>
                                <li className="room-details-equip">
                                    2 Microphones
                                </li>
                                <li className="room-details-equip">2 Cords</li>
                                <li className="room-details-equip">2 Stands</li>
                                <li className="room-details-equip">
                                    Korg X50 Professional 61 Key Syth/Keyboard
                                    in LIC Location
                                </li>
                                <li className="room-details-equip">
                                    Yamaha PSR 410
                                </li>
                            </ul>
                            <p>
                                NO INSTRUMENTS, other than the keyboard.
                                <br />
                                You must provide your own music stands and drum
                                sticks.
                            </p>
                        </div>
                    </Collapse>
                </div>
                <div className="col">
                         <AppointmentCalendar />
                </div>
            </div>
        </div>
    );
}

export default Room;
