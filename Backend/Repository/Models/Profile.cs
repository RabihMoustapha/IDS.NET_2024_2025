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
    [Unicode(false)]
    public required string Email { get; set; }

    [Column("password")]
    [Unicode(false)]
    public required string Password { get; set; }

    [Column("name")]
    [Unicode(false)]
    public required string Name { get; set; }
}
