using Newtonsoft.Json.Linq;
using PushDashboard.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PushDashboard.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Home()
        {
            if (CheckIfValid(Request.Cookies["Validation"]))
            {
                return View("/Views/Home/Index.cshtml");
            }
            return null;
        }
        public ActionResult Index()
        {
            return View("/Views/Home/Login.cshtml");
        }
        public ActionResult Login()
        {
            return View("/Views/Home/Login.cshtml");
        }
        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";
            if (CheckIfValid(Request.Cookies["Validation"]))
            {
                return View();
            }
            return null;
        }
        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";
            if (CheckIfValid(Request.Cookies["Validation"]))
            {
                return View();
            }
            return null;
        }
        public ActionResult Error()
        {
            return View();
        }
        public ActionResult Welcome()
        {
            if (CheckIfValid(Request.Cookies["Validation"]))
            {
                return View();
            }
            return RedirectToAction("Error", "Home");
        }
        public Boolean CheckIfValid(HttpCookie cookie)
        {
            if (cookie != null)
            {
                if (userCheck.ContainsKey(cookie.Value))
                {
                    return true;
                }
            }
            return false;
        }

        public Dictionary<string, string> userCheck = new Dictionary<string, string>() {
   {
    "true",
    "admin"
   }
  };


    }
}