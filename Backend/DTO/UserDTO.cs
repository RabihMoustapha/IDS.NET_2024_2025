using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace IDS.NET.DTO
{
    public class UserDTO
    {
        [StringLength(255)]
        public required string Name { get; set; }

        [StringLength(255)]
        public required string Email { get; set; }

        [StringLength(255)]
        public required string Password { get; set; }
    }
}