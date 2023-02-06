using ThatsMySong.Models;

using System.Collections.Generic;

namespace ThatsMySong.Repositories
{
    public interface IHipHopSongRepository
    {
        List<Song> GetAllHipHopSongs();
        Song GetHipHopSongById(int id);
    }
}
