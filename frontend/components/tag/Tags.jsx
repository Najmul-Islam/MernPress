import tags from "@/data/tags.json";

const Tags = () => {
  return (
    <div className="border p-5 rounded">
      <h2 className="text-lg font-semibold mb-6">Tags</h2>
      {tags.map((tag) => (
        <div
          key={tag.id}
          className="flex items-center space-x-3 mb-2 cursor-pointer group"
        >
          <span className="text-primary-500">#</span>
          <span className="group-hover:underline">{tag.name}</span>
        </div>
      ))}
    </div>
  );
};
export default Tags;
