using ThatsMySong.Models;

using System.Collections.Generic;

namespace ThatsMySong.Repositories
{
    public interface ISongRepository
    {
        List<Song> GetAllSongs();
        Song GetSongById(int id);
        List<Song> GetAllHipHopSongs();
        void AddSong(Song song);
        void UpdateSong(Song song);
        void DeleteSong(int id);
        List<Sample> GetAllSamples();
        Sample GetSampleById(int id);
        void AddSample(Sample sample);
        void UpdateSample(Sample sample);
        void DeleteSample(int id);
    }
}
