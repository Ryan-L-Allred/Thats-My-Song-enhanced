import React, { useEffect,  useState } from "react";
import { getAllSongs } from "../modules/songManager";
import { Link } from "react-router-dom";
import  Song  from "./Song";
import { Navigate, useNavigate } from "react-router-dom";

const SongList = () => {
    const [songs, setSongs] = useState([]);
    const navigate = useNavigate();

    const getSongs = () => {
        getAllSongs().then(songs => setSongs(songs));
    };

    useEffect(() => {
        getSongs();
    }, []);

    return (
        <div>
            <button onClick={() => navigate("/songs/add")}>Add Song </button>
            {songs.map(song => (
                <Link to={`/songs/${song.id}`}>
                <div>{song.title}</div>
                </Link>
            ))}
            
        </div>
    );
}

export default SongList;