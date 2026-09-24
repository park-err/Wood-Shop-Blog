using WoodShopBlog.Server.Models;
using WoodShopBlog.Server.Repositories.Interfaces;
using WoodShopBlog.Server.Services.Interfaces;
namespace WoodShopBlog.Server.Services
{
    public class BlogPostService : IBlogPostService
    {
        IBlogPostRepository repo;
        public BlogPostService(IBlogPostRepository repo)
        {
            this.repo = repo;
        }
        public async Task<IEnumerable<BlogPost>> GetBlogPosts()
        {
            return await repo.GetAllAsync();
        }
        public async Task<BlogPost> GetBlogPostById(string id)
        {
            return await repo.GetByIdAsync(id);
        }
        public async Task AddBlogPost(BlogPost post)
        {
            await repo.AddAsync(post);
        }
        public async Task UpdateBlogPost(BlogPost post)
        {
            await repo.UpdateAsync(post);
        }
        public async Task DeleteBlogPost(string id)
        {
            await repo.DeleteAsync(id);
        }
    }
}
