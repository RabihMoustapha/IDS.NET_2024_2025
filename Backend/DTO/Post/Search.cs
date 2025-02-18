using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;


namespace IDS.NET.DTO.Post
{
    public class Search
    {
        public string Title { get; set; } = null!;
    }
}