using Microsoft.Identity.Client;

namespace ThatsMySong.Models
{
    public class Album
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int ArtistId { get; set; }
        public int GenreId { get; set; }
    }
}
