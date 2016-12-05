using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AdminOrdersApp.Api.Dto
{
    public class PagedResultsDto<T>
    {
        public int Page { get; set; }

        public int Count => Items?.Count() ?? 0;

        public int TotalPages { get; set; }
        public int TotalCount { get; set; }

        public IEnumerable<T> Items { get; set; }
    }
}
