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
    public class routesController : ControllerBase
    {
        private static List<routes> Glossary = new List<routes> {
            new routes
            {
                distrits= "Cartago"
            },
            new routes
            {
                distrits="Chepe"
            },
            new routes
            {
                distrits= "Carpio",
            }

        };
        [HttpGet]
        public ActionResult<List<routes>> Get()
        {
            return Ok(Glossary);
        }

       
    }
}
