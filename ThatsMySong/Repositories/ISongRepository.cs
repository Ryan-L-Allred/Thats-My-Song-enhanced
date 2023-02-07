using ThatsMySong.Models;

using System.Collections.Generic;

namespace ThatsMySong.Repositories
{
    public interface ISongRepository
    {
        List<Song> GetAllSongs();
        Song GetSongById(int id);
        void AddSong(Song song);
        void UpdateSong(Song song);
        void DeleteSong(int id);
    }
}
