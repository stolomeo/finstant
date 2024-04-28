using System.ComponentModel.DataAnnotations;

namespace api.Dtos
{
    public record AuthResponse(string Message, string Email, string Username, string Token);

    public record LoginRequest
    {
        [Required]
        public string Username { get; init; }

        [Required]
        public string Password { get; init; }
    }

    public record RegisterRequest : LoginRequest
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}