import { useEffect, useState } from "react";
import BlogListCard from "./BlogListCard";
import type { BlogPost } from "@/types/blogs";
import { apiClient } from "@/lib/api-client";

export default function BlogList() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await apiClient.get<BlogPost[]>("/blogpost");
        setBlogPosts(response.data);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };

    fetchBlogPosts();
  }, []);

  return (
    <div className="blog-list w-full mx-auto my-8 p-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-9 justify-items-center content-center">
      {blogPosts.map((post) => (
        <BlogListCard
          key={post.id}
          blogId={post.id}
          title={post.title}
          excerpt={post.excerpt.substring(0, 100) + "..."}
          imageUrl={post.thumbnailUrl}
        />
      ))}
    </div>
  );
}
