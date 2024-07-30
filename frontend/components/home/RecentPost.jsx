import posts from "@/data/posts.json";
import PostList from "../posts/PostList";
import Link from "next/link";

const RecentPost = () => {
  const getRecentPost = posts.slice(0, 6);
  return (
    <div className="container py-24">
      <PostList posts={getRecentPost} />

      <div className="flex justify-center pt-20">
        <Link
          href="/blog"
          className="bg-black text-white py-3 px-8 text-base sm:w-auto"
        >
          See more
        </Link>
      </div>
    </div>
  );
};
export default RecentPost;
