import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSampleById } from "../modules/songManager";
import { getSongById } from "../modules/songManager";
import  Song  from "./Song";
import Sample from "./Sample"

const SampleDetails = () => {
    const [song, setSong] = useState();
    const [sample, setSample] = useState();
    const { id } = useParams();

    useEffect(() => {
        getSampleById(id).then(setSample)
    }, [])

    // useEffect(() => {
    //     getSongById(id).then(setSong)
    // }, []);


    if (!sample) {
        return null;
    }

    // if (!song) {
    //     return null;
    // }


   return (
        <div>
            <Sample sample={sample}  />
            {/* <Song song={song} /> */}
            
        </div>
   );
};

export default SampleDetails;