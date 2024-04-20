using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

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