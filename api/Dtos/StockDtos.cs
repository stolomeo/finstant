using System.ComponentModel.DataAnnotations;

namespace api.Dtos
{
    public record StockResponse
    {
        public int Id { get; init; }
        public string Symbol { get; init; }
        public string CompanyName { get; init; }
    }

    public record CreateStockRequest
    {
        [Required]
        [MaxLength(10)]
        public string Symbol { get; init; }

        [Required]
        [MaxLength(50)]
        public string CompanyName { get; init; }
    }
    public record UpdateStockRequest : CreateStockRequest
    {
    }
}