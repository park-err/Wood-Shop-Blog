interface BlogListCardProps {
  blogId: string;
  title: string;
  excerpt: string;
  imageUrl: string;
}

export default function BlogListCard({
  blogId,
  title,
  excerpt,
  imageUrl,
}: BlogListCardProps) {
  return (
    <a
      href={`/blogs/${blogId}`}
      className="blog-card rounded-2xl overflow-hidden shadow bg-white h-90 w-90 hover:cursor-pointer hover:scale-102 hover:shadow-lg ease-in-out duration-300 transition-all"
    >
      <img src={imageUrl} alt={title} className="blog-card-image" />
      <div className="blog-card-content p-4">
        <h2 className="blog-card-title text-left font-semibold text-lg my-2">
          {title}
        </h2>
        <p className="blog-card-excerpt text-left text-md text-gray-600">
          {excerpt}
        </p>
      </div>
    </a>
  );
}
