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
                            ";
                }
            }
        }

    }
}
