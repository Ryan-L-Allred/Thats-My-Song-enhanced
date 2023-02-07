using Microsoft.Identity.Client;

namespace ThatsMySong.Models
{
    public class Song
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string AlbumName { get; set; }
        public string ArtistName { get; set; }
        public int GenreId { get; set; }
        public Genre Genre { get; set; }
        public int UserProfileId { get; set; }
        
    }
}
