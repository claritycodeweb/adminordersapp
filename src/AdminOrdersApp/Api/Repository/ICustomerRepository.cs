using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AdminOrdersApp.Api.Repository
{
    public interface ICustomerRepository
    {
        IQueryable<Model.Customers> AllCustomers();
    }
}
