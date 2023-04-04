namespace ThatsMySong.Models
{
    public class Sample
    {
        public int Id { get; set; }
        public int SongId { get; set; }
        public HipHopSong Song { get; set; }
        public int SampledSongId { get; set; }
        public HipHopSong SampledSong { get; set; }
        //public int UserProfileId { get; set; }
    }
}
