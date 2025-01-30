using Backend_AA.Model.DBO;
using Microsoft.EntityFrameworkCore;

namespace Backend_AA.Model.DataContext
{
    public class DataContext : DbContext    
    {
        public DataContext() => Database.EnsureCreated();
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
        public DbSet<UserTable>  user_table{ set; get; }
        public DbSet<UserReviews> user_reviews { set; get; }
        public DbSet<ShopItems> shop_items { set; get; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseNpgsql("Server=postgres_db;Database=AuthleticAuraDB;Port=5432;User Id=DeSa1S13-user;Password=root;");

            }
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UserTable>().HasData(
                new UserTable()
                {
                    Id = 1,
                    firstName = "Anton",
                    lastName = "Agapov",
                    DateOfBirth = "20.06.06",
                    Email = "antonkrutoi52@gmail.com",
                    Password= "525252",
                    Roles = new string[] {"Admin","Manager","User"}

                },
                new UserTable()
                {
                    Id = 2,
                    firstName = "Иван",
                    lastName = "Розанов",
                    DateOfBirth = "08.12.05",
                    Email = "rozanovivan13@gmail.com",
                    Password = "525252",
                    Roles = new string[] { "Admin", "Manager", "User" }

                }
            );
            base.OnModelCreating(modelBuilder);
        }
    }
}
