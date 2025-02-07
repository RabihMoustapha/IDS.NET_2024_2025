using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace IDS.NET.Repository.Models;

[Table("profile")]
public partial class Profile
{
    [Key]
    [Column("id")]
    public int Id { get; set; }

    [Column("email")]
    [StringLength(250)]
    public string Email { get; set; } = null!;

    [Column("password")]
    [StringLength(250)]
    public string Password { get; set; } = null!;

    [Column("name")]
    [StringLength(250)]
    public string? Name { get; set; }
}
