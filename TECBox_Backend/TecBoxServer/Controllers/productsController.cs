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
    public class productsController : ControllerBase
    {
        private static List<Products> Glossary = new List<Products> {
            new Products
            {
                name= "Access Token",
                description="Pistola",
                barcode="1001001001001",
                seller="Juancho",
                purchase_price="2992",
                tax="0.25",
                discount="0.3",
                image="https://www.decowoerner.com/images/contentUploads/pictures/500_599/550/www/101000/550_116_00-1-0-00.jpg"
            },
            new Products
            {
                name= "Access Token",
                description="Pistola",
                barcode="1001001001001",
                seller="Juancho",
                purchase_price="2992",
                tax="0.1",
                discount="0.18",
                image="https://www.decowoerner.com/images/contentUploads/pictures/500_599/550/www/101000/550_116_00-1-0-00.jpg"
            },
            new Products
            {
                name= "Pistola",
                description="ARMA PARA MATAR GENTE DEBIL ",
                barcode="1001001001001",
                seller="Juancho",
                purchase_price="2992",
                tax="0.1",
                discount="0.15",
                image="https://www.decowoerner.com/images/contentUploads/pictures/500_599/550/www/101000/550_116_00-1-0-00.jpg"
            }

        };
        [HttpGet]
        public ActionResult<List<Products>> Get()
        {
            return Ok(Glossary);
        }

        
    }
}
