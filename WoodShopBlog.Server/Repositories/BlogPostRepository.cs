using Microsoft.Extensions.Options;
using WoodShopBlog.Server.Models;
using WoodShopBlog.Server.Repositories.Interfaces;
namespace WoodShopBlog.Server.Repositories
{
    public class BlogPostRepository : BaseRepository<BlogPost>, IBlogPostRepository
    {
        public BlogPostRepository(IOptions<MongoDBConnection> options) : base(options)
        {
        }
    }
}
