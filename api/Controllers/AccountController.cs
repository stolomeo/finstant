using api.Dtos;
using api.Interfaces;
using api.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [ApiController]
    [Route("api/account")]
    public class AccountController : ControllerBase
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly IAuthService _authService;
        private readonly SignInManager<AppUser> _signInManager;
        public AccountController(UserManager<AppUser> userManager, IAuthService authService, SignInManager<AppUser> signInManager)
        {
            _userManager = userManager;
            _authService = authService;
            _signInManager = signInManager;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginRequest loginRequest)
        {
            var user = await _userManager.FindByNameAsync(loginRequest.Username);
            if (user == null)
                return Unauthorized("Invalid username or password.");

            var passwordSignInResult = await _signInManager.CheckPasswordSignInAsync(user, loginRequest.Password, false);
            if (!passwordSignInResult.Succeeded)
                return Unauthorized("Invalid username or password.");

            return Ok(new AuthResponse
            (
                Message: "Successful login",
                Email: user.Email,
                Username: user.UserName,
                Token: _authService.CreateToken(user)
            ));
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(RegisterRequest registerRequest)
        {
            var appUser = new AppUser
            {
                UserName = registerRequest.Username,
                Email = registerRequest.Email
            };

            var createUserResult = await _userManager.CreateAsync(appUser, registerRequest.Password);
            if (!createUserResult.Succeeded)
                return BadRequest(createUserResult.Errors);

            var roleResult = await _userManager.AddToRoleAsync(appUser, "User");
            if (!roleResult.Succeeded)
                return BadRequest(roleResult.Errors);

            return Ok(new AuthResponse
            (
                Message: "User created",
                Username: appUser.UserName,
                Email: appUser.Email,
                Token: _authService.CreateToken(appUser)
            ));
        }
    }
}