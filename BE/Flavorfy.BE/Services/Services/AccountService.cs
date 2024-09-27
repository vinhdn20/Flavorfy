using Common;
using Domain.Entities;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Repository;
using Repository.Interfaces;
using Services.Interfaces;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Services
{
    public class AccountService : BasicOperationService<Account>, IAccountService
    {

        private readonly IConfiguration _configuration;
        public AccountService(IDBRepository repository,
                            IConfiguration configuration) : base(repository)
        {
            _configuration = configuration;
        }
        public async Task<string> Login(string email, string password)
        {
            string hashPass = password.HashForPassword();
            var account = await _repository.GetAsync<Account>(x => x.Email.Equals(email) && x.Password.Equals(hashPass));

            var token = GenerateToken(email);
            return token;
        }

        public async Task<string> Register(string email, string password)
        {
            string hashPass = password.HashForPassword();
            var account = await _repository.AddAsync<Account>(new Account()
            {
                Password = hashPass,
                Email = email
            });
            var token = GenerateToken(email);
            return token;
        }

        private string GenerateToken(string email)
        {
            var claims = new[]
                    {
                        new Claim(JwtRegisteredClaimNames.Sub, email),
                        new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
                    };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                issuer: _configuration["Jwt:Issuer"],
                audience: _configuration["Jwt:Audience"],
                claims: claims,
                expires: DateTime.Now.AddMinutes(30),
                signingCredentials: creds);
            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
