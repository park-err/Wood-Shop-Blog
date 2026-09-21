import BlogListCard from "./BlogListCard";

export default function BlogList() {
  return (
    <div className="blog-list w-full mx-auto my-8 p-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-9 justify-items-center content-center">
      <BlogListCard
        blogId="first-blog-post"
        title="First Blog Post"
        excerpt="This is the excerpt for the first blog post."
        imageUrl="/chop-saw-woodsmith.jpg"
      />
      <BlogListCard
        blogId="second-blog-post"
        title="Second Blog Post"
        excerpt="This is the excerpt for the second blog post."
        imageUrl="/chop-saw-woodsmith.jpg"
      />
      <BlogListCard
        blogId="third-blog-post"
        title="Third Blog Post"
        excerpt="This is the excerpt for the third blog post."
        imageUrl="/chop-saw-woodsmith.jpg"
      />
      <BlogListCard
        blogId="fourth-blog-post"
        title="Fourth Blog Post"
        excerpt="This is the excerpt for the fourth blog post."
        imageUrl="/chop-saw-woodsmith.jpg"
      />
      <BlogListCard
        blogId="fifth-blog-post"
        title="Fifth Blog Post"
        excerpt="This is the excerpt for the fifth blog post."
        imageUrl="/chop-saw-woodsmith.jpg"
      />
      <BlogListCard
        blogId="sixth-blog-post"
        title="Sixth Blog Post"
        excerpt="This is the excerpt for the sixth blog post."
        imageUrl="/chop-saw-woodsmith.jpg"
      />
    </div>
  );
}
