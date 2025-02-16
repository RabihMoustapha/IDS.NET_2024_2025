using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace IDS.NET.Repository.Models;

[Table("posts")]
public partial class Post
{
    [Key]
    [Column("id")]
    public int ID { get; set; }

    [Column("title")]
    [Unicode(false)]
    public string Title { get; set; } = null!;

    [Column("description")]
    [Unicode(false)]
    public string Description { get; set; } = null!;

    [Column("comment")]
    [Unicode(false)]
    public string Comment { get; set; } = null!;
}
