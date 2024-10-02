using Domain.Entities;
using Repository.Interfaces;
using Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Services
{
    public class PostService : BasicOperationService<Post>, IPostService
    {
        public PostService(IDBRepository repository) : base(repository)
        {
        }

        public Task<Post> AddPostAsync(Post post)
        {
            throw new NotImplementedException();
        }
    }
}
