import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiClient } from "@/lib/api-client";
import parse from "html-react-parser";
import BlogPostTitle from "./BlogPostTitle";
import type { BlogPost } from "@/types/blogs";

export default function BlogPost() {
  const { blogId } = useParams<{ blogId: string }>();

  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await apiClient.get<BlogPost>(`/blogpost/${blogId}`);
        setBlogPost(response.data);
      } catch (error) {
        console.error("Error fetching blog post:", error);
      }
    };

    fetchBlogPost();
  }, [blogId]);

  if (!blogPost) {
    return <div className="loading">Loading...</div>;
  }

  const { title, subtitle, author, date, tags, content } = blogPost;

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
