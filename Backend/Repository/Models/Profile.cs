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
    public int ID { get; set; }

    [Column("email")]
    [Unicode(false)]
    public string Email { get; set; } = null!;

    [Column("password")]
    [Unicode(false)]
    public string Password { get; set; } = null!;

    [Column("name")]
    [Unicode(false)]
    public string Name { get; set; } = null!;

    [Column("token")]
    [Unicode(false)]
    public string? Token { get; set; } = null!;
}
