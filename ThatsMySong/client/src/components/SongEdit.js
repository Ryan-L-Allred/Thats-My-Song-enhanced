import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { getSongById, editSong, getAllGenres } from "../modules/songManager";


const SongEdit = () => {

    // const [songSelect, updateSong] = useState({
    //     id: 0,
    //     title: '',
    //     albumName: '',
    //     artistName: '',
    //     genreId: 0
    // });

    const emptySong = {
      title: '',
      albumName: '',
      artistName: '',
      genreId: 1
    };
    const [songSelect, updateSong] = useState(emptySong);

    
    const [genres, setGenres] = useState([]);
    
    const { id } = useParams();
    

    const getGenres = () => {
        getAllGenres().then(genres => setGenres(genres));
    };

    const getSong = () => {
        getSongById(id).then(updateSong)
    };

    useEffect(() => {
        getGenres();
    }, []);

    useEffect(() => {
        getSong();
    }, [])

  //   if (!songSelect) {
  //     return null;
  // }
  const navigate = useNavigate();

    const handleInputChange = (evt) => {
        const value = evt.target.value;
        const key = evt.target.id;
    
        const songCopy = { ...songSelect };
    
        songCopy[key] = value;
        updateSong(songCopy);
      };

    const handleSave = (event) => {
        event.preventDefault()
        const songToSendToAPI = {
            id: songSelect.id,
            title: songSelect.title,
            albumName: songSelect.albumName,
            artistName: songSelect.artistName,
            genreId: songSelect.genreId,
        }

        return editSong(songSelect.id, songToSendToAPI).then(() => {
                navigate("/hiphopsongs")
            });
    };

    return (
        <Form>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input type="text" name="title" id="title" placeholder="Song Title"
              value={songSelect.title}
              onChange={handleInputChange} />
          </FormGroup>
          <FormGroup>
            <Label for="albumName">Album</Label>
            <Input type="text" name="albumName" id="albumName" placeholder="Album Name"
              value={songSelect.albumName}
              onChange={handleInputChange} />
          </FormGroup>
          <FormGroup>
            <Label for="artistName">Artist</Label>
            <Input type="text" name="artistName" id="artistName" placeholder="Artist Name"
              value={songSelect.artistName}
              onChange={handleInputChange} />
          </FormGroup>
          <FormGroup>
            <Label for="genre">Genre</Label>
            <select
                className="genre-box"
                id="genre-select"
                onChange={
                  (evt) => {
                    const copy = { ...songSelect }
                    copy.genreId = evt.target.value
                    updateSong(copy)
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

export default SongEdit