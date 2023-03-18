import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSampleById } from "../../modules/songManager";
import Sample from "./Sample"

const SampleDetails = () => {
    const [sample, setSample] = useState();
    
    const { id } = useParams();

    useEffect(() => {
        getSampleById(id).then(setSample)
    }, [])

    if (!sample) {
        return null;
    }

   return (
        <div>
            <Sample sample={sample}/>
        </div>
   );
};

export default SampleDetails;
  

