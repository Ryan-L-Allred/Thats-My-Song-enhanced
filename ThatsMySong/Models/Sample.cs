namespace ThatsMySong.Models
{
    public class Sample
    {
        public int Id { get; set; }
        public int SongId { get; set; }
        public int SampleId { get; set; }
        public Song Song { get; set; }
    }
}
