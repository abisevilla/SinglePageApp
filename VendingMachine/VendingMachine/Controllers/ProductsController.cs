using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using VendingMachine.Models;
using VendingMachine.Repositories;

namespace VendingMachine.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private IRepository<ProductEntity> ProductRepository;


        public ProductsController(IRepository<ProductEntity> repository)
        {
            this.ProductRepository = repository;
        }

        // GET: api/Products
        [HttpGet]
        public IEnumerable<ProductEntity> Get()
        {
            return ProductRepository.GetAll();
        }

      

        // POST: api/Products
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Products/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
