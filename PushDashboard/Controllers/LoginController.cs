using PushDashboard.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PushDashboard.Controllers
{
    public class LoginController : Controller
    {
        // GET: Login
        public ActionResult Index()
        {
            return View();
        }

        public Dictionary<string, string> LoginDict = new Dictionary<string, string>() {
   {
    "admin",
    "pushdashboardlogin2018"
   },
  };

        public Dictionary<string, string> ControllerDict = new Dictionary<string, string>() {
   {
    "admin",
    "Home"
   },
  };

        public ActionResult Login(LoginModel model)
        {
            if (!ModelState.IsValid)
            {
                return RedirectToAction("Home", "Index");
            }

            if (LoginDict.ContainsKey(model.Username.ToLower()))
            {
                if (LoginDict[model.Username.ToLower()].Equals(model.Password.ToLower()))
                {
                    //Create Cookie and return to welcome view
                    HttpCookie emailCookie = new HttpCookie("Validation");
                    DateTime now = DateTime.Now;
                    emailCookie.Value = "true";
                    emailCookie.Expires = now.AddDays(1);

                    Response.Cookies.Add(emailCookie);

                    var ControllerName = ControllerDict[model.Username.ToLower()];
                    if (ControllerName.Equals("Home"))
                    {
                        return RedirectToAction("Home", "Home");
                    }
                    else
                    {
                        return RedirectToAction("Index", ControllerName);
                    }

                }
            }

            return RedirectToAction("Index", "Home");


        }
    }
}