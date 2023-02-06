using ThatsMySong.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ThatsMySong.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SampleSongController : ControllerBase
    {
        private ISampleSongRepository _sampleSongRepo;

        public SampleSongController(ISampleSongRepository sampleSongRepo)
        {
            _sampleSongRepo = sampleSongRepo;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_sampleSongRepo.GetAllSampleSongs());
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var sampleSong = _sampleSongRepo.GetSampleSongById(id);
            if (sampleSong == null)
            {
                return NotFound();
            }
            return Ok(sampleSong);
        }
    }
}
