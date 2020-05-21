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
    public class clientsController : ControllerBase
    {
        private static List<clients> Glossary = new List<clients> {
            new clients
            {
                id= "12345678",
                name= "bob esponja",
                email="bob@gmail.com",
                locker="123",
                phone_number="24568586",
                mobile="85645856",
                delivery_address="Calle Wallaby",
                user="bobEsponja123",

            },
            new clients
            {
                id= "12345678",
                name= "bob esponja",
                email="bob@gmail.com",
                locker="123",
                phone_number="24568586",
                mobile="85645856",
                delivery_address="Calle Wallaby",
                user="bobEsponja123",

            },
            new clients
            {
                id= "12345678",
                name= "bob esponja",
                email="bob@gmail.com",
                locker="123",
                phone_number="24568586",
                mobile="85645856",
                delivery_address="Calle Wallaby",
                user="bobEsponja123",

            }

        };
        [HttpGet]
        public ActionResult<List<clients>> Get()
        {
            return Ok(Glossary);
        }
    }
}
