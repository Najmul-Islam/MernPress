"use client";
import BlogItem from "./PostItem";

const PostList = ({ posts }) => {
  console.log(posts);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {posts.map((post) => (
        <BlogItem key={post.id} post={post} />
      ))}
    </div>
  );
};
export default PostList;
