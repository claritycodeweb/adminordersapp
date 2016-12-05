using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AdminOrdersApp.Api.Dto;
using AdminOrdersApp.Api.Helper;
using AdminOrdersApp.Api.Model;
using AdminOrdersApp.Api.Repository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AdminOrdersApp.Api.Controllers
{
    [Route("api/[controller]")]
    public class CustomerController : Controller
    {
        private readonly ICustomerRepository _customerRepo;

        public CustomerController(ICustomerRepository customerRepo)
        {
            _customerRepo = customerRepo;
        }

        // GET: api/cutomer
        [HttpGet]
        public async Task<PagedResultsDto<Customers>> Get([FromQuery]int? page = null, [FromQuery] int pageSize = 10)
        {
            var query = _customerRepo.All().Where(m => m.Orders.Count >= 0 && m.Orders.Count <= 1);

            if (page == null)
            {
                return await Helpers.CreatePagedResults(query, 1, pageSize);
            }

    
            return await Helpers.CreatePagedResults(query, (int)page, pageSize);
        }

        // GET api/cutomer/ABC
        [HttpGet("{id}")]
        public async Task<Customers> Get(string id)
        {
            return await _customerRepo.Find(id);
        }
    }
}
