import React, { useEffect,  useState } from "react";
import { getAllHipHopSongs } from "../modules/songManager";
import { Link } from "react-router-dom";
import  Song  from "./Song";
import { Navigate, useNavigate } from "react-router-dom";

const HipHopSongList = () => {
    const [hipHopSongs, setHipHopSongs] = useState([]);
    const navigate = useNavigate();

    const getHipHopSongs = () => {
        getAllHipHopSongs().then(hipHopSongs => setHipHopSongs(hipHopSongs));
    };

    useEffect(() => {
        getHipHopSongs();
    }, []);

    return (
        <div>
            <button onClick={() => navigate("/hiphopsongs/add")}>Add Song </button>
            
            {hipHopSongs.map(hipHopSong => (
                
            <section key={hipHopSong.id} className="hipHopSonList">
                <Link to={`/hiphopsongs/${hipHopSong.id}`}>
                <div>{hipHopSong.title}</div>
                </Link>
            </section>
            ))}
            
        </div>
    );
}

export default HipHopSongList;