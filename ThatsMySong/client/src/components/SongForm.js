import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { addSong } from "../modules/songManager";
import { getAllGenres } from '../modules/songManager';
import { Card, CardBody } from "reactstrap";
import './SongForm.css';

const SongForm = ({ getSongs }) => {
  const emptySong = {
    title: '',
    albumName: '',
    artistName: '',
    genreId: 1
  };
  const [song, setSong] = useState(emptySong);

  const [genres, setGenres] = useState([]);
  const getGenres = () => {
        getAllGenres().then(genres => setGenres(genres));
    };
  
    useEffect(() => {
        getGenres();
    }, []);

    

  const navigate = useNavigate()

  const handleInputChange = (evt) => {
    const value = evt.target.value;
    const key = evt.target.id;

    const songCopy = { ...song };

    songCopy[key] = value;
    setSong(songCopy);
  };

  const handleSave = (evt) => {
    evt.preventDefault();

    addSong(song).then(() => {
      
      if (song.genreId == 1) {
        navigate("/hiphopsongs")
      } else {
        navigate("/sampledsongs")
      }
      
    });
  };

  return (
    <Form>
      <FormGroup>
        <div class="Title" for="title">Title</div>
        <Input type="text" name="title" id="title" placeholder="Song Title"
          value={song.title}
          onChange={handleInputChange} />
      </FormGroup>
      <FormGroup>
        <div for="albumName">Album</div>
        <Input type="text" name="albumName" id="albumName" placeholder="Album Name"
          value={song.albumName}
          onChange={handleInputChange} />
      </FormGroup>
      <FormGroup>
        <div for="artistName">Artist</div>
        <Input type="text" name="artistName" id="artistName" placeholder="Artist Name"
          value={song.artistName}
          onChange={handleInputChange} />
      </FormGroup>
      <FormGroup>
        <div for="genre">Genre</div>
        <select
            className="genre-box"
            id="genre-select"
            onChange={
              (evt) => {
                const copy = { ...song }
                copy.genreId = evt.target.value
                setSong(copy)
              }}
            >
            <option value="0">Select Genre</option>
            {genres.map((genre) => {
              return (
                <option key={genre.id}
                        value={genre.id}>
                        {genre.name}
                        </option>
              )
            })}
        </select>
      </FormGroup>
      <Button className="btn btn-primary" onClick={handleSave}>Save</Button>
    </Form>
  );
};

export default SongForm;