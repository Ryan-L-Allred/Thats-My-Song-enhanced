import React, { useEffect,  useState } from "react";
import { getAllSampledSongs } from "../../modules/songManager";
import { Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import { Card, CardBody } from "reactstrap";
import "./SampledSongList.css"

const SampledSongList = () => {
    const [sampledSongs, setSampledSongs] = useState([]);
    const navigate = useNavigate();

    const getSampledSongs = () => {
        getAllSampledSongs().then(sampledSongs => setSampledSongs(sampledSongs));
    };


    useEffect(() => {
        getSampledSongs();
    }, []);


    return (
        // <Card>
        //     <CardBody>
        <section>
            <div class="col-md-12 text-center">
                <button class="btn-xl" onClick={() => navigate("/sampledsongs/add")}>Add Song </button>
            </div>
            {sampledSongs.map(sampledSong => (
                <section key={sampledSong.id} class="text-center">
                 <Link to={`/sampledsongs/${sampledSong.id}`}>
                <div class="sampledsongList">{sampledSong.title}</div>
                 </Link>
                </section>
            ))}
            </section>
        //     </CardBody>
        // </Card>
    );
}

export default SampledSongList;