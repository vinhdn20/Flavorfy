using Flavorfy.BE.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Repository.Interfaces;
using Services;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Flavorfy.BE.Controllers.Account
{
    public class AccountController : Controller
    {
        private readonly IConfiguration _configuration;
        private readonly IAccountService _accountService;
        private readonly IDBRepository _repository;

        public AccountController(IConfiguration configuration, IDBRepository repository,
                                   IAccountService accountService)
        {
            _configuration = configuration;
            _accountService = accountService;
            _repository = repository;
        }
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost("login")]
        [AllowAnonymous]
        public async Task<IActionResult> LoginAsync([FromBody] LoginModel model)
        {
            try
            {
                var token = await _accountService.Login(model.Email, model.Password);
                return Ok(new { token = token});
            }
            catch (Exception ex)
            {
                BadRequest(ex.Message);
                throw;
            }
        }

        [HttpPost("register")]
        [AllowAnonymous]
        public async Task<IActionResult> Register([FromBody] RegisterModel model)
        {
            try
            {
                var token = await _accountService.Register(model.Email, model.Password);
                return Ok(new { token = token });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
                throw;
            }
        }

        [HttpGet("testLogin")]
        [Authorize]
        public IActionResult TestLogin()
        {
            return Ok();
        }
    }
}
