import type { Content } from "../types/blogs";

interface BlogPostContentProp {
  content: Content[];
}

function ContentBlock({ type, source, text }: Content) {
  switch (type) {
    case "heading":
      return <h1 className="content-heading">{text}</h1>;
    case "subheading":
      return <h2 className="content-subheading">{text}</h2>;
    case "paragraph":
      return <p className="content-par">{text}</p>;
    case "image":
      return (
        <figure>
          <img src={source} alt={source} />
          <figcaption>{text}</figcaption>
        </figure>
      );
  }
}

export default function BlogPostContent({ content }: BlogPostContentProp) {
  return (
    <article className="content text-left">
      {content.map(({ type, source, text }, i) => (
        <ContentBlock key={i} type={type} source={source} text={text} />
      ))}
    </article>
  );
}
