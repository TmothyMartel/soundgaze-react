import React from "react";
import { Switch, Route, Redirect} from 'react-router-dom';


import Homepage from './homepage/Homepage.component';
import BookRoom from './book-room/BookRoom.component';
import Room from './room/Room.component'
import Contact from './contact/Contact.component';

function Main() {
    return (
        <div>
            <Switch>
                <Route path='/home' component={Homepage} />
                <Route exact path='/book-room' component={BookRoom} />
                <Route exact path='/room' component={Room} />
                <Route exact path='/contact' component={Contact} />
                <Redirect to='/home' />
            </Switch>
        </div>
    )
}

export default Main;
