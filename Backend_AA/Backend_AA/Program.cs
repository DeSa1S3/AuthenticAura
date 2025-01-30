using Backend_AA.Model.DataContext;
using Microsoft.EntityFrameworkCore;
using Npgsql;

namespace Backend_AA
{
    public class Programm
    {
        public static async Task Main(string[] args)
        {
    
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            builder.Services.AddDbContext<DataContext>(options =>
            {
                options.UseNpgsql(builder.Configuration.GetConnectionString("ServerConn"));
            });

            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowOrigin",
                    builder => builder.WithOrigins("http://localhost:4000")
                                      .AllowAnyMethod()
                                      .AllowAnyHeader());
            });

            var app = builder.Build();

            await EnsureDatabaseInitializedAsync(app);
            app.UseCors("AllowOrigin");

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();

            app.MapControllers();

            await app.RunAsync();


        }
        private static async Task<bool> CheckIfTableExistsAsync(DbContext context, string tableName)
        {
            var connection = (NpgsqlConnection)context.Database.GetDbConnection();
            await connection.OpenAsync();

            var exists = false;

            var command = new NpgsqlCommand(
                $"SELECT EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = '{tableName}');",
                connection);

            exists = (bool)await command.ExecuteScalarAsync();

            await connection.CloseAsync();
            return exists;
        }

        private static async Task EnsureDatabaseInitializedAsync(WebApplication app)
        {
            using var scope = app.Services.CreateScope();
            var context = scope.ServiceProvider.GetRequiredService<DataContext>();

            var tableName = "user_table";

            var tableNameSecond = "user_reviews";

            var tableNameThree = "shop_items";

            var tableExistsThree = await CheckIfTableExistsAsync(context, tableNameThree);

            var tableExistsSecond = await CheckIfTableExistsAsync(context, tableNameSecond);
            

            var tableExists = await CheckIfTableExistsAsync(context, tableName);

            if (!tableExists && !tableExistsSecond && !tableExistsThree)
            {
                await context.Database.MigrateAsync();
            }
        }
    }
}
