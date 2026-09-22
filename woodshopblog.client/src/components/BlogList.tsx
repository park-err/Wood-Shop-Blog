import BlogListCard from "./BlogListCard";
import type { BlogPost } from "@/types/blogs";

export default function BlogList() {
  const blogPosts: BlogPost[] = [
    {
      title: "First Blog Post",
      subtitle: "An example subtitle for the first blog post",
      thumbnailUrl: "/chop-saw-woodsmith.jpg",
      author: "John Doe",
      date: "October 15, 2023",
      content: "This is the content of the first blog post.",
    },
  ];
  return (
    <div className="blog-list w-full mx-auto my-8 p-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-9 justify-items-center content-center">
      {blogPosts.map((post, index) => (
        <BlogListCard
          key={index}
          blogId={index.toString()}
          title={post.title}
          excerpt={post.content.substring(0, 100) + "..."}
          imageUrl={post.thumbnailUrl || ""}
        />
      ))}
    </div>
  );
}
