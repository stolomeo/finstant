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

        public PortfolioController(IPortfolioService portfolioService)
        {
            _portfolioService = portfolioService;
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
            if (string.IsNullOrWhiteSpace(symbol))
                return BadRequest("Invalid stock symbol.");

            var username = User.GetUsername();
            if (string.IsNullOrEmpty(username))
                return Unauthorized("User is not authenticated properly.");

            bool result = await _portfolioService.AddStockToPortfolioAsync(username, symbol);
            if (!result)
                return BadRequest("Failed to add the stock to the portfolio.");

            return Ok("Stock added to portfolio successfully.");
        }
    }
}