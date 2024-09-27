using System.ComponentModel.DataAnnotations;

namespace Flavorfy.BE.Models
{
    public class RegisterModel
    {
        [EmailAddress]
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
