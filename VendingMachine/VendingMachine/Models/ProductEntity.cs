using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace VendingMachine.Models
{
    public class ProductEntity:BaseEntity
    { 
        public string ProductName { get; set; }
        public double Price { get; set; }

        public string Image { get; set; }
        public int PreparationTime { get; set; }
    }
}
