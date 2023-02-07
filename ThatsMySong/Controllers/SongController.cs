using ThatsMySong.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ThatsMySong.Models;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;

namespace ThatsMySong.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SongController : ControllerBase
    {
        private ISongRepository _songRepo;
        private readonly IUserProfileRepository _userProfileRepo;

        public SongController(ISongRepository songRepo, IUserProfileRepository userProfileRepo)
        {
            _songRepo= songRepo;
            _userProfileRepo= userProfileRepo;
        }

        [Authorize]
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_songRepo.GetAllSongs());
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var song = _songRepo.GetSongById(id);
            if (song == null)
            {
                return NotFound();
            }
            return Ok(song);
        }

        [Authorize]
        [HttpPost]
        public IActionResult Post(Song song)
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            var userProfile = _userProfileRepo.GetByFirebaseUserId(firebaseUserId);

            song.UserProfileId = userProfile.Id;
            _songRepo.AddSong(song);
            return CreatedAtAction("Get", new { id = song.Id }, song);
        }

        [Authorize]
        [HttpPut("{id}")]
        public IActionResult Put(int id, Song song)
        {
            if (id != song.Id)
            {
                return BadRequest();
            }

            _songRepo.UpdateSong(song);
            return NoContent();
        }

        [Authorize]
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _songRepo.DeleteSong(id);
            return NoContent();
        }

    }
}
