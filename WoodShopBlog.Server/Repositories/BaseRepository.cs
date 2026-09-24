using MongoDB.Driver;
using WoodShopBlog.Server.Models;
using WoodShopBlog.Server.Repositories.Interfaces;

namespace WoodShopBlog.Server.Repositories
{
    public class BaseRepository<T> : IBaseRepository<T> where T : BaseModel
    {
        string connectionString = "mongodb+srv://adam-whelp:VeronicasKingdom21!@woodshopblog-db.qjxfxn5.mongodb.net/";
        string databaseName = "WoodShopBlogDB";
        string collectionName = nameof(T);
        public async Task<IEnumerable<T>> GetAllAsync()
        {
            var client = new MongoClient(connectionString);
            var collection = client.GetDatabase(databaseName).GetCollection<T>(collectionName);
            return await collection.Find(_ => true).ToListAsync();
        }
        public async Task<T> GetByIdAsync(string id)
        {
            var client = new MongoClient(connectionString);
            var collection = client.GetDatabase(databaseName).GetCollection<T>(collectionName);
            return await collection.Find(x => x.Id == id).FirstOrDefaultAsync();
        }
        public async Task AddAsync(T item)
        {
            var client = new MongoClient(connectionString);
            var collection = client.GetDatabase(databaseName).GetCollection<T>(collectionName);
            await collection.InsertOneAsync(item);
        }
        public async Task UpdateAsync(T item)
        {
            var client = new MongoClient(connectionString);
            var collection = client.GetDatabase(databaseName).GetCollection<T>(collectionName);
            await collection.ReplaceOneAsync(x => x.Id == item.Id, item);
        }
        public async Task DeleteAsync(string id)
        {
            var client = new MongoClient(connectionString);
            var collection = client.GetDatabase(databaseName).GetCollection<T>(collectionName);
            await collection.DeleteOneAsync(x => x.Id == id);
        }
    }
}
