import Link from "next/link";

interface Tag {
  id: number;
  name: string;
  slug: string;
}

interface ArticleCardProps {
  slug: string;
  title: string;
  author: string;
  authored_on: string;
  body: string;
  tags?: Tag[];
}

export default function ArticleCard({
  slug,
  title,
  author,
  authored_on,
  body,
  tags,
}: ArticleCardProps) {
  const excerpt = body.length > 200 ? body.substring(0, 200) + "..." : body;
  const formattedDate = new Date(authored_on).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <Link href={`/article/${slug}`}>
        <h2 className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors mb-2">
          {title}
        </h2>
      </Link>
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
        <span>{author}</span>
        <span>&middot;</span>
        <time dateTime={authored_on}>{formattedDate}</time>
      </div>
      {tags && tags.length > 0 && (
        <div className="flex gap-2 mb-3">
          {tags.map((tag) => (
            <span
              key={tag.id}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
            >
              {tag.name}
            </span>
          ))}
        </div>
      )}
      <p className="text-gray-600 leading-relaxed">{excerpt}</p>
      <Link
        href={`/article/${slug}`}
        className="inline-block mt-4 text-blue-600 hover:text-blue-800 text-sm font-medium"
      >
        Read more &rarr;
      </Link>
    </article>
  );
}
