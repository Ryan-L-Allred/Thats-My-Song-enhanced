import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSampleById } from "../modules/songManager";
import { getSongById } from "../modules/songManager";
import  Song  from "./Song";
import Sample from "./Sample"

const HipHopSongDetails = () => {
    const [hipHopSong, setHipHopSong] = useState();
    const [sample, setSample] = useState();
    const { id } = useParams();

    useEffect(() => {
        getSongById(id).then(setHipHopSong)
    }, [])

    // useEffect(() => {
    //     getSongById(id).then(setSong)
    // }, []);


    if (!hipHopSong) {
        return null;
    }

    // if (!song) {
    //     return null;
    // }


   return (
        <div>
            <Song song={hipHopSong}  />
            {/* <Song song={song} /> */}
        </div>
   );
};

export default HipHopSongDetails;