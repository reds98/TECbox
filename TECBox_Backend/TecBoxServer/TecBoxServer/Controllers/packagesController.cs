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
    public class packagesController : ControllerBase
    {

        private static List<packages> Glossary = new List<packages> {
            new packages
            {
                id= "180909282o92i2",
                client="Juancho",
                description="holksmolkdol",
                arivalDate="09/08/1998"
            },
            new packages
            {
                id= "180909282o92i2",
                client="Juancho",
                description="holksmolkdol",
                arivalDate="09/08/1998"

            },
            new packages
            {
                id= "180909282o92i2",
                client="Juancho",
                description="holksmolkdol",
                arivalDate="09/08/1998"
            }

        };

        // GET: api/packages
        [HttpGet]
        public ActionResult<List<packages>> Get()
        {
            return Ok(Glossary);
        }


        
    }
}
