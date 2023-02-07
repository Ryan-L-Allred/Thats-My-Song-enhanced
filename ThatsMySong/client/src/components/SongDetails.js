import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSongById } from "../modules/songManager";
import  Song  from "./Song";

const SongDetails = () => {
    const [song, setSong] = useState();
    const { id } = useParams();

    useEffect(() => {
        getSongById(id).then(setSong);
    }, []);

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