using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Dtos;
using api.Interfaces;
using api.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace api.Services
{

    public class PortfolioService : IPortfolioService
    {
        private readonly ApplicationDBContext _context;
        private readonly UserManager<AppUser> _userManager;
        public PortfolioService(ApplicationDBContext context, UserManager<AppUser> userManager)
        {
            _context = context;
            _userManager = userManager;
        }
        public async Task<List<Stock>> GetPortfolioByUsernameAsync(string username)
        {
            var user = await _userManager.FindByNameAsync(username);
            if (user == null) return null;

            return await _context.Portfolios.Where(p => p.AppUserId == user.Id)
                .Select(p => new Stock
                {
                    Id = p.StockId,
                    Symbol = p.Stock.Symbol,
                    CompanyName = p.Stock.CompanyName
                }).ToListAsync();
        }
    }
}