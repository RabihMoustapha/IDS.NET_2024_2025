using IDS.NET.Repository;
using IDS.NET.DTO;
using IDS.NET.Repository.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace IDS.NET.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly idsDbContext dbContext;

        public UsersController(idsDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpPost]
        public IActionResult CreateUser([FromBody] UserDTO user)
        {
            if (user == null)
            {
                return BadRequest("User data is required.");
            }
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                var newUser = new UserDTO
                {
                    Name = user.Name,
                    Email = user.Email,
                    Password = user.Password,
                };

                dbContext.Profiles.Add(newUser);
                dbContext.SaveChanges();
                return CreatedAtAction(nameof(GetUserByUsernameAndEmail), new { username = newUser.Name, email = newUser.Email }, newUser);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new
                {
                    Message = "An error occurred while creating the user.",
                    Error = ex.InnerException?.Message ?? ex.Message
                });
            }
        }


        // POST: api/users/login
        [HttpPost("login")]
        public IActionResult Login([FromBody] Login login)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                var user = dbContext.Profiles.FirstOrDefault(u => u.Email == login.Email);
                if (user == null)
                {
                    return Unauthorized(new { Message = "User not found." });
                }

                // Check if the password matches 
                if (user.Password != login.Password)
                {
                    return Unauthorized(new { Message = "Invalid credentials." });
                }

                return Ok(new { Message = "Login successful", User = new { user.Name, user.Email } });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new
                {
                    Message = "An error occurred while logging in.",
                    Error = ex.InnerException?.Message ?? ex.Message
                });
            }
        }






        // GET: api/users/{username}/{email}
        [HttpGet("{username}/{email}")]
        public IActionResult GetUserByUsernameAndEmail(string username, string email)
        {
            try
            {
                var user = dbContext.Profiles.FirstOrDefault(u => u.Name == username && u.Email == email);

                if (user == null)
                {
                    return NotFound(new { Message = "User not found." });
                }

                var users = new User
                {
                    Name = user.Name,
                    Email = user.Email,
                    Password = user.Password,

                };

                return Ok(user);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new
                {
                    Message = "An error occurred while retrieving the user.",
                    Error = ex.InnerException?.Message ?? ex.Message
                });
            }
        }

        // GET: api/users
        [HttpGet]
        public IActionResult GetAllUsers()
        {
            try
            {
                var users = dbContext.Profiles.ToList();

                if (users == null || !users.Any())
                {
                    return NotFound(new { Message = "No users found." });
                }

                var user = users.Select(user => new User
                {
                    Name = user.Name,
                    Email = user.Email,
                    Password = user.Password,
                }).ToList();

                return Ok(users);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new
                {
                    Message = "An error occurred while retrieving all users.",
                    Error = ex.InnerException?.Message ?? ex.Message
                });
            }
        }
    }
}