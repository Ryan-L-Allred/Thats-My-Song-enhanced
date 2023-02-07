import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { addSong } from "../modules/songManager";

const SongForm = ({ getSongs }) => {
  const emptySong = {
    title: '',
    albumName: '',
    artistName: '',
    genreId: 1
  };

  const [song, setSong] = useState(emptySong);

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
      // setTag(emptyTag);
      // getTags();
      navigate("/songs")
    });
  };

  return (
    <Form>
      <FormGroup>
        <Label for="title">Title</Label>
        <Input type="text" name="title" id="title" placeholder="Song Title"
          value={song.title}
          onChange={handleInputChange} />
      </FormGroup>
      <FormGroup>
        <Label for="albumName">Album</Label>
        <Input type="text" name="albumName" id="albumName" placeholder="Album Name"
          value={song.albumName}
          onChange={handleInputChange} />
      </FormGroup>
      <FormGroup>
        <Label for="artistName">Artist</Label>
        <Input type="text" name="artistName" id="artistName" placeholder="Artist Name"
          value={song.artistName}
          onChange={handleInputChange} />
      </FormGroup>
      <FormGroup>
        <Label for="genre">Genre</Label>
        <Input type="text" name="genre" id="genre" placeholder="Genre"
          value={song.genreId}
          onChange={handleInputChange} />
      </FormGroup>
      <Button className="btn btn-primary" onClick={handleSave}>Save</Button>
    </Form>
  );
};

export default SongForm;