using System;
using System.Collections.Generic;
using Microsoft.Data.SqlClient;
using ThatsMySong.Models;
using Microsoft.Extensions.Configuration;

namespace ThatsMySong.Repositories
{
    public class SampleSongRepository : BaseRepository, ISampleSongRepository
    {
        public SampleSongRepository(IConfiguration configuration) : base(configuration) { }
        
            public List<Song> GetAllSampleSongs()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT sa.SampledSongId,

	                           s.Id, s.Title, s.AlbumName, s.ArtistName, s.GenreId, s.UserProfileId,

	                           g.Name as GenreName
                            FROM Sample sa
	                        JOIN Song s ON  sa.SampledSongId = s.Id

	                        JOIN Genre g ON s.GenreId = g.Id
	                        ORDER BY Title;";

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {

                        var sampleSongs = new List<Song>();
                        while (reader.Read())
                        {
                            var sampleSong = new Song()
                            {
                                Id = reader.GetInt32(reader.GetOrdinal("SampledSongId")),
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
                            sampleSongs.Add(sampleSong);
                        }
                        return sampleSongs;
                    }
                }
            }
        }

        public Song GetSampleSongById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                          SELECT sa.SampledSongId,
	                             s.Id, s.Title, s.AlbumName, s.ArtistName, s.GenreId, s.UserProfileId,
	                            
	                             g.Name as GenreName
                            FROM Sample sa
	                    LEFT JOIN Song s ON sa.SampledSongId = s.Id
	                   
	                         JOIN Genre g ON s.GenreId = g.Id
                         WHERE sa.SampledSongId = @Id";
                    cmd.Parameters.AddWithValue("@id", id);

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        Song sampleSong = null;
                        if (reader.Read())
                        {
                            sampleSong = new Song()
                            {
                                Id = reader.GetInt32(reader.GetOrdinal("SampledSongId")),
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
                        }
                        return sampleSong;
                    }
                }
            }
        }
    }
}

