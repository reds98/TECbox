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
    public class workersController : ControllerBase
    {
        private static List<workers> Glossary = new List<workers> {
            new workers
            {
                name= "Manuel de Jesus",
                birth_date="20/02/2000",
                admission_date="18/02/2019",
                branch_number="sucursal1",
                monthly_salary="300000",
                hourly_salary="2$",

            },
            new workers
            {
                name= "Firulais de Jesus",
                birth_date="18/02/2000",
                admission_date="10/02/2019",
                branch_number="sucursal2",
                monthly_salary="400000",
                hourly_salary="2$",
            },
            new workers
            {
                name= "Francisco de Jesus",
                birth_date="05/02/2000",
                admission_date="05/02/2019",
                branch_number="sucursal3",
                monthly_salary="500000",
                hourly_salary="2$",
            }

        };
        [HttpGet]
        public ActionResult<List<workers>> Get()
        {
            return Ok(Glossary);
        }

        
    }
}
