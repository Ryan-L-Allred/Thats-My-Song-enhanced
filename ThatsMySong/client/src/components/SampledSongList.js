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
            <button onClick={() => navigate("/songs/add")}>Add Song </button>
            
            {sampledSongs.map(sampledSong => (
                <div>
                {/* // <Link to={`/songs/${sampledSong.id}`}> */}
                <div>{sampledSong.title}</div>
                 {/* </Link> */}
                <button onClick={() => navigate(`/sampledsongs/${sampledSong.id}/edit`)}>Edit Song </button>
                </div>
            ))}
            
        </div>
    );
}

export default SampledSongList;