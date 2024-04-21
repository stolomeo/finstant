using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dtos
{
    public record AuthResponse(string Message, string Email, string Username, string Token);

    public record LoginRequest(string Username, string Password);

    public record RegisterRequest(string Username, string Email, string Password);
}