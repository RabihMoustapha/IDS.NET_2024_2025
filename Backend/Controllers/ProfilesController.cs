using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using IDS.NET.Repository;
using IDS.NET.Repository.Models;
using System.Security.Cryptography;
using IDS.NET.DTO.Profile;

namespace IDS.NET.Classes
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProfilesController : ControllerBase
    {
        private readonly idsDbContext _context;

        public ProfilesController(idsDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Profile>>> Get()
        {
            return await _context.Profiles.ToListAsync();
        }

        [HttpGet("GetProfileByID/{ID}")]
        public async Task<ActionResult<Profile>> GetByID(int ID)
        {
            var profile = await _context.Profiles.FindAsync(ID);

            if (profile == null)
            {
                return NotFound();
            }

            return profile;
        }

        [HttpPut("UpdateName")]
        public async Task<IActionResult> UpdateName(int ID, [FromBody] UpdateNameDTO profileDTO)
        {
            var profile = await _context.Profiles.FindAsync(ID);
            if (profile == null)
            {
                return NotFound();
            }

            if (ID != profile.ID)
            {
                return BadRequest();
            }

            profile.Name = profileDTO.Name;
            _context.Entry(profile).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProfileExists(ID))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [HttpPut("UpdatePassword")]
        public async Task<IActionResult> UpdatePassword(int ID, [FromBody] UpdatePasswordDTO profileDTO)
        {
            var profile = await _context.Profiles.FindAsync(ID);
            if (profile == null)
            {
                return NotFound();
            }

            if (ID != profile.ID)
            {
                return BadRequest();
            }

            profile.Password = profileDTO.Password;
            _context.Entry(profile).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProfileExists(ID))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [HttpPost("Create")]
        public async Task<ActionResult<Profile>> Create([FromBody] CreateDTO profileDTO)
        {
            var profile = new Profile
            {
                Name = profileDTO.Name,
                Email = profileDTO.Email,
                Password = profileDTO.Password,
            };
            _context.Profiles.Add(profile);
            await _context.SaveChangesAsync();
            return CreatedAtAction("Get", new { ID = profile.ID }, profile);
        }

        [HttpPost("Login")]
        public async Task<ActionResult> Login([FromBody] LoginDTO loginRequest)
        {
            var profile = await _context.Profiles
                .Where(user => user.Email == loginRequest.Email && user.Password == loginRequest.Password)
                .SingleOrDefaultAsync();

            if (profile == null)
            {
                return NotFound(new { message = "InvalID email or password." });
            }

            _context.Entry(profile).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return Ok(new { ID = profile.ID });
        }

        [HttpDelete("Delete")]
        public async Task<IActionResult> Delete(int ID)
        {
            var profile = await _context.Profiles.FindAsync(ID);
            if (profile == null)
            {
                return NotFound();
            }

            _context.Profiles.Remove(profile);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ProfileExists(int ID)
        {
            return _context.Profiles.Any(e => e.ID == ID);
        }
    }
}
