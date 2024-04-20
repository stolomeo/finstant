using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos;
using api.Models;

namespace api.Interfaces
{
    public interface IPortfolioService
    {
        Task<List<Stock>> GetPortfolioByUsernameAsync(string username);
        Task<bool> AddStockToPortfolioAsync(string username, string symbol);

    }
}