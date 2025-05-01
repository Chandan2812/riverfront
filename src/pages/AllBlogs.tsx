import Navbar from "../components/nav";
import { useNavigate } from "react-router-dom";
import blogsData from "../data/blogsData.json";
import Footer from "../components/footer";

function AllBlogs() {
  const navigate = useNavigate();
  return (
    <div className="bg-black px-5 font-raleway font-thin">
      <div className="mb-32 md:mb-32 pt-3 md:pt-10">
        <Navbar />
      </div>

      <div className=" max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
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
              <p className="text-gray-300 text-sm mb-3">{blog.date}</p>
              <button
                onClick={() => navigate(`/blog/${blog.id}`)}
                className=" text-[var(--primary-color)] font-light"
              >
                Read More &raquo;
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default AllBlogs;
