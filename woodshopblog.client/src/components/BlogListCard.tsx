export default function BlogListCard() {
  return (
    <div className="blog-card rounded-2xl overflow-hidden shadow bg-white h-90 w-90 hover:cursor-pointer hover:scale-102 hover:shadow-lg transition-transform duration-300 transition-shadow duration-300">
      <img
        src="/chop-saw-woodsmith.jpg"
        alt="Blog Post"
        className="blog-card-image"
      />
      <div className="blog-card-content p-4">
        <h2 className="blog-card-title text-left font-semibold text-lg my-2">
          Blog Title
        </h2>
        <p className="blog-card-excerpt text-left text-md text-gray-600">
          This is a short excerpt from the blog post. It gives a brief overview
          of the content and entices readers to click through to read more.
        </p>
      </div>
    </div>
  );
}
