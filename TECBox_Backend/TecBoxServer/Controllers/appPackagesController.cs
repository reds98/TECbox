using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace TecBoxServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class appPackagesController : ControllerBase
    {
        private static List<appPackages> Glossary = new List<appPackages> {
            new appPackages
            {
                name = "F1",
                state = "pendiente"
            },
            new appPackages
            {
                name = "F2",
                state = "entregado"
            },
            new appPackages
            {
                name = "F3",
                state = "fallido"
            },
            new appPackages
            {
                name = "F4",
                state = "devuelto"
            }

        };
        [HttpGet]
        public ActionResult<List<appPackages>> Get()
        {
            return Ok(Glossary);
        }
    }
}