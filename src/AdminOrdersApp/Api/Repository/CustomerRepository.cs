using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AdminOrdersApp.Api.DataSource;
using AdminOrdersApp.Api.Model;
using Microsoft.EntityFrameworkCore;

namespace AdminOrdersApp.Api.Repository
{
    public class CustomerRepository : ICustomerRepository
    {
        private readonly Db _context;

        public CustomerRepository(Db context)
        {
            _context = context;
        }

        public IQueryable<Model.Customers> All()
        {
            return _context.Customers;
        }

        public async Task<Customers> Find(string id)
        {
            return await _context.Customers
                .Include(o => o.Orders)
                .ThenInclude(d => d.OrderDetails)
                .FirstOrDefaultAsync(m => m.CustomerId == id);
        }
    }
}
