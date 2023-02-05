import React, { useEffect,  useState } from "react";
import { getAllHipHopSongs } from "../modules/hipHopSongManager";

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
            {hipHopSongs.map(hhs => 
                <div>{hhs.title}</div>
            )}
        </div>
    );
}

export default HipHopSongList;