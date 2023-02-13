import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { getSampleById, editSample, getAllHipHopSongs, getAllSampledSongs } from '../modules/songManager';

const SampleEdit = () => {
    const emptySample = {
        songId: 0,
        sampledSongId: 0
    };
    const [sampleSelect, updateSample] = useState(emptySample)
    const [hipHopSongs, setHipHopSongs] = useState([])
    const [sampledSongs, setSampledSongs] = useState([])

    const { id } = useParams();

    const getSample = () => {
        getSampleById(id).then(updateSample)
    };

    const getHipHopSongs = () => {
        getAllHipHopSongs().then(hipHopSongs => setHipHopSongs(hipHopSongs));};

    const getSampledSongs = () => {
        getAllSampledSongs().then(sampledSongs => setSampledSongs(sampledSongs));
   };

    useEffect(() => {
        getSample();
    }, [])

    useEffect(() => {
        getHipHopSongs();
    }, []);
   
    useEffect(() => {
        getSampledSongs();
    }, []);

    const navigate = useNavigate();

    const handleSave = (event) => {
        event.preventDefault()
        const sampleToSendToAPI = {
            id: sampleSelect.id,
            songId: sampleSelect.songId,
            sampledSongId: sampleSelect.sampledSongId
        }
        
        return editSample(sampleSelect.id, sampleToSendToAPI).then(() => {
                navigate("/samples")
            });
    };

    return (
        <Form>
          <FormGroup>
            <Label for="title">Hip Hop Song</Label>
            <select
                className="song-box"
                id="song-select"
                onChange={
                    (evt) => {
                        const copy = { ...sampleSelect}
                        copy.songId = evt.target.value
                        updateSample(copy)
                    }}>
                <option value="0">Select Hip Hop Song</option>
                
                {hipHopSongs.map((hipHopSong) => {
                    return (
                        <option key={hipHopSong.id}
                                value={hipHopSong.id}>
                                {hipHopSong.title}
                        </option>
                    )
                })}    
                    </select>
          </FormGroup>
          <FormGroup>
            <Label for="albumName">Sampled Song</Label>
            <select
                className="sampled-song-box"
                id="sampled-song-select"
                onChange={
                    (evt) => {
                        const copy = { ...sampleSelect}
                        copy.sampledSongId = evt.target.value
                        updateSample(copy)
                    }}>
                <option value="0">Select Sampled Song</option>
                {sampledSongs.map((sampledSong) => {
                    return (
                        <option key={sampledSong.id}
                                value={sampledSong.id}>
                                {sampledSong.title}
                        </option>
                    )
                })}    
                    </select>
          </FormGroup>
          <Button className="btn btn-primary" onClick={handleSave}>Save</Button>
        </Form>
      );
};

export default SampleEdit;

     
        
    


