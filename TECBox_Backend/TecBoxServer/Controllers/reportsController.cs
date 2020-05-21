using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Drawing;
using System.IO;

namespace TecBoxServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class reportsController : ControllerBase
    {
        // GET: api/reports
        [HttpGet]
        public IActionResult reports()
        {
            //Create a new PDF document
            PdfDocument document = new PdfDocument();

            //Add a page to the document
            PdfPage page = document.Pages.Add();

            //Create PDF graphics for the page
            PdfGraphics graphics = page.Graphics;

            //Set the standard font
            PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 20);

            //Draw the text
            graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, new PointF(0, 0));

            //Saving the PDF to the MemoryStream
            MemoryStream stream = new MemoryStream();

            document.Save(stream);

            //If the position is not set to '0' then the PDF will be empty.
            stream.Position = 0;

            //Download the PDF document in the browser.
            FileStreamResult fileStreamResult = new FileStreamResult(stream, "application/pdf");
            fileStreamResult.FileDownloadName = "Output.pdf";
            return fileStreamResult;
        }

        
    }
}
