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
    public class SampledSongController : ControllerBase
    {
        private ISampledSongRepository _sampledSongRepo;
        private readonly IUserProfileRepository _userProfileRepo;

        public SampledSongController(ISampledSongRepository sampledSongRepo, IUserProfileRepository userProfileRepo)
        {
            _sampledSongRepo = sampledSongRepo;
            _userProfileRepo = userProfileRepo;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_sampledSongRepo.GetAllSampledSongs());
        }
    }
}
