using api.Dtos;
using api.Models;

namespace api.Extensions
{
    public static class StockExtensions
    {
        public static StockResponse ToDto(this Stock stock)
        {
            return new StockResponse
            {
                Id = stock.Id,
                Symbol = stock.Symbol,
                CompanyName = stock.CompanyName,
            };
        }
    }
}