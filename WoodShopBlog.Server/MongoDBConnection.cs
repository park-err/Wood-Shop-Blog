namespace WoodShopBlog.Server
{
    public class MongoDBConnection
    {
        public string ConnectionString { get; set; } = string.Empty;
        public string Username { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public string Database { get; set; } = string.Empty;
        public void BuildConnectionString()
        {
            ConnectionString = $"mongodb+srv://{Username}:{Password}@{Database.ToLower()}.qjxfxn5.mongodb.net";
        }
    }
}
