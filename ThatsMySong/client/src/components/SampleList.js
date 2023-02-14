import React, { useEffect,  useState } from "react";
import { getAllSamples } from "../modules/songManager";
import { Link } from "react-router-dom";
import  Sample  from "./Sample";
import { Navigate, useNavigate } from "react-router-dom";
import { deleteSample } from "../modules/songManager";
import { useParams } from "react-router-dom";
import { getSampleById } from "../modules/songManager";

const SampleList = () => {
    const [samples, setSamples] = useState([]);
    const [sampleDelete, deleteSample] = useState();
    const navigate = useNavigate();
    const { id } = useParams();

    const getSamples = () => {
        getAllSamples().then(samples => setSamples(samples));
    };

   
    useEffect(() => {
        getSamples();
    }, []);


    

    return (
        <div>
            <button onClick={() => navigate("/samples/addsample")}>Add Sample </button>
            {samples.map(sample => (
                <section key={sample.id} className="sampleList">
                <Link to={`/samples/${sample.id}`}>
                <div>{sample?.song?.title}</div>
                </Link>
                {/* <button onClick={handleSave}>Delete Sample</button> */}
                </section>
            ))}
            
        </div>
    );
}

export default SampleList;