using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace IDS.NET.DTO.Post
{
    public class CreateDTO
    {
        public required string Titlte { get; set; }
        public required string Description { get; set; }
        public required string Comment { get; set; }
    }
}