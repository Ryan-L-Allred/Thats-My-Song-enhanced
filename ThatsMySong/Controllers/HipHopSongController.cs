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
    public class HipHopSongController : ControllerBase
    {
        private IHipHopSongRepository _hipHopSongRepo;
        private readonly IUserProfileRepository _userProfileRepo;

        public HipHopSongController(IHipHopSongRepository hipHopSongRepo, IUserProfileRepository userProfileRepo)
        {
            _hipHopSongRepo = hipHopSongRepo;
            _userProfileRepo = userProfileRepo;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_hipHopSongRepo.GetAllHipHopSongs());
        }
    }
}
