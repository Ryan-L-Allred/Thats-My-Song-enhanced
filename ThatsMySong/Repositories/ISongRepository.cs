using ThatsMySong.Models;

using System.Collections.Generic;

namespace ThatsMySong.Repositories
{
    public interface ISongRepository
    {
        List<Song> GetAllSongs();
        Song GetSongById(int id);
        List<Song> GetAllHipHopSongs();
        Song GetHipHopSongById(int id);
        void AddSong(Song song);
        void UpdateSong(Song song);
        void DeleteSong(int id);
        List<Sample> GetAllSamples();
        void AddSample(Sample sample);
        void UpdateSample(Sample sample);
        void DeleteSample(int id);
    }
}
