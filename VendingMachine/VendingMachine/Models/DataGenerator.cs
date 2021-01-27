using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace VendingMachine.Models
{
    public class DataGenerator
    {

        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new DatabaseContext(
                serviceProvider.GetRequiredService<DbContextOptions<DatabaseContext>>()))
            {
                            context.Products.AddRange(
                  new ProductEntity{ ProductName="Coca Cola" , Price=1.50, Image= "https://coca-colafemsa.com/wp-content/uploads/2020/02/1-40.png", PreparationTime=3300 },
                  new ProductEntity { ProductName = "Papas Lays", Price = 0.50, Image = "https://hondudiario.com/wp-content/uploads/2020/10/Lays-Pollo-Campero-Producto.png", PreparationTime = 67700 },
                  new ProductEntity { ProductName = "Café Capuchino", Price = 0.50, Image = "https://i.pinimg.com/originals/d2/0d/35/d20d35a799458ae22e6b07a09c768677.jpg", PreparationTime = 9500 }




            );

                context.SaveChanges();
            }
        }
    }
}
