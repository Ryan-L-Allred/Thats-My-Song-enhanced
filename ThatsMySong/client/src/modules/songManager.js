import { getToken } from "./authManager";
const baseUrl = '/api/song';
const hipHopUrl = '/api/song/hiphopsongs';
const sampleUrl = '/api/song/sample';
const sampledSongUrl = '/api/song/sampledsongs';
const genreUrl = '/api/song/genres';

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

export const getAllHipHopSongs = () => {
  return getToken().then((token) => {
      return fetch(hipHopUrl, {
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

export const getAllSampledSongs = () => {
  return getToken().then((token) => {
      return fetch(sampledSongUrl, {
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

export const getAllSamples = () => {
  return getToken().then((token) => {
    return fetch(sampleUrl, {
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

export const getAllGenres = () => {
  return getToken().then((token) => {
    return fetch(genreUrl, {
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
  // return fetch(`${baseUrl}/${id}`).then((res) => res.json());
  return getToken().then((token) => {
    return fetch(`${baseUrl}/${id}`, {
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

export const getSampleById = (id) => {
  //return fetch(`${sampleUrl}/${id}`).then((res) => res.json());
  return getToken().then((token) => {
    return fetch(`${sampleUrl}/${id}`, {
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

export const addSample = (sample) => {
  return getToken().then((token) => {
      return fetch(sampleUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sample),
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

export const editSong = (id, song) => {
  // return fetch(`${baseUrl}/${id}`, {
  //   method: "PUT",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(song),
  // });
  return getToken().then((token) => {
      return fetch(`${baseUrl}/${id}`, {
          method: "PUT",
          headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
          },
          body: JSON.stringify(song)
      })
          .then((res) => {
              if (res.ok) {
                  return res.json();
              } else if (res.status === 401) {
                  throw new Error("Unauthorized");
              } else {
                  throw new Error(
                      "An unknown error occurred while trying to put post.",
                  );
              }
          });
  });
}



export const editSample = (id, Sample) => {
  // return fetch(`${baseUrl}/${id}`, {
  //   method: "PUT",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(Sample),
  // });
  return getToken().then((token) => {
      return fetch(`${sampleUrl}/${id}`, {
          method: "PUT",
          headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
          },
          body: JSON.stringify(Sample)
      })
          .then((res) => {
              if (res.ok) {
                  return res.json();
              } else if (res.status === 401) {
                  throw new Error("Unauthorized");
              } else {
                  throw new Error(
                      "An unknown error occurred while trying to put post.",
                  );
              }
          });
  });
}

export const deleteSong = (id) => {
  return getToken().then(token => {
    return fetch(`${baseUrl}/${id}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
  })
}

export const deleteSample = (id) => {
  return getToken().then(token => {
    return fetch(`${sampleUrl}/${id}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
})
}

