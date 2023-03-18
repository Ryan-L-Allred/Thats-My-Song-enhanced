import React from "react";
import { Card, CardBody } from "reactstrap";
import { Navigate, useNavigate } from "react-router-dom";
import { deleteSample } from "../../modules/songManager";
import { getAllSamples } from "../../modules/songManager";
import "./Sample.css"

const Sample = ({ sample }) => {
   const navigate = useNavigate();
    const confirmDelete = () => {
        deleteSample(sample.id).then(getAllSamples)
        .then(() => {
            navigate("/samples")
        })
    }


    return (
        <Card >
            <CardBody>
                <section class="text-center">
                    <h3 class="hipHopSongTitle">Song</h3>
                        <div class="hipHopSongDetails">
                            <b>Title:</b> {sample?.song?.title}
                            <b>Album:</b> {sample?.song?.albumName}
                            <b>Artist: </b>{sample?.song?.artistName}
                        </div>
                <div class="sampledSongs">
                    <h3 class="sampledSongTitle">Sampled Song</h3>
                        <div class="sampledSongDetails">
                            <b>Title:</b> {sample?.sampledSong?.title}
                            <b>Album:</b> {sample?.sampledSong?.albumName}
                            <b>Artist: </b>{sample?.sampledSong?.artistName}
                            <b>Genre: </b>{sample?.sampledSong?.genre?.name}
                        </div>
                </div>
                    <button class="btn_edit"onClick={() => navigate(`/samples/${sample.id}/edit`)}>Edit Sample </button>
                    <button class="btn_delete"onClick={confirmDelete}>Delete Sample</button>
                 </section>
            </CardBody>
        </Card>
    );
};

export default Sample;
                
                        