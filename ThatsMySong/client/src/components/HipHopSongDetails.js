import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getHipHopSongById } from "../modules/hipHopSongManager";
import  HipHopSong  from "./HipHopSong";

const HipHopSongDetails = () => {
    const [hipHopSong, setHipHopSong] = useState();
    const { id } = useParams();

    useEffect(() => {
        getHipHopSongById(id).then(setHipHopSong);
    }, []);

    if (!hipHopSong) {
        return null;
    }

   return (
        <div>
            <HipHopSong hipHopSong={hipHopSong}  />
        </div>
   );
};

export default HipHopSongDetails;