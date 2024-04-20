using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Dtos;
using api.Interfaces;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Services
{
    public class StockService : IStockService
    {
        private readonly ApplicationDBContext _context;

        public StockService(ApplicationDBContext context)
        {
            _context = context;
        }

        public async Task<List<Stock>> GetAllStocksAsync()
        {
            return await _context.Stocks.ToListAsync();
        }

        public async Task<Stock> GetStockByIdAsync(int id)
        {
            return await _context.Stocks.FindAsync(id);
        }

        public async Task<Stock> GetStockBySymbolAsync(string symbol)
        {
            return await _context.Stocks.FirstOrDefaultAsync(s => s.Symbol == symbol);
        }

        public async Task<Stock> CreateStockAsync(CreateStockRequest createStockRequest)
        {
            var stock = new Stock
            {
                Symbol = createStockRequest.Symbol,
                CompanyName = createStockRequest.CompanyName
            };

            await _context.Stocks.AddAsync(stock);
            await _context.SaveChangesAsync();
            return stock;
        }

        public async Task<Stock> UpdateStockAsync(int id, UpdateStockRequest updateStockRequest)
        {
            var stockToUpdate = await GetStockByIdAsync(id);
            if (stockToUpdate == null)
                return null;

            stockToUpdate.Symbol = updateStockRequest.Symbol;
            stockToUpdate.CompanyName = updateStockRequest.CompanyName;
            await _context.SaveChangesAsync();

            return stockToUpdate;
        }

        public async Task<Stock> DeleteStockAsync(int id)
        {
            var stock = await _context.Stocks.FindAsync(id);
            if (stock == null)
                return null;

            _context.Stocks.Remove(stock);
            await _context.SaveChangesAsync();

            return stock;
        }
    }
}