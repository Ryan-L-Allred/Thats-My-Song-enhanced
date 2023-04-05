using System.Collections.Generic;
using ThatsMySong.Models;

namespace ThatsMySong.Repositories
{
    public interface IHipHopSongRepository
    {
        List<HipHopSong> GetAllHipHopSongs();
    }
}
