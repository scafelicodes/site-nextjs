import Avatar from "../components/avatar";
import DateFormatter from "../components/date-formatter";
import CoverImage from "../components/cover-image";
import Link from "next/link";

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <section className="hero-post-item">
      <Link as={`/blog/${slug}`} href="/blog/[slug]">
        <a>
          <div
            className="mb-8 md:mb-16"
            style={{
              backgroundImage: `url(${coverImage})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: "500px",
              marginBottom: "10px",
            }}
          ></div>
        </a>
      </Link>
      <div>
        <div>
          <span>
            <DateFormatter dateString={date} />
          </span>
          <h3>
            <Link as={`/blog/${slug}`} href="/blog/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
        </div>
        <div>
          <p>{excerpt}</p>
          {/* <Avatar name={author.name} picture={author.picture} /> */}
        </div>
      </div>
    </section>
  );
}
