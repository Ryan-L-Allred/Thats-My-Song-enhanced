namespace ThatsMySong.Models
{
    public class Sample
    {
        public int Id { get; set; }
        public int SongId { get; set; }
        public int SampledSongId { get; set; }
        public Song Song { get; set; }
        public Song SampledSong { get; set; }
        //public int UserProfileId { get; set; }
    }
}
