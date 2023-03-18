import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSongById } from "../../modules/songManager";
import  Song  from "../Song";

const HipHopSongDetails = () => {
    const [hipHopSong, setHipHopSong] = useState();
    const { id } = useParams();

    useEffect(() => {
        getSongById(id).then(setHipHopSong)
    }, [])

    if (!hipHopSong) {
        return null;
    }

   return (
        <div>
            <Song song={hipHopSong}  />
        </div>
   );
};

export default HipHopSongDetails;