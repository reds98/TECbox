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
using Syncfusion.Pdf.Grid;
using System.Data;
namespace TecBoxServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class reportsController : ControllerBase
    {
        // GET: api/Default
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Default/5
        [HttpGet("{id}", Name = "Get")]
        public IActionResult Get(int id)
        {
            if (id == 1)
            {
                //Create a new PDF document.
                PdfDocument doc = new PdfDocument();

                //Add a page.
                PdfPage page = doc.Pages.Add();

                PdfGraphics graphics2 = page.Graphics;
                //Load the image as stream.
                FileStream imageStream = new FileStream("Logito.jpg", FileMode.Open, FileAccess.Read);
                PdfBitmap image = new PdfBitmap(imageStream);
                //Draw the image
                graphics2.DrawImage(image, 0, 0, 120, 100);


                PdfGraphics graphics = page.Graphics;
                //Set the standard font
                PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 20);

                //Draw the text
                graphics.DrawString("Productos mas vendidos", font, PdfBrushes.Black, new PointF(150, 40));

                //Create a PdfGrid.
                PdfGrid pdfGrid = new PdfGrid();

                //Add values to list
                List<object> data = new List<object>();

                Object row1 = new { Nombre = "E01", Precio = "Clay" };
                Object row2 = new { Nombre = "E02", Precio = "Thomas" };
                Object row3 = new { Nombre = "E03", Precio = "George" };
                Object row4 = new { Nombre = "E04", Precio = "Steffen" };
                Object row5 = new { Nombre = "E05", Precio = "Mathew" };

                data.Add(row1);
                data.Add(row2);
                data.Add(row3);
                data.Add(row4);
                data.Add(row5);

                //Add list to IEnumerable
                IEnumerable<object> dataTable = data;

                //Assign data source.
                pdfGrid.DataSource = dataTable;

                //Apply built-in table style
                pdfGrid.ApplyBuiltinStyle(PdfGridBuiltinStyle.GridTable4Accent1);
                //Draw grid to the page of PDF document.
                pdfGrid.Draw(page, new Syncfusion.Drawing.PointF(10, 110));

                //Creating the stream object
                MemoryStream stream = new MemoryStream();

                //Save the document as stream
                doc.Save(stream);

                //If the position is not set to '0' then the PDF will be empty.
                stream.Position = 0;

                //Close the document.
                doc.Close(true);

                //Defining the ContentType for pdf file.
                string contentType = "application/pdf";

                //Define the file name.
                string fileName = "Output.pdf";

                //Creates a FileContentResult object by using the file contents, content type, and file name.
                return File(stream, contentType, fileName);
            }
            if (id == 2)
            {
                //Create a new PDF document.
                PdfDocument doc = new PdfDocument();

                //Add a page.
                PdfPage page = doc.Pages.Add();

                PdfGraphics graphics2 = page.Graphics;
                //Load the image as stream.
                FileStream imageStream = new FileStream("Logito.jpg", FileMode.Open, FileAccess.Read);
                PdfBitmap image = new PdfBitmap(imageStream);
                //Draw the image
                graphics2.DrawImage(image, 0, 0, 120, 100);


                PdfGraphics graphics = page.Graphics;
                //Set the standard font
                PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 20);

                //Draw the text
                graphics.DrawString("Paquetes Listo para entregar", font, PdfBrushes.Black, new PointF(150, 40));
                graphics.DrawString("Ruta: Cartago ", font, PdfBrushes.Black, new PointF(150, 60));

                //Create a PdfGrid.
                PdfGrid pdfGrid = new PdfGrid();

                //Add values to list
                List<object> data = new List<object>();

                Object row1 = new { Paquete = "E01", Distrito = "Clay" };
                Object row2 = new { Paquete = "E02", Distrito = "Thomas" };
                Object row3 = new { Paquete = "E03", Distrito = "George" };
                Object row4 = new { Paquete = "E04", Distrito = "Steffen" };
                Object row5 = new { Paquete = "E05", Distrito = "Mathew" };

                data.Add(row1);
                data.Add(row2);
                data.Add(row3);
                data.Add(row4);
                data.Add(row5);

                //Add list to IEnumerable
                IEnumerable<object> dataTable = data;

                //Assign data source.
                pdfGrid.DataSource = dataTable;

                //Apply built-in table style
                pdfGrid.ApplyBuiltinStyle(PdfGridBuiltinStyle.GridTable4Accent1);
                //Draw grid to the page of PDF document.
                pdfGrid.Draw(page, new Syncfusion.Drawing.PointF(10, 110));

                //Creating the stream object
                MemoryStream stream = new MemoryStream();

                //Save the document as stream
                doc.Save(stream);

                //If the position is not set to '0' then the PDF will be empty.
                stream.Position = 0;

                //Close the document.
                doc.Close(true);

                //Defining the ContentType for pdf file.
                string contentType = "application/pdf";

                //Define the file name.
                string fileName = "Output.pdf";

                //Creates a FileContentResult object by using the file contents, content type, and file name.
                return File(stream, contentType, fileName);
            }
            else
            {
                //Create a new PDF document.
                PdfDocument doc = new PdfDocument();

                //Add a page.
                PdfPage page = doc.Pages.Add();

                PdfGraphics graphics2 = page.Graphics;
                //Load the image as stream.
                FileStream imageStream = new FileStream("Logito.jpg", FileMode.Open, FileAccess.Read);
                PdfBitmap image = new PdfBitmap(imageStream);
                //Draw the image
                graphics2.DrawImage(image, 0, 0, 120, 100);


                PdfGraphics graphics = page.Graphics;
                //Set the standard font
                PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 20);

                //Draw the text
                graphics.DrawString("Paquetes entregados", font, PdfBrushes.Black, new PointF(150, 40));
                graphics.DrawString("Fecha: 12/06/20 ", font, PdfBrushes.Black, new PointF(150, 60));

                //Create a PdfGrid.
                PdfGrid pdfGrid = new PdfGrid();

                //Add values to list
                List<object> data = new List<object>();

                Object row1 = new { Paquete = "E01", Ingreso = "19/05/2020" };
                Object row2 = new { Paquete = "E02", Ingreso = "20/05/2020" };
                Object row3 = new { Paquete = "E03", Ingreso = "21/05/2020" };
                Object row4 = new { Paquete = "E04", Ingreso = "22/05/2020" };
                Object row5 = new { Paquete = "E05", Ingreso = "23/05/2020" };

                data.Add(row1);
                data.Add(row2);
                data.Add(row3);
                data.Add(row4);
                data.Add(row5);

                //Add list to IEnumerable
                IEnumerable<object> dataTable = data;

                //Assign data source.
                pdfGrid.DataSource = dataTable;

                //Apply built-in table style
                pdfGrid.ApplyBuiltinStyle(PdfGridBuiltinStyle.GridTable4Accent1);
                //Draw grid to the page of PDF document.
                graphics.DrawString("Repartidor: Juancho ", font, PdfBrushes.Black, new PointF(10, 120));
                pdfGrid.Draw(page, new Syncfusion.Drawing.PointF(10, 160));

                //Creating the stream object
                MemoryStream stream = new MemoryStream();

                //Save the document as stream
                doc.Save(stream);

                //If the position is not set to '0' then the PDF will be empty.
                stream.Position = 0;

                //Close the document.
                doc.Close(true);

                //Defining the ContentType for pdf file.
                string contentType = "application/pdf";

                //Define the file name.
                string fileName = "Output.pdf";

                //Creates a FileContentResult object by using the file contents, content type, and file name.
                return File(stream, contentType, fileName);

            }
        }
        



    }
}
