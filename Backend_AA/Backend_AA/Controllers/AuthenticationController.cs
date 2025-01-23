//using Microsoft.AspNetCore.Mvc;
//using System.IdentityModel.Tokens.Jwt;
//using Microsoft.IdentityModel.Tokens;
//using System.Text;
//using Microsoft.AspNetCore.Authorization;
//using Microsoft.AspNetCore.Authentication.JwtBearer;
//using Microsoft.AspNetCore.Identity;
//using System.Security.Claims;



//namespace Backend_AA.Controllers
//{
//    [Route("api/Authentication/")]
//    [ApiController]
//    public class AuthenticationController : ControllerBase
//    {
//        private readonly UserManager<IdentityUser> _userManager;
//        private readonly IConfiguration _configuration;
//        private readonly JwtConfig _jwtConfig;

//        public AuthController(UserManager<IdentityUser> userManager, JwtConfig jwtConfig, IConfiguration configuration)
//        {
//            _userManager = userManager;
//            _configuration = configuration;
//            _jwtConfig = jwtConfig;
//        }

//        [HttpPost]
//        [Route("Register")]
//        public async Task<IActionResult> Register([FromBody] AuthDTO authDTO)
//        {
//            //Validate the incoming request
//            if (ModelState.IsValid)
//            {
//                //We need to check if the email already exist
//                var user_exist = await _userManager.FindByEmailAsync(authDTO.Email);

//                if (user_exist != null)
//                {
//                    return BadRequest(new AuthResult()
//                    {
//                        Result = false,
//                        Errors = new List<string>
//                    {
//                        "Email already exist"
//                    }
//                    });
//                }

//                var new_user = new IdentityUser()
//                {
//                    Email = authDTO.Email,
//                    UserName = authDTO.Email

//                };

//                var is_created = await _userManager.CreateAsync(new_user, authDTO.Password);

//                if (is_created.Succeeded)
//                {
//                    var token = GenerateJwtToken(new_user);

//                    return Ok(new AuthResult()
//                    {
//                        Result = true,
//                        Tokens = token
//                    });
//                }

//                return BadRequest(new AuthResult()
//                {
//                    Errors = new List<string>(){
//                    "Server error"
//                }
//                });
//            }
//            return BadRequest();
//        }


//        [Route("Login")]
//        public async Task<IActionResult> Login([FromBody] UserLoginRequestDTO loginRequestDTO)
//        {
//            if (ModelState.IsValid)
//            {
//                //check if user exist
//                var existing_user = await _userManager.FindByEmailAsync(loginRequestDTO.Email);

//                if (existing_user == null)
//                {
//                    return BadRequest(new AuthResult()
//                    {
//                        Errors = new List<string>(){
//                        "Invalid payload"
//                    },
//                        Result = false
//                    });
//                }

//                var isCorrect = await _userManager.CheckPasswordAsync(existing_user, loginRequestDTO.Password);

//                if (!isCorrect)
//                {
//                    return BadRequest(new AuthResult()
//                    {
//                        Errors = new List<string>(){
//                        "Invalid credentials"
//                    },
//                        Result = false
//                    });

//                }
//                var jwtToken = GenerateJwtToken(existing_user);

//                return Ok(new AuthResult()
//                {
//                    Tokens = jwtToken,
//                    Result = true
//                });
//            }

//            return BadRequest(new AuthResult()
//            {
//                Errors = new List<string>(){
//                "Invalid payload"
//            },
//                Result = false
//            });
//        }

//        private string GenerateJwtToken(IdentityUser user)
//        {
//            var jwtTokenHandler = new JwtSecurityTokenHandler();

//            var key = Encoding.UTF8.GetBytes(_configuration.GetSection("JwtConfig:Secret").Value);

//            //Token descriptor
//            var tokenDescriptor = new SecurityTokenDescriptor()
//            {

//                Subject = new ClaimsIdentity(new[]{
//            new Claim("Id", user.Id),
//            new Claim(JwtRegisteredClaimNames.Sub, user.Email),
//            new Claim(JwtRegisteredClaimNames.Email, value:user.Email),
//            new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
//            new Claim(JwtRegisteredClaimNames.Iat, DateTime.Now.ToUniversalTime().ToString())

//          }),

//                Expires = DateTime.UtcNow.Add(TimeSpan.Parse(_configuration.GetSection("JwtConfig:ExpiryTimeFrame").Value)),
//                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256)
//            };

//            var token = jwtTokenHandler.CreateToken(tokenDescriptor);
//            var jwtToken = jwtTokenHandler.WriteToken(token);

//            return jwtToken;
//        }
//    }
//}
