using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dtos.Account
{
    public class RegisterResponseDto
    {
        public string Message { get; set; }
        public string UserId { get; set; }
        public string Token { get; set; }
    }
}