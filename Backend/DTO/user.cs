using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace IDS.NET.DTO
{
    public class user
    {

        [StringLength(255)]
        public required string Username { get; set; } = null!;

        [StringLength(255)]
        public required string Email { get; set; } = null!;

        [StringLength(255)]
        public required string Password { get; set; } = null!;
    }
}