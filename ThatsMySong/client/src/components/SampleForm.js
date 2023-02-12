import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { addSample } from "../modules/songManager";
import { getAllSongs } from "../modules/songManager";
import { getAllHipHopSongs } from '../modules/songManager';
import { getAllSampledSongs } from '../modules/songManager';

const SampleForm = ({ getSamples }) => {
  const emptySample = {
    songId: 1,
    sampledSongId: 1
  };
const [sample, setSample] = useState(emptySample);


const [hipHopSongs, setHipHopSongs] = useState([])
const getHipHopSongs = () => {
    getAllHipHopSongs().then(hipHopSongs => setHipHopSongs(hipHopSongs));
};
useEffect(() => {
    getHipHopSongs();
}, []);


const [sampledSongs, setSampledSongs] = useState([])
const getSampledSongs = () => {
    getAllSampledSongs().then(sampledSongs => setSampledSongs(sampledSongs));
};
useEffect(() => {
    getSampledSongs();
}, []);
    

  const navigate = useNavigate()

  // const handleInputChange = (evt) => {
  //   const value = evt.target.value;
  //   const key = evt.target.id;

  //   const sampleCopy = { ...sample };

  //   sampleCopy[key] = value;
  //   setSample(sampleCopy);
  // };

  const handleSave = (evt) => {
    evt.preventDefault();

    addSample(sample).then(() => {
        navigate("/samples");
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
                    const copy = { ...sample}
                    copy.songId = evt.target.value
                    setSample(copy)
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
                    const copy = { ...sample}
                    copy.sampledSongId = evt.target.value
                    setSample(copy)
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
      {/* <FormGroup>
        <Label for="artistName">Artist</Label>
        <Input type="text" name="artistName" id="artistName" placeholder="Artist Name"
          value={song.artistName}
          onChange={handleInputChange} />
      </FormGroup> */}
      {/* <FormGroup>
        <Label for="genre">Genre</Label>
      </FormGroup> */}
      <Button className="btn btn-primary" onClick={handleSave}>Save</Button>
    </Form>
  );
};

export default SampleForm;