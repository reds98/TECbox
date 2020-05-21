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
        private static List<workers> Glossary = new List<workers> {
            new workers
            {
                name= "Access Token",
                birth_date="Pistola",
                admission_date="1001001001001",
                branch_number="Juancho",
                monthly_salary="2992",
                hourly_salary="10%",

            },
            new workers
            {
                name= "Access Token",
                birth_date="Pistola",
                admission_date="1001001001001",
                branch_number="Juancho",
                monthly_salary="2992",
                hourly_salary="10%",
            },
            new workers
            {
                name= "Access Token",
                birth_date="Pistola",
                admission_date="1001001001001",
                branch_number="Juancho",
                monthly_salary="2992",
                hourly_salary="10%",
            }

        };
        [HttpGet]
        public ActionResult<List<workers>> Get()
        {
            return Ok(Glossary);
        }
    }
}
