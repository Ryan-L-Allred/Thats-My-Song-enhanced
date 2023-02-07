import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

const Song = ({ song }) => {
    return (
        <Card >
            <CardBody>
                <h3>{song.title}</h3>
                
                <ul>
                    <li><b>Album:</b> {song.albumName}</li>
                    <li><b>Artist: </b>{song.artistName}</li>
                    <li><b>Genre: </b>{song?.genre?.name}</li>
                </ul>
            </CardBody>
        </Card>
    );
};

export default Song;