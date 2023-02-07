import { getToken } from "./authManager";
const baseUrl = '/api/song';


export const getAllSongs = () => {
    return getToken().then((token) => {
        return fetch(baseUrl, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then((resp) => {
          if (resp.ok) {
            return resp.json();
          } else {
            throw new Error(
              "An unknown error occurred while trying to get songs.",
            );
          }
        });
      });
};

export const getSongById = (id) => {
    return fetch(`${baseUrl}/${id}`).then((res) => res.json());
}

export const addSong = (song) => {
    return getToken().then((token) => {
        return fetch(baseUrl, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(song),
        }).then((resp) => {
          if (resp.ok) {
            return resp.json();
          } else if (resp.status === 401) {
            throw new Error("Unauthorized");
          } else {
            throw new Error(
              "An unknown error occurred while trying to save a new song.",
            );
          }
        });
      });
};