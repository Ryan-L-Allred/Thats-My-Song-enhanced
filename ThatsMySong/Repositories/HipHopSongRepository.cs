using Microsoft.Extensions.Configuration;
using ThatsMySong.Models;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Data.SqlClient;

namespace ThatsMySong.Repositories
{
    public class HipHopSongRepository : BaseRepository, IHipHopSongRepository
    {
        public HipHopSongRepository(IConfiguration configuration) : base(configuration) { }

        public List<Song> GetAllHipHopSongs()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd =conn.CreateCommand())
                {
                    cmd.CommandText = @"
                          SELECT sa.SongId,
	                             s.Id, s.Title, s.AlbumName, s.ArtistName, s.GenreId, s.UserProfileId,
	                            
	                             g.Name as GenreName
                            FROM Sample sa
	                    LEFT JOIN Song s ON sa.SongId = s.Id
	                   
	                         JOIN Genre g ON s.GenreId = g.Id
                         ORDER BY Title";

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {

                        var hipHopSongs = new List<Song>();
                        while (reader.Read())
                        {
                            var hipHopSong = new Song()
                            {
                                Id = reader.GetInt32(reader.GetOrdinal("SongId")),
                                Title = reader.GetString(reader.GetOrdinal("Title")),
                                AlbumName = reader.GetString(reader.GetOrdinal("AlbumName")),
                                ArtistName = reader.GetString(reader.GetOrdinal("ArtistName")),
                                GenreId = reader.GetInt32(reader.GetOrdinal("GenreId")),
                                Genre = new Genre()
                                {
                                    Id = reader.GetInt32(reader.GetOrdinal("GenreId")),
                                    Name = reader.GetString(reader.GetOrdinal("GenreName"))
                                },
                                UserProfileId = reader.GetInt32(reader.GetOrdinal("UserProfileId"))
                            };
                            hipHopSongs.Add(hipHopSong);
                        }
                        return hipHopSongs;
                    }
                }
            }
        }
    }
}
