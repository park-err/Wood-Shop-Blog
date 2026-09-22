import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import BlogPostTitle from "./BlogPostTitle";
import type { BlogPost } from "@/types/blogs";

export default function BlogPost() {
  const { blogId } = useParams<{ blogId: string }>();

  // Fetch the blog post data based on the blogId
  // For demonstration purposes, we'll use a static example
  const blogPost: BlogPost = {
    title: "Example Blog Post Title",
    subtitle: "An example subtitle for the blog post",
    author: "John Doe",
    date: "October 15, 2023",
    content: "<p>This is the content of the example blog post.</p>",
  };

  const { title, subtitle, author, date, content } = blogPost;

  return (
    <section className="blog-post w-full mx-auto my-8 p-8">
      <BlogPostTitle
        title={title}
        subtitle={subtitle}
        author={author}
        date={date}
      />
      <div className="divider" />
      <article className="content text-left">{parse(content)}</article>
    </section>
  );
}
