using System.Collections.Generic;
using ThatsMySong.Models;

namespace ThatsMySong.Repositories
{
    public interface ISampledSongRepository
    {
        List<SampledSong> GetAllSampledSongs();
    }
}
