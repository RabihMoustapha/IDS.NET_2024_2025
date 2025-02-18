using Microsoft.Identity.Client;
using IDS.NET.Repository.Models;
using NuGet.Configuration;
using Microsoft.Build.Framework;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace IDS.NET.DTO.Post
{
    public class Create
    {
        public int ProfileID { get; set; }
        public required string Title { get; set; }
        public required string Description { get; set; }
        public required string ProfileName { get; set; }
    }
}