using Microsoft.AspNetCore.Identity;
using System.Security.Claims;
using System.Data;
using Backend_AA.Model.DTO;
using Backend_AA.Model.DataContext;
using Backend_AA.Model.DBO;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend_AA.Controllers
{
    [Route("api/Reviews/")]
    [ApiController]
    public class ReviewsController : ControllerBase
    {
        private readonly IConfiguration _configuration;


        public ReviewsController(IConfiguration configuration)
        {
            _configuration = configuration;
        }


        [HttpPost]
        [Route("SentReviews")]
        public async Task<IActionResult> SentInfo([FromBody] Reviews_DTO reviews_DTO)
        {
            using (DataContext DB = new DataContext())
            {
                UserReviews userReviews = new UserReviews()
                {
                    UserID = reviews_DTO.UserID,
                    Text = reviews_DTO.Text
                };
                DB.user_reviews.Add(userReviews);
                await DB.SaveChangesAsync();
                return Ok("Успех");

            }
        }
        [HttpGet]
        [Route("GetReviews")]
        public async Task<IActionResult> GetReviews()
        {
            using (DataContext DB = new DataContext())
            {
                var reviews = await DB.user_reviews.ToListAsync();
                return Ok(reviews);
            }
        }

        [HttpGet]
        [Route("GetReview/{id}")]
        public async Task<IActionResult> GetReview(int id)
        {
            using (DataContext DB = new DataContext())
            {
                var review = await DB.user_reviews.FindAsync(id);
                if (review == null)
                {
                    return NotFound("Отзыв не найден.");
                }
                return Ok(review);
            }

        }
        [HttpDelete]
        [Route("DeleteReview/{id}")]
        public async Task<IActionResult> DeleteReview(int id)
        {
            using (DataContext DB = new DataContext())
            {
                var review = await DB.user_reviews.FindAsync(id);
                if (review == null)
                {
                    return NotFound("Отзыв не найден.");
                }

                DB.user_reviews.Remove(review);
                await DB.SaveChangesAsync();

                return Ok("Отзыв успешно удалён.");
            }
        }
    }
}
