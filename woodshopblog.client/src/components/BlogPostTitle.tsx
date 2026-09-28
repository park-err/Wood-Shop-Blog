interface BlogPostTitleProps {
  title: string;
  subtitle: string;
  author: string;
  date: Date;
}

export default function BlogPostTitle({
  title,
  subtitle,
  author,
  date,
}: BlogPostTitleProps) {
  const dateFormat = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
  });
  return (
    <div className="p-4 flex flex-col items-start justify-start gap-2">
      <span className="text-secondary">
        {author} • {dateFormat.format(date)}
      </span>
      <h1 className="text-6xl text-left font-bold mb-4">{title}</h1>
      <h2 className="text-2xl text-secondary font-semibold">{subtitle}</h2>
    </div>
  );
}
