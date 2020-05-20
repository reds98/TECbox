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
                arival_date="09/08/1998",
                state="En ruta de entrega",
                district="San Rafael",
                route="Ruta 74",
                discount="0.5",
                tax="4"
            },
            new packages
            {
                id= "180909282o92i2",
                client="Juancho",
                description="holksmolkdol",
                arival_date="09/08/1998",
                state="En sucursal",
                district="San Rafael",
                route="Ruta 74",
                discount="0.5",
                tax="4"

            },
            new packages
            {
                id= "180909282o92i2",
                client="Juancho",
                description="holksmolkdol",
                arival_date="09/08/1998",
                state="En ruta de entrega",
                district="San Rafael",
                route="Ruta 74",
                discount="0.5",
                tax="4"
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
