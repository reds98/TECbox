using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TecBoxServer
{
    public class Products
    {
        public string name { get; set; }
        public string description { get; set; }
        public string barcode { get; set; }
        public string seller { get; set; }
        public string purchase_price { get; set; }
        public string tax { get; set; }
        public string discount { get; set; }
        public string image { get; set; }
    }
}
