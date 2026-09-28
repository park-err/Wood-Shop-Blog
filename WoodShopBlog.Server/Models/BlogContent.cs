namespace WoodShopBlog.Server.Models
{

    public class BlogContent
    {
        public required string Type { get; set; }
        public string Source { get; set; } = string.Empty;
        public string Text { get; set; } = string.Empty;
    }
}
