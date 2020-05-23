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
    public class officesController : ControllerBase
    {
        private static List<offices> Glossary = new List<offices> {
            new offices
            {
                name= "sucursal1",
                province="cartago",
                distrit="central",
                phone_number="88811629",
                manager="Sahid"

            },
            new offices
            {
                name= "sucursal2",
                province="san jose",
                distrit="central",
                phone_number="83183086",
                manager="Ruben  Doblas"

            },
            new offices
            {
                name= "sucursal3",
                province="Alajuela",
                distrit="Centro",
                phone_number="66688125",
                manager="La Roca"

            }

        };
        [HttpGet]
        public ActionResult<List<workers>> Get()
        {
            return Ok(Glossary);
        }
    }
}
