using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;


namespace IDS.NET.DTO
{
    public class Login
    {
        public required string Email { get; set; }
        public required string Password { get; set; }
    }
}