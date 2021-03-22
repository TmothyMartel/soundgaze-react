import React, {Component} from 'react';

import RoomCard from '../room-card/RoomCard.component';
import {ROOMS} from '../../shared/rooms';

class BookRoom extends Component {
        constructor(props) {
            super(props);
            this.state = {
                rooms: ROOMS
            }
        }
    render() {
        return (
            <div className="container" >
                <header class="text-center">
                    <h1 class="hero-text">Choose a Room to Reserve</h1>
                 </header>
                 <RoomCard rooms={this.state.rooms} />
            </div>
        )
    }
}

export default BookRoom
