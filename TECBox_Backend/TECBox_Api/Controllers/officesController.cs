//Controllers/GlossaryController.cs
using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace offices.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class officesController: ControllerBase
    {
        private static List<offices> Glossary = new List<offices> {
            new offices
            {
                name= "Access Token",
                province="Pistola",
                distrit="1001001001001",
                phone_number="Juancho",
                manager="2992",

            },
            new offices
            {
               name= "Access Token",
                province="Pistola",
                distrit="1001001001001",
                phone_number="Juancho",
                manager="2992",
            },
            new offices
            {
                name= "Access Token",
                province="Pistola",
                distrit="1001001001001",
                phone_number="Juancho",
                manager="2992",
            }

        };
        [HttpGet]
        public ActionResult<List<offices>> Get()
        {
            return Ok(Glossary);
        }

        
    }
}