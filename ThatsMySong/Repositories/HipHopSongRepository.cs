using Microsoft.Extensions.Configuration;
using ThatsMySong.Models;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Data.SqlClient;
using System.Runtime.InteropServices;
using Azure;

namespace ThatsMySong.Repositories
{
    public class HipHopSongRepository : BaseRepository, IHipHopSongRepository
    {
        public HipHopSongRepository(IConfiguration configuration) : base(configuration) { } 
        
        public List<HipHopSong> GetAllHipHopSongs()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                     SELECT hhs.Id, hhs.Title, hhs.AlbumId, hhs.ArtistId, hhs.GenreId, hhs.UserProfileId,
	                        al.Title as AlbumTitle,
	                        ar.Name as ArtistName,
	                        g.Name as Genre
                       FROM HipHopSong hhs
                       JOIN Album al ON hhs.AlbumId = al.Id
	                   JOIN Artist ar ON hhs.ArtistId = ar.Id
	                   JOIN Genre g ON hhs.GenreId = g.Id
                   ORDER BY Title";

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {

                        var hipHopSongs = new List<HipHopSong>();
                        while (reader.Read())
                        {
                            var hipHopSong = new HipHopSong()
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
                            hipHopSongs.Add(hipHopSong);
                        }
                        return hipHopSongs;
                    }

                }
            }
        }
    }
}
