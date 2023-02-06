const baseUrl = '/api/hiphopsong';

export const getAllHipHopSongs = () => {
    return fetch(baseUrl)
    .then((res) => res.json())
};

export const getHipHopSongById = (id) => {
    return fetch(`${baseUrl}/${id}`).then((res) => res.json());
}