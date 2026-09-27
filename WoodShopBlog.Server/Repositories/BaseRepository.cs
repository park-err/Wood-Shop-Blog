using Microsoft.Extensions.Options;
using MongoDB.Driver;
using WoodShopBlog.Server.Models;
using WoodShopBlog.Server.Repositories.Interfaces;

namespace WoodShopBlog.Server.Repositories
{
    public class BaseRepository<T> : IBaseRepository<T> where T : BaseModel
    {
        protected readonly IMongoCollection<T> _collection;
        public BaseRepository(IOptions<MongoDBConnection> options)
        {
            var connection = options.Value;
            connection.BuildConnectionString();
            _collection = new MongoClient(connection.ConnectionString).GetDatabase(connection.Database).GetCollection<T>(typeof(T).Name);
        }
        public async Task<IEnumerable<T>> GetAllAsync() =>
            await _collection.Find(_ => true).ToListAsync();
        public async Task<T> GetByIdAsync(string id) =>
            await _collection.Find(x => x.Id == id).FirstOrDefaultAsync();
        public async Task AddAsync(T item) =>
            await _collection.InsertOneAsync(item);
        public async Task UpdateAsync(T item)
        {
            await _collection.ReplaceOneAsync(x => x.Id == item.Id, item);
        }
        public async Task DeleteAsync(string id)
        {
            await _collection.DeleteOneAsync(x => x.Id == id);
        }
    }
}
