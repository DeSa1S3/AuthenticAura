using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace Backend_AA.Migrations
{
    public partial class Init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "shop_items",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(type: "text", nullable: false),
                    Color = table.Column<string>(type: "text", nullable: false),
                    Price = table.Column<int>(type: "integer", nullable: false),
                    Img = table.Column<string>(type: "text", nullable: true),
                    category = table.Column<string[]>(type: "text[]", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_shop_items", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "user_reviews",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    UserID = table.Column<int>(type: "integer", nullable: false),
                    Text = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_user_reviews", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "user_table",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    firstName = table.Column<string>(type: "text", nullable: false),
                    lastName = table.Column<string>(type: "text", nullable: false),
                    DateOfBirth = table.Column<string>(type: "text", nullable: false),
                    Email = table.Column<string>(type: "text", nullable: false),
                    Password = table.Column<string>(type: "text", nullable: false),
                    Roles = table.Column<string[]>(type: "text[]", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_user_table", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "user_table",
                columns: new[] { "Id", "DateOfBirth", "Email", "Password", "Roles", "firstName", "lastName" },
                values: new object[,]
                {
                    { 1, "20.06.06", "antonkrutoi52@gmail.com", "525252", new[] { "Admin", "Manager", "User" }, "Anton", "Agapov" },
                    { 2, "08.12.05", "ivankrutoi52@gmail.com", "525252", new[] { "Admin", "Manager", "User" }, "Ivan", "Rozanov" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "shop_items");

            migrationBuilder.DropTable(
                name: "user_reviews");

            migrationBuilder.DropTable(
                name: "user_table");
        }
    }
}
