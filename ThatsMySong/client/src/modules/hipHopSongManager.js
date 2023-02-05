const baseUrl = '/api/hiphopsong';

export const getAllHipHopSongs = () => {
    return fetch(baseUrl)
    .then((res) => res.json())
};