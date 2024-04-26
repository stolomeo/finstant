using api.Dtos;
using api.Models;

namespace api.Interfaces
{
    public interface IStockService
    {
        Task<List<Stock>> GetAllStocksAsync();
        Task<Stock> GetStockByIdAsync(int id);
        Task<Stock> GetStockBySymbolAsync(string symbol);
        Task<Stock> CreateStockAsync(CreateStockRequest createStockRequest);
        Task<Stock> UpdateStockAsync(int id, UpdateStockRequest updateStockRequest);
        Task<Stock> DeleteStockAsync(int id);
    }
}