using MongoDB.Bson.Serialization.Attributes;

namespace WoodShopBlog.Server.Models
{
    public class BaseModel
    {
        [BsonId]
        [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
        public string Id { get; set; } = string.Empty;
        public string CreatedBy { get; set; } = string.Empty;
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public string ModifiedBy { get; set; } = string.Empty;
        public DateTime ModifiedAt { get; set; } = DateTime.UtcNow;
    }
}
