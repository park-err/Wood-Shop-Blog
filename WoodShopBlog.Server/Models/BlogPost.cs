using MongoDB.Bson.Serialization.Attributes;
using System.Runtime.CompilerServices;
using System.Text;

namespace WoodShopBlog.Server.Models
{
    public class BlogPost : BaseModel
    {
        public required string Title { get; set; }
        public required string Subtitle { get; set; }
        public required string Author { get; set; }
        public string[] Tags { get; set; } = [];
        public string ThumbnailUrl { get; set; } = "/placeholder.jpg";
        public BlogContent[] Content { get; set; } = [];
    }
}
