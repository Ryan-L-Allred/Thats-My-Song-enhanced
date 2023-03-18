import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSongById } from "../../modules/songManager";
import  Song  from "../Song";
import { Card, CardBody } from "reactstrap";

const SampledSongDetails = () => {
    const [sampledSong, setSampledSong] = useState();
    ;
    const { id } = useParams();

    useEffect(() => {
        getSongById(id).then(setSampledSong)
    }, [])

    if (!sampledSong) {
        return null;
    }

   return (
        <div>
            <Song song={sampledSong}  />
        </div>
   );
};

export default SampledSongDetails;