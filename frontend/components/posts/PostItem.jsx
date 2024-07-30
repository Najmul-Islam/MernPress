"use client";
import moment from "moment";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

const PostItem = ({ post }) => {
  const { push } = useRouter();

  // Memoized callback to handle navigation
  const handleNavigate = useCallback(
    (id) => {
      push(`/blog/${id}`);
    },
    [push]
  );

  const { id, title, content, featured_media, tags, createdAt } = post;

  // formate date
  const day = moment(createdAt).format("DD");
  const month = moment(createdAt).format("MMM");

  // Helper function to render tags
  const renderTags = (tags) =>
    tags.map((tag) => (
      <span key={tag} className="text-primary-500 cursor-pointer">
        #{tag.toLowerCase()}
      </span>
    ));

  // Helper function to truncate content
  const truncateContent = (content, length = 200) =>
    content.length > length ? `${content.slice(0, length)}...` : content;

  return (
    <article className="flex flex-col space-y-3 rounded shadow-lg relative">
      <Image
        src={`/blog/${featured_media}`}
        width={400}
        height={200}
        alt={title || "Blog post image"}
        className="w-full rounded-t cursor-pointer"
        onClick={() => handleNavigate(id)}
      />
      <div className="flex flex-col justify-center items-center bg-[#00000080] text-white absolute ml-5 top-3 rounded-lg w-[75px] h-[75px]">
        <span className="text-2xl font-bold">{day}</span>
        <span>{month}</span>
      </div>
      <div className="px-2 flex flex-wrap space-x-3">{renderTags(tags)}</div>

      <div className="px-2 py-3">
        <h1
          onClick={() => handleNavigate(id)}
          className="text-xl font-semibold mb-2 cursor-pointer"
        >
          {title}
        </h1>

        <p
          className="font-light text-base"
          dangerouslySetInnerHTML={{ __html: truncateContent(content) }}
        />
      </div>
    </article>
  );
};

export default PostItem;
