using Backend_AA.Model.DBO;
using Microsoft.EntityFrameworkCore;

namespace Backend_AA.Model.DataContext
{
    public class DataContext : DbContext    
    {
        public DataContext() => Database.EnsureCreated();
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
        public DbSet<UserTable>  user_table{ set; get; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseNpgsql("Server=postgres_db;Database=AuthleticAuraDB;Port=5432;User Id=DeSa1S13-user;Password=root;");

            }
        }
    }
}
