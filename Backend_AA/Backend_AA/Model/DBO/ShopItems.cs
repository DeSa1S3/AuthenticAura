using System.ComponentModel.DataAnnotations;

namespace Backend_AA.Model.DBO
{
    public class ShopItems
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Color { get; set; }
        public int Price { get; set; }
        public string? Img { get; set; }
        public string[] category { get; set; }
    }
}
