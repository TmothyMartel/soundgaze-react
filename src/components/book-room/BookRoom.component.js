import React, {Component} from 'react';
import Room from '../room/Room.component';

class BookRoom extends Component {
    render() {
        return (
            <div className="container" >
                <header class="text-center">
                    <h1 class="hero-text">Choose a Room to Reserve</h1>
                 </header>
                 <Room />
            </div>
        )
    }
}

export default BookRoom
