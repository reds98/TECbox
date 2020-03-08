//Controllers/GlossaryController.cs
using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace routes.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class routesController: ControllerBase
    {
        private static List<routes> Glossary = new List<routes> {
            new routes
            {
                distrits= "Access Token"
            },
            new routes
            {
                distrits="Chepe"
            },
            new routes
            {
                distrits= "Carpio",
            }

        };
        [HttpGet]
        public ActionResult<List<routes>> Get()
        {
            return Ok(Glossary);
        }

        
    }
}