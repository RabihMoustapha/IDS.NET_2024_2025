using Microsoft.Identity.Client;
using IDS.NET.Repository.Models;
using NuGet.Configuration;
using Microsoft.Build.Framework;

namespace IDS.NET.DTO.Post
{
    public class CreateDTO
    {
        [Required]
        public string Title { get; set; } = null!;
        [Required]
        public string Description { get; set; } = null!;
        [Required]
        public string Comment { get; set; } = null!;
        [Required]
        public int profileID { get; set; }
    }
}