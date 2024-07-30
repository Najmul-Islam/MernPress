import moment from "moment";
import Image from "next/image";

const Post = ({ post }) => {
  const { title, content, featured_media, tags, createdAt } = post;
  const formatedate = moment(createdAt).format("DD MMM, YYYY").toUpperCase();
  return (
    <article className="prose max-w-none prose-h1:text-2xl">
      <h1>{title}</h1>
      <span>{formatedate}</span>
      <Image
        src={`/blog/${featured_media}`}
        width={700}
        height={400}
        className="w-full shadow"
        alt={title}
      />

      <div dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  );
};
export default Post;
