using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

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