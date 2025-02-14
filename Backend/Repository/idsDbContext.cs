using System;
using System.Collections.Generic;
using IDS.NET.Repository.Models;
using Microsoft.EntityFrameworkCore;

namespace IDS.NET.Repository;

public partial class idsDbContext : DbContext
{
    public idsDbContext()
    {
    }

    public idsDbContext(DbContextOptions<idsDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Post> Posts { get; set; }

    public virtual DbSet<Profile> Profiles { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlServer("Data Source=DESKTOP-I8F3IHT;Initial Catalog=ids;Integrated Security=True;Encrypt=True;Trust Server Certificate=True");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
