import type { Content } from "../types/blogs";
import { JSX } from "react/jsx-runtime";

interface BlogPostContentProp {
  content: Content[];
}

function ContentBlock({ content }: { content: Content }) {
  switch (content.type) {
    case "heading":
      const Tag = `h${content.level}` as keyof JSX.IntrinsicElements;
      return <Tag className="content-heading">{content.text}</Tag>;
    case "paragraph":
      return <p className="content-par text-md">{content.text}</p>;
    case "link":
      return <a href={content.source}>{content.text}</a>;
    case "list":
      const ListTag = (
        content.ordered ? "ol" : "ul"
      ) as keyof JSX.IntrinsicElements;
      return (
        <ListTag>
          {content.items.map((item, i) => {
            return <li key={i}>{item}</li>;
          })}
        </ListTag>
      );
    case "image":
      return (
        <figure>
          <img src={content.source} alt={content.alt} />
          <figcaption>{content.caption}</figcaption>
        </figure>
      );
  }
}

export default function BlogPostContent({ content }: BlogPostContentProp) {
  return (
    <article className="content text-left">
      {content.map((block, i) => (
        <ContentBlock key={i} content={block} />
      ))}
    </article>
  );
}
