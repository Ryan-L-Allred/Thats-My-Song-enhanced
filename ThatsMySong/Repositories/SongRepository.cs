using Microsoft.Extensions.Configuration;
using ThatsMySong.Models;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Data.SqlClient;
using System.Runtime.InteropServices;

namespace ThatsMySong.Repositories
{
    public class SongRepository : BaseRepository, ISongRepository
    {
        public SongRepository(IConfiguration configuration) : base(configuration) { }

        public List<Song> GetAllSongs()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd =conn.CreateCommand())
                {
                    cmd.CommandText = @"
                          SELECT s.Id, s.Title, s.AlbumName, s.ArtistName, s.GenreId, s.UserProfileId,
	                             g.Name as GenreName
                            FROM Song s
                            JOIN Genre g ON s.GenreId = g.Id
                        ORDER BY Title";

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {

                        var songs = new List<Song>();
                        while (reader.Read())
                        {
                            var song = new Song()
                            {
                                Id = reader.GetInt32(reader.GetOrdinal("Id")),
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
                            songs.Add(song);
                        }
                        return songs;
                    }
                }
            }
        }

        public Song GetSongById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                          SELECT s.Id, s.Title, s.AlbumName, s.ArtistName, s.GenreId, s.UserProfileId,
	                             g.Name as GenreName
                            FROM Song s
                            JOIN Genre g ON s.GenreId = g.Id
                         WHERE s.Id = @Id";
                    cmd.Parameters.AddWithValue("@id", id);

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        Song song = null;
                        if (reader.Read())
                        {
                            song = new Song()
                            {
                                Id = reader.GetInt32(reader.GetOrdinal("Id")),
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
                        return song;
                    }
                }
            }
        }

        public void AddSong(Song song)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using(var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                     INSERT INTO Song (Title, AlbumName, ArtistName, GenreId, UserProfileId)
                     OUTPUT INSERTED.ID
                     VALUES (@Title, @AlbumName, @ArtistName, @GenreId, @UserProfileId)";
                    cmd.Parameters.AddWithValue("@Title", song.Title);
                    cmd.Parameters.AddWithValue("@AlbumName", song.AlbumName);
                    cmd.Parameters.AddWithValue("@ArtistName", song.ArtistName);
                    cmd.Parameters.AddWithValue("@GenreId", song.GenreId);
                    cmd.Parameters.AddWithValue("@UserProfileId", song.UserProfileId);

                    song.Id = (int)cmd.ExecuteScalar();
                }
            }
        }

        public void UpdateSong(Song song)
        {
            using (var conn = Connection)
            {

                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                            UPDATE Song
                               SET Title = @Title,
                                   AlbumName = @AlbumName,
                                   ArtistName = @ArtistName,
                                   GenreId = @GenreId,
                                   UserProfileId = @UserProfileId
                             WHERE Id = @Id";

                    cmd.Parameters.AddWithValue("@Title", song.Title);
                    cmd.Parameters.AddWithValue("@AlbumName", song.AlbumName);
                    cmd.Parameters.AddWithValue("@ArtistName", song.ArtistName);
                    cmd.Parameters.AddWithValue("@GenreId", song.GenreId);
                    cmd.Parameters.AddWithValue("@UserProfileId", song.UserProfileId);

                    cmd.ExecuteNonQuery();
                }
            }
        }

        public void DeleteSong(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = "DELETE FROM Song WHERE Id = @Id";
                    cmd.Parameters.AddWithValue("@id", id);

                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}
