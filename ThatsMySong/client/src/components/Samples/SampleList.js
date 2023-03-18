import React, { useEffect,  useState } from "react";
import { getAllSamples } from "../../modules/songManager";
import { Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Card, CardBody } from "reactstrap";
import "./SampleList.css"

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
        <Card>
            <CardBody>
                <div class="col-md-12 text-center">
                    <button class="btn-xl" onClick={() => navigate("/samples/addsample")}>Add Sample </button>
                </div>
                    {samples.map(sample => (
                        <section key={sample.id} class="text-center">
                            <Link to={`/samples/${sample.id}`}>
                                <div class="sampleList">{sample?.song?.title}</div>
                            </Link>
                        </section>
            ))}
            </CardBody>
        </Card>
    );
}

export default SampleList;