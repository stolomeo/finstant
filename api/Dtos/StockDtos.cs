using System.ComponentModel.DataAnnotations;

namespace api.Dtos
{
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