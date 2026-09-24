using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WoodShopBlog.Server.Models;
using WoodShopBlog.Server.Services.Interfaces;

namespace WoodShopBlog.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogPostController : ControllerBase
    {
        IBlogPostService service;
        public BlogPostController(IBlogPostService service)
        {
            this.service = service;
        }
        [HttpGet]
        public async Task<IActionResult> GetPosts()
        {
            var posts = await service.GetBlogPosts();
            return Ok(posts);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetPost(string id)
        {
            var post = await service.GetBlogPostById(id);
            if (post == null)
            {
                return NotFound();
            }
            return Ok(post);
        }
        [HttpPost]
        public async Task<IActionResult> AddPost([FromBody] BlogPost post)
        {
            await service.AddBlogPost(post);
            return CreatedAtAction(nameof(GetPost), new { id = post.Id }, post);
        }
        [HttpPut]
        public async Task<IActionResult> UpdatePost([FromBody] BlogPost post)
        {
            await service.UpdateBlogPost(post);
            return Ok(post);
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePost(string id)
        {
            await service.DeleteBlogPost(id);
            return NoContent();
        }
    }
}
