using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Extensions;
using api.Interfaces;
using api.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.Controllers
{
    [ApiController]
    [Route("api/portfolio")]
    public class PortfolioController : ControllerBase
    {
        private readonly IPortfolioService _portfolioService;
        private readonly IStockService _stockService;

        public PortfolioController(IPortfolioService portfolioService, IStockService stockService)
        {
            _portfolioService = portfolioService;
            _stockService = stockService;
        }

        [HttpGet]
        [Authorize]
        public async Task<IActionResult> GetUserPortfolio()
        {
            var username = User.GetUsername();
            if (string.IsNullOrEmpty(username))
                return Unauthorized("User is not authenticated properly.");

            var portfolioDto = await _portfolioService.GetPortfolioByUsernameAsync(username);
            if (portfolioDto == null)
                return NotFound("User or portfolio not found.");

            return Ok(portfolioDto);
        }

        [HttpPost]
        [Authorize]
        public async Task<IActionResult> AddStockToPortfolio(string symbol)
        {
            var username = User.GetUsername();
            if (string.IsNullOrEmpty(username))
                return Unauthorized("User is not authenticated properly.");

            var stockToAdd = await _stockService.GetStockBySymbolAsync(symbol);
            if (stockToAdd == null)
                return NotFound("Stock does not exist in the database.");

            var userPortfolio = await _portfolioService.GetPortfolioByUsernameAsync(username);
            if (userPortfolio.Any(e => e.Symbol.Equals(symbol, StringComparison.OrdinalIgnoreCase)))
                return BadRequest("Cannot add the same stock to portfolio multiple times.");

            var result = await _portfolioService.AddStockToPortfolioAsync(username, stockToAdd);
            if (result == null)
                return StatusCode(500, "Could not create portfolio entry.");

            return Ok("Stock successfully added to portfolio.");
        }

        [HttpDelete]
        [Authorize]
        public async Task<IActionResult> DeleteStockFromPortfolio(string symbol)
        {
            var username = User.GetUsername();
            if (string.IsNullOrEmpty(username))
                return Unauthorized("User is not authenticated properly.");

            var userPortfolio = await _portfolioService.GetPortfolioByUsernameAsync(username);
            if (userPortfolio == null)
                return NotFound("User or portfolio not found.");

            var stockToRemove = userPortfolio.FirstOrDefault(e => e.Symbol.Equals(symbol, StringComparison.OrdinalIgnoreCase));
            if (stockToRemove == null)
                return NotFound("Stock not found in your portfolio.");

            var removedStock = await _portfolioService.RemoveStockFromPortfolioAsync(username, stockToRemove);
            if (removedStock == null)
                return StatusCode(500, "Failed to remove stock from portfolio.");

            return Ok("Stock removed successfully from portfolio.");
        }
    }
}