using api.Models;

namespace api.Interfaces
{
    public interface IAuthService
    {
        string CreateToken(AppUser user);
    }
}