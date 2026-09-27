using WoodShopBlog.Server;
using WoodShopBlog.Server.Repositories;
using WoodShopBlog.Server.Repositories.Interfaces;
using WoodShopBlog.Server.Services;
using WoodShopBlog.Server.Services.Interfaces;

var builder = WebApplication.CreateBuilder(args);

// cors
var allowedOrigins = builder.Configuration.GetSection("AllowedOrigins").Get<string[]>()!;
var corsName = "AllowBlogApp";

builder.Services.AddCors(options =>
{
    options.AddPolicy(corsName,
                      policy =>
                      {
                          policy.WithOrigins(allowedOrigins)
                                .AllowAnyMethod()
                                .AllowAnyHeader();
                      });
});

// Connection String Builder
builder.Services.Configure<WoodShopBlog.Server.MongoDBConnection>(builder.Configuration.GetSection("MongoDBConnection"));

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddScoped<IBlogPostService, BlogPostService>();
builder.Services.AddScoped<IBlogPostRepository, BlogPostRepository>();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

// swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.ConfigureSwaggerGen(options =>
{
    options.CustomSchemaIds(type => type.FullName);
});

var app = builder.Build();

app.UseDefaultFiles();
app.MapStaticAssets();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(corsName);

/// TODO: Use authentication for adding, updating, and deleting blog posts
//app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();
