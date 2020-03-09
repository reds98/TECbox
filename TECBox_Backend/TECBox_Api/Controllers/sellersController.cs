//Controllers/GlossaryController.cs
using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace sellers.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class sellerController: ControllerBase
    {
        private static List<sellers> Glossary = new List<sellers> {
            new sellers
            {
                id= "180909282o92i2",
                name="Juancho"
            },
            new sellers
            {
                id="1019109101-01-01",
                name="Jess"

            },
            new sellers
            {
                id= "1091019019019",
                name="elias"
            }

        };
        [HttpGet]
        public ActionResult<List<sellers>> Get()
        {
            return Ok(Glossary);
        }

        
    }
}