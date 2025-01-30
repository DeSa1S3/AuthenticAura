//using Backend_AA.Model.DBO;
//using Microsoft.AspNetCore.Mvc;

//namespace Backend_AA.Controllers
//{
//    [Route("api/Cart")]
//    [ApiController]
//    public class CartController : ControllerBase
//    {
//        private readonly IConfiguration _configuration;
//        private readonly List<CartItem> _cartItems; 

//        public CartController(IConfiguration configuration)
//        {
//            _configuration = configuration;
//            _cartItems = new List<CartItem>(); 
//        }

//        [HttpPost("AddItem")]
//        public IActionResult AddItem([FromBody] CartItem cartItem)
//        {
//            if (cartItem == null)
//            {
//                return BadRequest("Item cannot be null");
//            }

            
//            _cartItems.Add(cartItem);
//            return Ok("Item added to cart");
//        }

//        [HttpDelete("RemoveItem/{id}")]
//        public IActionResult RemoveItem(int id)
//        {
//            var itemToRemove = _cartItems.FirstOrDefault(i => i.Id == id);
//            if (itemToRemove == null)
//            {
//                return NotFound("");
//            }

//            _cartItems.Remove(itemToRemove);
//            return Ok("Item removed from cart");
//        }

//        [HttpGet("GetItems")]
//        public IActionResult GetItems()
//        {
            
//            return Ok(_cartItems);
//        }
//    }


//}
