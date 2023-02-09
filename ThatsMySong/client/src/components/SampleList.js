import React, { useEffect,  useState } from "react";
import { getAllSamples } from "../modules/songManager";
import { Link } from "react-router-dom";
import  Sample  from "./Sample";
import { Navigate, useNavigate } from "react-router-dom";

const SampleList = () => {
    const [samples, setSamples] = useState([]);
    const navigate = useNavigate();

    const getSamples = () => {
        getAllSamples().then(samples => setSamples(samples));
    };

    useEffect(() => {
        getSamples();
    }, []);

    return (
        <div>
            
            {samples.map(sample => (
                <div>{sample?.sampledSong?.title}</div>
                
            ))}
            
        </div>
    );
}

export default SampleList;