using Microsoft.AspNetCore.Mvc;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using System.Security.Claims;
using System.Data;
using Backend_AA.Model.DTO;
using Backend_AA.Model.DataContext;
using Backend_AA.Model.DBO;

namespace Backend_AA.Controllers
{
    [Route("api/Auth/")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IConfiguration _configuration;
     

        public AuthController (IConfiguration configuration)
        {
            _configuration = configuration;
        }
 
        [HttpPost]
        [Route("Register")]
        public async Task<IActionResult> Register([FromBody] Register_DTO register_DTO)
        {
            using(DataContext DB = new DataContext())
            {
                UserTable userTable = new UserTable() { 
                    firstName = register_DTO.firstName,
                    lastName = register_DTO.lastName,
                    DateOfBirth = register_DTO.DateOfBirth,
                    Email = register_DTO.Email,
                    Password = register_DTO.Password
                };
                DB.user_table.Add(userTable);
                await DB.SaveChangesAsync();
                return Ok("Успех!+");

            }
        }

        [HttpPost]
        [Route("Login")]
        public async Task<IActionResult> Login([FromBody] Login_DTO login_DTO)
        {
            using(DataContext DB = new DataContext())
            {
                foreach (var user in DB.user_table)
                {
                    if(user.Email == login_DTO.Email && user.Password == login_DTO.Password)
                    {
                        return Ok("Успешный вход");
                    }
                }
                return BadRequest("Не правильная почта или пароль");
            }
        }


        //[Route("Login")]
        //public async Task<IActionResult> Login([FromBody] UserLoginRequestDTO loginRequestDTO)
        //{
        //    if (ModelState.IsValid)
        //    {
        //        //check if user exist
        //        var existing_user = await _userManager.FindByEmailAsync(loginRequestDTO.Email);

        //        if (existing_user == null)
        //        {
        //            return BadRequest(new AuthResult()
        //            {
        //                Errors = new List<string>(){
        //                "Invalid payload"
        //            },
        //                Result = false
        //            });
        //        }

        //        var isCorrect = await _userManager.CheckPasswordAsync(existing_user, loginRequestDTO.Password);

        //        if (!isCorrect)
        //        {
        //            return BadRequest(new AuthResult()
        //            {
        //                Errors = new List<string>(){
        //                "Invalid credentials"
        //            },
        //                Result = false
        //            });

        //        }
        //        var jwtToken = GenerateJwtToken(existing_user);

        //        return Ok(new AuthResult()
        //        {
        //            Tokens = jwtToken,
        //            Result = true
        //        });
        //    }

        //    return BadRequest(new AuthResult()
        //    {
        //        Errors = new List<string>(){
        //        "Invalid payload"
        //    },
        //        Result = false
        //    });
        //}

        //private string GenerateJwtToken(IdentityUser user)
        //{
        //    var jwtTokenHandler = new JwtSecurityTokenHandler();

        //    var key = Encoding.UTF8.GetBytes(_configuration.GetSection("JwtConfig:Secret").Value);

        //    //Token descriptor
        //    var tokenDescriptor = new SecurityTokenDescriptor()
        //    {

        //        Subject = new ClaimsIdentity(new[]{
        //    new Claim("Id", user.Id),
        //    new Claim(JwtRegisteredClaimNames.Sub, user.Email),
        //    new Claim(JwtRegisteredClaimNames.Email, value:user.Email),
        //    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
        //    new Claim(JwtRegisteredClaimNames.Iat, DateTime.Now.ToUniversalTime().ToString())

        //  }),

        //        Expires = DateTime.UtcNow.Add(TimeSpan.Parse(_configuration.GetSection("JwtConfig:ExpiryTimeFrame").Value)),
        //        SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256)
        //    };

        //    var token = jwtTokenHandler.CreateToken(tokenDescriptor);
        //    var jwtToken = jwtTokenHandler.WriteToken(token);

        //    return jwtToken;
        //}

    }
}
