import Categories from "@/components/category/Categories";
import Post from "@/components/post/Post";
import Tags from "@/components/tag/Tags";
import posts from "@/data/posts.json";
import { notFound } from "next/navigation";

const getPostById = (id) => {
  return posts.find((item) => item.id.toString() === id);
};

const BlogPage = ({ params }) => {
  const post = getPostById(params.id);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-screen-xl py-12 gap-10 grid grid-cols-12 justify-center">
      <div className="col-span-8">
        <Post post={post} />
      </div>
      <aside className="col-span-4 flex flex-col gap-8">
        <Tags />
        <Categories />
      </aside>
    </div>
  );
};
export default BlogPage;
