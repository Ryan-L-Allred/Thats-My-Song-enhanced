import React, { useEffect,  useState } from "react";
import { getAllHipHopSongs } from "../../modules/songManager";
import { Link } from "react-router-dom";
import { Card, CardBody } from "reactstrap";
import { Navigate, useNavigate } from "react-router-dom";
import "./HipHopSongList.css"

const HipHopSongList = () => {
    const [hipHopSongs, setHipHopSongs] = useState([]);
    const navigate = useNavigate();

    const getHipHopSongs = () => {
        getAllHipHopSongs().then(hipHopSongs => setHipHopSongs(hipHopSongs));
    };

    useEffect(() => {
        getHipHopSongs();
    }, []);

    return (

       //<Card >
        //<CardBody>
            <section>
                <div class="col-md-12 text-center">
                    <button class="btn-xl" onClick={() => navigate("/hiphopsongs/add")}>Add Song </button>
                </div>
            {hipHopSongs.map(hipHopSong => (
                <section key={hipHopSong.id} class="text-center">
                <Link to={`/hiphopsongs/${hipHopSong.id}`}>
                <div class="hiphopsongList">{hipHopSong.title}</div>
                </Link>
            </section>
            ))}
            </section>

        //     </CardBody>
        // </Card>
    );
}

export default HipHopSongList;