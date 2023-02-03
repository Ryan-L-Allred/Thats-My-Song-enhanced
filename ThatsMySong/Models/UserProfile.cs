using System;
using System.ComponentModel.DataAnnotations;

namespace ThatsMySong.Models
{
    public class UserProfile
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(50)]
        public string Name { get; set; }

        [Required]
        [DataType(DataType.EmailAddress)]
        [MaxLength(255)]
        public string Email { get; set; }

        [StringLength(28, MinimumLength = 28)]
        public string FirebaseUserId { get; set; }

        [Required]
        public int UserTypeId { get; set; }
        public UserType UserType { get; set; }
    }
}
