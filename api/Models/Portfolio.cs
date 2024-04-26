using System.ComponentModel.DataAnnotations.Schema;

namespace api.Models
{
    [Table("Portfolios")]
    public class Portfolio
    {
        public string AppUserId { get; set; }
        public int StockId { get; set; }
        public virtual AppUser AppUser { get; set; }
        public virtual Stock Stock { get; set; }
    }
}