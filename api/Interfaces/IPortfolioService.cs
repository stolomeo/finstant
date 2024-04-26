using api.Models;

namespace api.Interfaces
{
    public interface IPortfolioService
    {
        Task<List<Stock>> GetPortfolioByUsernameAsync(string username);
        Task<Portfolio> AddStockToPortfolioAsync(string username, Stock stockToAdd);
        Task<Portfolio> RemoveStockFromPortfolioAsync(string username, Stock stockToRemove);
    }
}