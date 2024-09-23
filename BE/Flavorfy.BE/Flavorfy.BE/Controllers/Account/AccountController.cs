using Microsoft.AspNetCore.Mvc;

namespace Flavorfy.BE.Controllers.Account
{
    public class AccountController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
