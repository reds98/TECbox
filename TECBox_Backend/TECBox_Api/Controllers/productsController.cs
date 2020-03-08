//Controllers/GlossaryController.cs
using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace products.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class productsController: ControllerBase
    {
        private static List<products> Glossary = new List<products> {
            new products
            {
                name= "Access Token",
                description="Pistola",
                barcode="1001001001001",
                seller="Juancho",
                purchase_price="2992",
                tax="10%",
                discount="001"
            },
            new products
            {
                name= "Access Token",
                description="Pistola",
                barcode="1001001001001",
                seller="Juancho",
                purchase_price="2992",
                tax="10%",
                discount="001"
            },
            new products
            {
                name= "Pistola",
                description="ARMA PARA MATAR GENTE DEBIL ",
                barcode="1001001001001",
                seller="Juancho",
                purchase_price="2992",
                tax="10%",
                discount="001"
            }

        };
        [HttpGet]
        public ActionResult<List<products>> Get()
        {
            return Ok(Glossary);
        }

        
    }
}