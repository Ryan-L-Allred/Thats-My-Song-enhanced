using System.Collections.Generic;
using ThatsMySong.Models;

namespace ThatsMySong.Repositories
{
    public interface ISampleSongRepository
    {
        List<Song> GetAllSampleSongs();
        Song GetSampleSongById(int id);
    }
}
