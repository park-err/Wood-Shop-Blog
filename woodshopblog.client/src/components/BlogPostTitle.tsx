export default function BlogPostTitle() {
  return (
    <div className="p-4 flex flex-col items-start justify-start gap-2">
      <span className="text-secondary">Author and Posted Date</span>
      <h1 className="text-6xl text-left font-bold mb-4">Title of the Post</h1>
      <h2 className="text-2xl font-semibold">Post Subtitle</h2>
    </div>
  );
}
