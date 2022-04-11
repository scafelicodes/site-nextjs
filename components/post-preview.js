import Avatar from "../components/avatar";
import DateFormatter from "../components/date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div className="col-md-6 post-preview-item">
      <div>
        <Link as={`/blog/${slug}`} href="/blog/[slug]">
          <CoverImage
            slug={slug}
            title={title}
            src={coverImage}
            height={278}
            width={556}
          />
        </Link>
      </div>
      {/* <span>
        <DateFormatter dateString={date} />
      </span> */}

      <h3>
        <Link as={`/blog/${slug}`} href="/blog/[slug]">
          <a>{title}</a>
        </Link>
      </h3>

      <p>{excerpt}</p>
      {/* <Avatar name={author.name} picture={author.picture} /> */}
    </div>
  );
}
