using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace IDS.NET.Repository.Models;

[Table("comments")]
public partial class Comment
{
    [Key]
    [Column("id")]
    public int Id { get; set; }

    [Column("profileID")]
    public int ProfileId { get; set; }

    [Column("comment")]
    [Unicode(false)]
    public string Comment1 { get; set; } = null!;

    [Column("profileName")]
    [Unicode(false)]
    public string ProfileName { get; set; } = null!;

    [Column("postID")]
    public int PostId { get; set; }
}
