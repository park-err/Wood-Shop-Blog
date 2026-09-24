using MongoDB.Bson.Serialization.Attributes;

namespace WoodShopBlog.Server.Models
{
    public class BlogPost : BaseModel
    {
        public string Title { get; set; }
        public string Subtitle { get; set; }
        public string Author { get; set; }
        public string[] Tags { get; set; }
        public string Content { get; set; }
    }
}
