import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

const HipHopSong = ({ hipHopSong }) => {
    return (
        <Card >
            <CardBody>
                <h3>{hipHopSong.title}</h3>
                
                <ul>
                    <li><b>Album:</b> {hipHopSong.albumName}</li>
                    <li><b>Artist: </b>{hipHopSong.artistName}</li>
                    <li><b>Genre: </b>{hipHopSong?.genre?.name}</li>
                </ul>
            </CardBody>
        </Card>
    );
};

export default HipHopSong;