//Controllers/GlossaryController.cs
using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace packages.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class packagesController: ControllerBase
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
        [HttpGet]
        public ActionResult<List<packages>> Get()
        {
            return Ok(Glossary);
        }

        
    }
}