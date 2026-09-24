namespace WoodShopBlog.Server.Repositories.Interfaces
{
    public interface IBaseRepository<T> where T : class
    {
        Task<IEnumerable<T>> GetAllAsync();
        Task<T> GetByIdAsync(string id);
        Task AddAsync(T item);
        Task UpdateAsync(T item);
        Task DeleteAsync(string id);
    }
}
