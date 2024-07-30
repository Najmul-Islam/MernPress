import PostList from "@/components/posts/PostList";
import posts from "@/data/posts.json";

const BlogsPage = () => {
  return (
    <section className="container m-auto py-10">
      <PostList posts={posts} />
    </section>
  );
};
export default BlogsPage;
