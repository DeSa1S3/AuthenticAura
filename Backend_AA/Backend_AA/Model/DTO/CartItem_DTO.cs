using Backend_AA.Model.DBO;

namespace Backend_AA.Model.DTO
{
    public class CartItem_DTO
    {
        public Product Product { get; set; }
        public int Quantity { get; set; }
    }
}
