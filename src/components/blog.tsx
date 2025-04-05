
import { useNavigate } from 'react-router-dom';
import blogsData from '../data/blogsData.json';

const Blog = () => {
    const navigate=useNavigate()
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-2xl md:text-4xl text-gray-800 mb-6 text-center">Our Latest Blogs</h1>

      <div className=" max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {blogsData.map((blog) => (
          <div key={blog.id} className="border rounded-lg shadow-lg overflow-hidden">
            <img src={blog.image} alt={blog.title} className="w-full h-60 object-cover" />
            <div className="p-6">
              <h2 className="text-xl mb-2">{blog.title.slice(0,38)}...</h2>
              <p className="text-gray-500 text-sm mb-3">{blog.date}</p>
                <button onClick={()=>navigate(`/blog/${blog.id}`)} className="bg-[var(--primary-color)] text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-all">
                  Read More
                </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
