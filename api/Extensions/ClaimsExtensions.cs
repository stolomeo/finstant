using System.Security.Claims;

namespace api.Extensions
{
    public static class ClaimsExtensions
    {
        private const string GivenNameClaimType = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname";

        public static string GetUsername(this ClaimsPrincipal user)
        {
            var claim = user.Claims.FirstOrDefault(c => c.Type.Equals(GivenNameClaimType));
            return claim?.Value ?? string.Empty;
        }
    }
}