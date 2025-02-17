using Microsoft.Identity.Client;
using IDS.NET.Repository.Models;
using NuGet.Configuration;
using Microsoft.Build.Framework;

namespace IDS.NET.DTO.Post
{
    public class CreateDTO
    {
        public required string Title { get; set; }
        public required string Description { get; set; }
        public required string Comment { get; set; }
        public int ProfileID { get; set; }
        public required string ProfileName { get; set; }
    }
}