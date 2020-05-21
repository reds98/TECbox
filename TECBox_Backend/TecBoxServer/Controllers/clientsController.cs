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
                id= "22345678",
                name= "Sahid",
                email="sahid.rojas64@gmail.com",
                locker="123",
                phone_number="24588586",
                mobile="85646856",
                delivery_address="Calle Wallaby",
                user="bobEsponja122",
                packageId="112"

            },
            new clients
            {
                id= "12385678",
                name= "bob esponja2",
                email="bob2@gmail.com",
                locker="123",
                phone_number="29568586",
                mobile="85645856",
                delivery_address="Calle Wallaby",
                user="bobEsponja123",
                packageId="180909282921"

            },
            new clients
            {
                id= "12347678",
                name= "bob esponja3",
                email="bob3@gmail.com",
                locker="123",
                phone_number="74568586",
                mobile="85645856",
                delivery_address="Calle Wallaby",
                user="bobEsponja124",
                packageId="180909282922"

            }

        };
        [HttpGet]
        public ActionResult<List<clients>> Get()
        {
            return Ok(Glossary);
        }
    }
}
