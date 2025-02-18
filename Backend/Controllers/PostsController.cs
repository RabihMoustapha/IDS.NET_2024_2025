using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using IDS.NET.Repository;
using IDS.NET.Repository.Models;
using IDS.NET.DTO.Post;

namespace IDS.NET.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostsController : ControllerBase
    {
        private readonly idsDbContext _context;

        public PostsController(idsDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Post>>> Get()
        {
            return await _context.Posts.ToListAsync();
        }

        [HttpGet("GetPostById/{ID}")]
        public async Task<ActionResult<Post>> GetByID(int ID)
        {
            var post = await _context.Posts.FindAsync(ID);

            if (post == null)
            {
                return NotFound();
            }

            return post;
        }

        [HttpPut("UpdateTitle")]
        public async Task<IActionResult> UpdateTitle(int ID, [FromBody] Update postDTO)
        {
            var post = await _context.Posts.FindAsync(ID);
            if (post == null)
            {
                return NotFound();
            }

            if (ID != post.ID)
            {
                return BadRequest();
            }

            post.Title = postDTO.Title;
            _context.Entry(post).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PostExists(ID))
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

        [HttpPut("UpdateDescription")]
        public async Task<IActionResult> UpdateDescription(int id, [FromBody] Update postDTO)
        {
            var post = await _context.Posts.FindAsync(id);
            if (post == null)
            {
                return NotFound();
            }

            if (id != post.ID)
            {
                return BadRequest();
            }

            post.Description = postDTO.Description;
            _context.Entry(post).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }

            catch (DbUpdateConcurrencyException)
            {
                if (!PostExists(id))
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
        public async Task<ActionResult<Post>> Create([FromBody] Create postDTO)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var post = new Post
            {
                ProfileID = postDTO.ProfileID,
                Title = postDTO.Title,
                Description = postDTO.Description,
                ProfileName = postDTO.ProfileName
            };

            _context.Posts.Add(post);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetByID), new { ID = post.ID }, post);
        }

        [HttpDelete("Delete")]
        public async Task<IActionResult> Delete(int ID)
        {
            var post = await _context.Posts.FindAsync(ID);
            if (post == null)
            {
                return NotFound();
            }

            _context.Posts.Remove(post);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PostExists(int ID)
        {
            return _context.Posts.Any(e => e.ID == ID);
        }
    }
}
