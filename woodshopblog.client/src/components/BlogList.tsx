import BlogListCard from "./BlogListCard";

export default function BlogList() {
  return (
    <div className="blog-list w-full mx-auto my-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center content-center">
      <BlogListCard />
      <BlogListCard />
      <BlogListCard />
    </div>
  );
}
