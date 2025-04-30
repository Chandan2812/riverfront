import blogsData from "../data/blogsData.json";

const Blog = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-2xl md:text-4xl text-white mb-6 text-center">
        Our Latest Blogs
      </h1>

      <div className=" max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {blogsData.map((blog) => (
          <div
            key={blog.id}
            className="border rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl mb-2 text-white">
                {blog.title.slice(0, 38)}...
              </h2>
              <p className="text-white text-sm mb-3">{blog.date}</p>
              <a
                href={`/blog/${blog.id}`}
                className="text-[var(--primary-color)]"
              >
                Read More &raquo;
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <a
          href="/viewblogs"
          onClick={(e) => e.stopPropagation()} // Prevent section click
          className="inline-block px-8 py-2 text-lg text-white bg-[--primary-color] rounded-3xl hover:opacity-80 mt-6"
        >
          View All
        </a>
      </div>
    </div>
  );
};

export default Blog;
