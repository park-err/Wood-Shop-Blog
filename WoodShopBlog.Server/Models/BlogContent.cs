using System.Text.Json.Serialization;

namespace WoodShopBlog.Server.Models
{
    [JsonPolymorphic(TypeDiscriminatorPropertyName = "type")]
    [JsonDerivedType(typeof(HeaderBlock), "heading")]
    [JsonDerivedType(typeof(ParagraphBlock), "paragraph")]
    [JsonDerivedType(typeof(ListBlock), "list")]
    [JsonDerivedType(typeof(ImageBlock), "image")]
    [JsonDerivedType(typeof(LinkBlock), "link")]
    public abstract record BlogContent();
    public record HeaderBlock(int Level, string Text) : BlogContent();
    public record ParagraphBlock(string Text) : BlogContent();
    public record ListBlock(bool Ordered, string[] Items) : BlogContent();
    public record ImageBlock(string Source, string Alt, string? Caption) : BlogContent();
    public record LinkBlock(string Source, string Text) : BlogContent();
}
