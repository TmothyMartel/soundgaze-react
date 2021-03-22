import React from 'react';
import {
    Card, CardText, CardBody, 
    CardTitle, CardSubtitle
  , Button} from 'reactstrap';
  import './RoomCard.styles.css';


function RoomCard(props) {
    return (
            <div className="rooms-display row">
            {props.rooms.map(room => {
                return (
                    <Card key={room.id} className="card room-card col-md">
                    <CardBody className="card-body room-card-body">
                        <CardTitle className="card-title">{room.roomName}</CardTitle>
                        <CardSubtitle>{ room.roomPrice}</CardSubtitle>
                    </CardBody >
                    <img width="100%" src={room.roomImage} alt={room.roomDescription} />
                    <CardBody>
                        <CardText>{room.roomDescription}</CardText>
                    </CardBody>
                    <div className="card-body mx-auto reserve-btn">
                        <Button outline color="info">Reserve this room</Button>
                    </div>
                    </Card>
                )
            })}
        </div>
        
    )
}

export default RoomCard;