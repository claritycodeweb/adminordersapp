using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AdminOrdersApp.Api.DataSource;

namespace AdminOrdersApp.Api.Repository
{
    public class CustomerRepository: ICustomerRepository
    {
        private readonly Db _context;

        public CustomerRepository(Db context)
        {
            _context = context;
        }

        public IQueryable<Model.Customers> AllCustomers()
        {
            return _context.Customers;
        }
    }
}
