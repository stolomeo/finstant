using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dtos.Account
{
    public class LoginResponseDto
    {
        public string Message { get; set; }
        public string Username { get; set; }
        public string Token { get; set; }
    }
}