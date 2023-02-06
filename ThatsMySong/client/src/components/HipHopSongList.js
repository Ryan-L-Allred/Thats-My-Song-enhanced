import React, { useEffect,  useState } from "react";
import { getAllHipHopSongs } from "../modules/hipHopSongManager";
import { Link } from "react-router-dom";
import  HipHopSong  from "./HipHopSong";

const HipHopSongList = () => {
    const [hipHopSongs, setHipHopSongs] = useState([]);

    const getHipHopSongs = () => {
        getAllHipHopSongs().then(hipHopSongs => setHipHopSongs(hipHopSongs));
    };

    useEffect(() => {
        getHipHopSongs();
    }, []);

    return (
        <div>
            
            {hipHopSongs.map(hipHopSong => (
                <Link to={`/hiphopsongs/${hipHopSong.id}`}>
                <div>{hipHopSong.title}</div>
                </Link>
            ))}
        </div>
    );
}

export default HipHopSongList;