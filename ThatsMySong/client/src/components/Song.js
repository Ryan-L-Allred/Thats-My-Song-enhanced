import React from "react";
import { Card, CardBody } from "reactstrap";
import { Navigate, useNavigate } from "react-router-dom";
import { deleteSong } from "../modules/songManager";
import { getAllSongs } from "../modules/songManager";
import "./Song.css"

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
        // <Card>
        //     <CardBody>
               <section class="text-center">
                    <h3 class="songTitle">{song.title}</h3>
                         <div class="songDetails">
                           <b>Album:</b> {song.albumName}
                           <b>Artist: </b>{song.artistName}
                           <b>Genre: </b>{song?.genre?.name}
                        </div>
                    <div class="col-md-12 text-center">
                        <button class="btn_edit" onClick={() => navigate(`/hiphopsongs/${song.id}/edit`)}>Edit Song </button>
                        <button class="btn_delete"  onClick={confirmDelete}>Delete Song</button>
                    </div>
               </section>
               
        //     </CardBody>
        //  </Card>     
    );
};

export default Song;
                