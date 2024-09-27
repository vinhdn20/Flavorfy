using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class Account : BaseEntity
    {
        public string Password { get; set; }
        public string Email { get; set; }
        public string Image { get; set; }
        public TypeAccount TypeAccount { get; set; }
        public Guid UserId { get; set; }
        public User User { get; set; }
    }

    public enum TypeAccount
    {
        Normal,
        Facebook,
        Google
    }
}
