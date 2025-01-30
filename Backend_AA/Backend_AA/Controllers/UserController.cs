using Backend_AA.Model.DataContext;
using Backend_AA.Model.DTO;
using Microsoft.AspNetCore.Mvc;

namespace Backend_AA.Controllers
{
    [Route("api/Users/")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IConfiguration _configuration;


        public UserController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        [Route("Me/{Email}")]

        public async Task<IActionResult> Me(string Email)
        {
            try
            {
                using (DataContext DB = new DataContext())
                {
                    var userInfo = DB.user_table.Where(info => info.Email == Email).FirstOrDefault();
                    Me_DTO me_DTO = new Me_DTO()
                    {
                        Id = userInfo.Id,
                        firstName = userInfo.firstName,
                        lastName = userInfo.lastName,
                        DateOfBirth = userInfo.DateOfBirth,
                        Email = userInfo.Email,
                        Password = userInfo.Password,
                        Roles = userInfo.Roles
                    };
                    return Ok(me_DTO);
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }
    }
}
