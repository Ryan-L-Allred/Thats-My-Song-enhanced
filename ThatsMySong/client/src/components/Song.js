import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import { deleteSong } from "../modules/songManager";
import { getAllSongs } from "../modules/songManager";

const Song = ({ song }) => {
    const navigate = useNavigate();
    const confirmDelete = () => {
        deleteSong(song.id).then(getAllSongs)
        .then(() => {
            if (song.genreId == 1) {
                navigate("/hiphopsongs")
              } else {
                navigate("/sampledsongs")
              }
        })
    }

    return (
        <Card >
            <CardBody>
                <h3>{song.title}</h3>
                
                <ul>
                    <li><b>Album:</b> {song.albumName}</li>
                    <li><b>Artist: </b>{song.artistName}</li>
                    <li><b>Genre: </b>{song?.genre?.name}</li>
                </ul>
                <button onClick={() => navigate(`/hiphopsongs/${song.id}/edit`)}>Edit Song </button>
                <button onClick={confirmDelete}>Delete Song</button>
            </CardBody>
        </Card>
    );
};

export default Song;