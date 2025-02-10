using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;


namespace IDS.NET.DTO
{
    public class Login
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
}