import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSampleById } from "../modules/songManager";
import { getSongById } from "../modules/songManager";
import  Song  from "./Song";
import Sample from "./Sample"
import { deleteSample } from "../modules/songManager";
import { getAllSamples } from "../modules/songManager";

const SampleDetails = () => {
    const [song, setSong] = useState();
    const [sample, setSample] = useState();
    
    const { id } = useParams();

    // useEffect(() => {
    //     getSampleById(id).then(deleteSample)
    // }, [])

    // const handleSave = (event) => {
    //     event.preventDefault()

    //     return deleteSample(sampleDelete.id).then(() => {
    //             getSamples();
    //         });
    // };

    useEffect(() => {
        getSampleById(id).then(setSample)
    }, [])

  


    if (!sample) {
        return null;
    }

   return (
        <div>
            <Sample sample={sample}  />
            {/* <Song song={song} /> */}
            
        </div>
   );
};

export default SampleDetails;