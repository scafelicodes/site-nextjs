import Avatar from "../components/avatar";
import DateFormatter from "../components/date-formatter";
import CoverImage from "../components/cover-image";
import PostTitle from "../components/post-title";

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <div
        className="header__post"
        style={{
          backgroundImage: `url(${coverImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "300px",
        }}
      >
        <div className="headerPost__content">
          <PostTitle>{title}</PostTitle>
          <div className="author__post">
            {/* <Avatar name={author.name} picture={author.picture} /> */}
            <span>
              Por {author.name}
              {/* • <DateFormatter dateString={date} /> */}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
