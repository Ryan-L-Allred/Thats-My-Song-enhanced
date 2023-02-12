using Microsoft.Extensions.Configuration;
using ThatsMySong.Models;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Data.SqlClient;
using System.Runtime.InteropServices;
using Azure;

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
                using (var cmd = conn.CreateCommand())
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

        public List<Song> GetAllHipHopSongs()
        {
            using (var conn = Connection)
            {

                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT Id, Title, AlbumName, ArtistName, GenreId, UserProfileId
	                    FROM Song 
	                    WHERE  GenreId = 1
                        ORDER by Title";

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {

                        var hipHopSongs = new List<Song>();
                        while (reader.Read())
                        {
                            var hipHopSong = new Song()
                            {
                                Id = reader.GetInt32(reader.GetOrdinal("Id")),
                                Title = reader.GetString(reader.GetOrdinal("Title")),
                                AlbumName = reader.GetString(reader.GetOrdinal("AlbumName")),
                                ArtistName = reader.GetString(reader.GetOrdinal("ArtistName")),
                                GenreId = reader.GetInt32(reader.GetOrdinal("GenreId")),
                                UserProfileId = reader.GetInt32(reader.GetOrdinal("UserProfileId"))
                            };
                            hipHopSongs.Add(hipHopSong);
                        }
                        return hipHopSongs;
                    }
                }
            }
        }

        public List<Song> GetAllSampledSongs()
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
                        JOIN Genre g On s.GenreId = g.Id
	                    WHERE  g.Name != 'Hip Hop'
                        ORDER by Title";

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {

                        var sampledSongs = new List<Song>();
                        while (reader.Read())
                        {
                            var sampledSong = new Song()
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
                            sampledSongs.Add(sampledSong);
                        }
                        return sampledSongs;
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

                    cmd.Parameters.AddWithValue("@Id", song.Id);
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
                    cmd.Parameters.AddWithValue("@Id", id);

                    cmd.ExecuteNonQuery();
                }
            }
        }

        public List<Sample> GetAllSamples()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                               SELECT sa.Id, sa.SongId, 
	                                  s.Title as SongTitle , s.AlbumName as SongAlbumName, s.ArtistName as SongArtistName,
                                      s.GenreId as SongGenreId, s.UserProfileId as SongUserProfileId,

	                                  g.Name as SongGenreName,

	                                  sa.SampledSongId,
	                                  ss.Title as SampleTitle, ss.AlbumName as SampleAlbumName, ss.ArtistName as SampleArtistName,
                                      ss.GenreId as SampleGenreId, ss.UserProfileId as SampleUserProfileId,

	                                  gg.Name as SampleGenreName

                                      FROM Sample sa
	                                  JOIN Song s ON sa.SongId = s.Id
	                                  JOIN Genre g ON s.GenreId = g.Id
	                                  JOIN Song ss ON sa.SampledSongId = ss.Id
	                                  JOIN Genre gg ON ss.GenreId = gg.Id
                                      ";

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        var samples = new List<Sample>();
                            while (reader.Read())
                        {
                            var sample = new Sample()
                            {
                                Id = reader.GetInt32(reader.GetOrdinal("Id")),
                                SongId = reader.GetInt32(reader.GetOrdinal("SongId")),
                                Song = new Song()
                                {
                                    Id = reader.GetInt32(reader.GetOrdinal("SongId")),
                                    Title = reader.GetString(reader.GetOrdinal("SongTitle")),
                                    AlbumName = reader.GetString(reader.GetOrdinal("SongAlbumName")),
                                    ArtistName = reader.GetString(reader.GetOrdinal("SongArtistName")),
                                    GenreId = reader.GetInt32(reader.GetOrdinal("SongGenreId")),
                                    Genre = new Genre()
                                    {
                                        Id = reader.GetInt32(reader.GetOrdinal("SongGenreId")),
                                        Name = reader.GetString(reader.GetOrdinal("SongGenreName"))
                                    },
                                    UserProfileId = reader.GetInt32(reader.GetOrdinal("SongUserProfileId"))
                                },
                                SampledSongId = reader.GetInt32(reader.GetOrdinal("SampledSongId")),
                                SampledSong = new Song()
                                {
                                    Id = reader.GetInt32(reader.GetOrdinal("SampledSongId")),
                                    Title = reader.GetString(reader.GetOrdinal("SampleTitle")),
                                    AlbumName = reader.GetString(reader.GetOrdinal("SampleAlbumName")),
                                    ArtistName = reader.GetString(reader.GetOrdinal("SampleArtistName")),
                                    GenreId = reader.GetInt32(reader.GetOrdinal("SampleGenreId")),
                                    Genre = new Genre()
                                    {
                                        Id = reader.GetInt32(reader.GetOrdinal("SampleGenreId")),
                                        Name = reader.GetString(reader.GetOrdinal("SampleGenreName"))
                                    },
                                    UserProfileId = reader.GetInt32(reader.GetOrdinal("SampleUserProfileId"))
                                }
                            };
                            samples.Add(sample);
                        }
                            return samples;
                    }
                }
            }
        }

        public Sample GetSampleById(int id)
        {
            using (var conn = Connection)
            {

                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                    SELECT sa.Id, sa.SongId, 
	                                  s.Title as SongTitle , s.AlbumName as SongAlbumName, s.ArtistName as SongArtistName,
                                      s.GenreId as SongGenreId, s.UserProfileId as SongUserProfileId,

	                                  g.Name as SongGenreName,

	                                  sa.SampledSongId,
	                                  ss.Title as SampleTitle, ss.AlbumName as SampleAlbumName, ss.ArtistName as SampleArtistName,
                                      ss.GenreId as SampleGenreId, ss.UserProfileId as SampleUserProfileId,

	                                  gg.Name as SampleGenreName

                                      FROM Sample sa
	                                  JOIN Song s ON sa.SongId = s.Id
	                                  JOIN Genre g ON s.GenreId = g.Id
	                                  JOIN Song ss ON sa.SampledSongId = ss.Id
	                                  JOIN Genre gg ON ss.GenreId = gg.Id
                                      WHERE sa.Id = @id";

                    cmd.Parameters.AddWithValue("@id", id);

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        Sample sample = null;
                        if (reader.Read())
                        {
                            sample = new Sample()
                            {
                                Id = reader.GetInt32(reader.GetOrdinal("Id")),
                                SongId = reader.GetInt32(reader.GetOrdinal("SongId")),
                                Song = new Song()
                                {
                                    Id = reader.GetInt32(reader.GetOrdinal("SongId")),
                                    Title = reader.GetString(reader.GetOrdinal("SongTitle")),
                                    AlbumName = reader.GetString(reader.GetOrdinal("SongAlbumName")),
                                    ArtistName = reader.GetString(reader.GetOrdinal("SongArtistName")),
                                    GenreId = reader.GetInt32(reader.GetOrdinal("SongGenreId")),
                                    Genre = new Genre()
                                    {
                                        Id = reader.GetInt32(reader.GetOrdinal("SongGenreId")),
                                        Name = reader.GetString(reader.GetOrdinal("SongGenreName"))
                                    },
                                    UserProfileId = reader.GetInt32(reader.GetOrdinal("SongUserProfileId"))
                                },
                                SampledSongId = reader.GetInt32(reader.GetOrdinal("SampledSongId")),
                                SampledSong = new Song()
                                {
                                    Id = reader.GetInt32(reader.GetOrdinal("SampledSongId")),
                                    Title = reader.GetString(reader.GetOrdinal("SampleTitle")),
                                    AlbumName = reader.GetString(reader.GetOrdinal("SampleAlbumName")),
                                    ArtistName = reader.GetString(reader.GetOrdinal("SampleArtistName")),
                                    GenreId = reader.GetInt32(reader.GetOrdinal("SampleGenreId")),
                                    Genre = new Genre()
                                    {
                                        Id = reader.GetInt32(reader.GetOrdinal("SampleGenreId")),
                                        Name = reader.GetString(reader.GetOrdinal("SampleGenreName"))
                                    },
                                    UserProfileId = reader.GetInt32(reader.GetOrdinal("SampleUserProfileId"))
                                }
                            };
                        }
                        return sample;
                    }
                }
            }
        }

        public void AddSample(Sample sample)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {

                    cmd.CommandText = @"
                         INSERT INTO Sample (SongId, SampledSongId)
                         OUTPUT INSERTED.ID
                         VALUES (@songId, @sampledSongId)";
                    cmd.Parameters.AddWithValue("@songId", sample.SongId);
                    cmd.Parameters.AddWithValue("@sampledSongId", sample.SampledSongId);
                    //cmd.Parameters.AddWithValue("@userProfileId", sample.UserProfileId);

                    sample.Id = (int)cmd.ExecuteScalar();
                }
            }
        }

        public void UpdateSample(Sample sample)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        UPDATE Sample
                           SET SongId = @songId,
                               SampledSongId = @sampledSongId
                        WHERE Id = @id";
                    cmd.Parameters.AddWithValue("@id", sample.Id);
                    cmd.Parameters.AddWithValue("@songId", sample.SongId);
                    cmd.Parameters.AddWithValue("@sampledSongid", sample.SampledSongId);

                    cmd.ExecuteNonQuery();
                }
            }
        }

        public void DeleteSample(int id)
        {
            using (var conn = Connection)
            {

                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = "DELETE FROM Sample WHERE Id = @Id";
                    cmd.Parameters.AddWithValue("@id", id);

                    cmd.ExecuteNonQuery();
                }
            }
        }
        
        public List<Genre> GetAllGenres()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT Id, [Name]
                           FROM Genre
                          ORDER BY [Name]";

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        var genres = new List<Genre>();
                        while (reader.Read())
                        {
                            var genre = new Genre()
                            {
                                Id = reader.GetInt32(reader.GetOrdinal("Id")),
                                Name = reader.GetString(reader.GetOrdinal("Name"))
                            };
                            genres.Add(genre);
                        }

                        return genres;
                    }
                }
            }
        }
    }
}
