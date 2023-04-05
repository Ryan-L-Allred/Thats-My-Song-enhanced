using Microsoft.Extensions.Configuration;
using ThatsMySong.Models;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Data.SqlClient;
using System.Runtime.InteropServices;
using Azure;

namespace ThatsMySong.Repositories
{
    public class SampledSongRepository : BaseRepository , ISampledSongRepository
    {
        public SampledSongRepository(IConfiguration configuration) : base(configuration) { }

        public List<SampledSong> GetAllSampledSongs()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                            SELECT ss.Id, ss.Title, ss.AlbumId, ss.ArtistId, ss.GenreId, ss.UserProfileId,
	                               al.Title as AlbumTitle,
	                               ar.Name as ArtistName,
	                               g.Name as Genre
                              FROM SampledSong ss
                              JOIN Album al ON ss.AlbumId = al.Id
	                          JOIN Artist ar ON ss.ArtistId = ar.Id
	                          JOIN Genre g ON ss.GenreId = g.Id
                          ORDER BY Title";

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {

                        var sampledSongs = new List<SampledSong>();
                        while (reader.Read())
                        {
                            var sampledSong = new SampledSong()
                            {
                                Id = reader.GetInt32(reader.GetOrdinal("Id")),
                                Title = reader.GetString(reader.GetOrdinal("Title")),
                                AlbumId = reader.GetInt32(reader.GetOrdinal("AlbumId")),
                                Album = new Album()
                                {
                                    Id = reader.GetInt32(reader.GetOrdinal("Id")),
                                    Title = reader.GetString(reader.GetOrdinal("AlbumTitle")),
                                },
                                ArtistId = reader.GetInt32(reader.GetOrdinal("ArtistId")),
                                Artist = new Artist()
                                {
                                    Id = reader.GetInt32(reader.GetOrdinal("Id")),
                                    Name = reader.GetString(reader.GetOrdinal("ArtistName")),
                                },
                                GenreId = reader.GetInt32(reader.GetOrdinal("GenreId")),
                                Genre = new Genre()
                                {
                                    Id = reader.GetInt32(reader.GetOrdinal("Id")),
                                    Name = reader.GetString(reader.GetOrdinal("Genre"))
                                },
                                UserProfileId = reader.GetInt32(reader.GetOrdinal("UserProfileId"))
                            };
                            sampledSongs.Add(sampledSong);
                        }
                        return sampledSongs;
                    }
                }
            }
        }

    }
}
