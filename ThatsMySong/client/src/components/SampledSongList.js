import React, { useEffect,  useState } from "react";
import { getAllSampledSongs } from "../modules/songManager";
import { Link } from "react-router-dom";
import  Song  from "./Song";
import { Navigate, useNavigate } from "react-router-dom";

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
        <div>
            <button onClick={() => navigate("/sampledsongs/add")}>Add Song </button>
            
            {sampledSongs.map(sampledSong => (
                <section key={sampledSong.id}>
                 <Link to={`/sampledsongs/${sampledSong.id}`}>
                <div>{sampledSong.title}</div>
                 </Link>
                </section>
            ))}
            
        </div>
    );
}

export default SampledSongList;