using WoodShopBlog.Server.Models;

namespace WoodShopBlog.Server.Services.Interfaces
{
    public interface IBlogPostService
    {
        Task<IEnumerable<BlogPost>> GetBlogPosts();
        Task<BlogPost> GetBlogPostById(string id);
        Task AddBlogPost(BlogPost post);
        Task UpdateBlogPost(BlogPost post);
        Task DeleteBlogPost(string id);
    }
}
