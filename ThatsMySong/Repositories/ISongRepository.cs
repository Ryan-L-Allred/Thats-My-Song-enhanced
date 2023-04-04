using ThatsMySong.Models;

using System.Collections.Generic;

namespace ThatsMySong.Repositories
{
    public interface ISongRepository
    {
        List<HipHopSong> GetAllSongs();
        HipHopSong GetSongById(int id);
        List<HipHopSong> GetAllHipHopSongs();
        List<HipHopSong> GetAllSampledSongs();
        void AddSong(HipHopSong song);
        void UpdateSong(HipHopSong song);
        void DeleteSong(int id);
        List<Sample> GetAllSamples();
        Sample GetSampleById(int id);
        void AddSample(Sample sample);
        void UpdateSample(Sample sample);
        void DeleteSample(int id);
        List<Genre> GetAllGenres();
    }
}
