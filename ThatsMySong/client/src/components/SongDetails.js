import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSongById } from "../modules/songManager";
import  Song  from "./Song";

const SongDetails = () => {
    const [song, setSong] = useState();
    const [sample, setSample] = useState();
    const { id } = useParams();

    useEffect(() => {
        getSongById(id).then(setSong);
    }, []);

    useEffect(() => {
        
    })

    if (!song) {
        return null;
    }

   return (
        <div>
            <Song song={song}  />
        </div>
   );
};

export default SongDetails;