using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AdminOrdersApp.Api.Dto;
using Microsoft.EntityFrameworkCore;

namespace AdminOrdersApp.Api.Helper
{
    public static class Helpers
    {
        public static async Task<PagedResultsDto<T>> CreatePagedResults<T>(
            IQueryable<T> queryable,
            int page,
            int pageSize)
        {
            int currentPage = page;
            int currentPageSize = pageSize;

            var records = await queryable.Skip(currentPage*currentPageSize).Take(currentPageSize).ToListAsync();
            var recordsCount = await queryable.CountAsync();

            return new PagedResultsDto<T>
            {
                Page = currentPage,
                TotalCount = recordsCount,
                TotalPages = (int) Math.Ceiling((decimal) recordsCount/currentPageSize),
                Items = records
            };
        }
    }
}
