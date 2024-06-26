using api.Dtos;
using api.Extensions;
using api.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [ApiController]
    [Route("api/stock")]
    public class StockController : ControllerBase
    {
        private readonly IStockService _stockService;

        public StockController(IStockService stockService)
        {
            _stockService = stockService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var stocks = await _stockService.GetAllStocksAsync();
            return Ok(stocks.Select(stock => stock.ToDto()).ToList());

        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var stock = await _stockService.GetStockByIdAsync(id);
            if (stock == null)
                return NotFound();

            return Ok(stock.ToDto());
        }

        [HttpPost]
        public async Task<IActionResult> Create(CreateStockRequest createStockRequest)
        {
            var createdStock = await _stockService.CreateStockAsync(createStockRequest);
            if (createdStock == null)
                return BadRequest("Unable to create stock, please check the details and try again.");

            return CreatedAtAction(nameof(GetById), new { id = createdStock.Id }, createdStock.ToDto());
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, UpdateStockRequest updateStockRequest)
        {
            var updatedStock = await _stockService.UpdateStockAsync(id, updateStockRequest);
            if (updatedStock == null)
                return NotFound();

            return Ok("Stock successfully updated");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var deletedStock = await _stockService.DeleteStockAsync(id);
            if (deletedStock == null)
                return NotFound();

            return Ok("Stock has been removed");
        }
    }
}