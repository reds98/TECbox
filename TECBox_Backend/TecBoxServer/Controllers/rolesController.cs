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
    public class rolesController : ControllerBase
    {
        private static List<roles> Glossary = new List<roles> {
            new roles
            {
                name= "bob esponja3",
                description= "trabajador"

            },
            new roles
            {
                name= "bob esponja3",
                description= "trabajador"

            },
            new roles
            {
                name= "bob esponja3",
                description= "trabajador"

            }

        };
        [HttpGet]
        public ActionResult<List<roles>> Get()
        {
            return Ok(Glossary);
        }
    }
}
