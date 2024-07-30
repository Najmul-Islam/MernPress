import categories from "@/data/categories.json";

const Categories = () => {
  return (
    <div className="border rounded p-5">
      <h2 className="text-lg font-semibold mb-6">Category</h2>
      {categories.map((category) => (
        <div
          key={category.id}
          className="flex items-center space-x-3 mb-2 cursor-pointer hover:underline"
        >
          <span className="text-primary-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
              />
            </svg>
          </span>
          <span>{category.name}</span>
        </div>
      ))}
    </div>
  );
};
export default Categories;
