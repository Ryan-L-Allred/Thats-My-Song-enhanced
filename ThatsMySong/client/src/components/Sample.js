import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

const Sample = ({ sample }) => {
    return (
        <Card >
            <CardBody>
                <h3>{sample?.sampledSong?.title}</h3>
                
                <ul>
                    <li><b>Album:</b> {sample?.sampledSong?.albumName}</li>
                    <li><b>Artist: </b>{sample?.sampledSong?.artistName}</li>
                    {/* <li><b>Genre: </b>{sample?.genre?.name}</li> */}
                </ul>
            </CardBody>
        </Card>
    );
};

export default Sample;