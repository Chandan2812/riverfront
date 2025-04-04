
import { useParams } from 'react-router-dom';
import blogsData from '../data/blogsData.json';
import Navbar from '../components/nav';
import Footer from '../components/footer';

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogsData.find((b) => b.id.toString() === id);

  if (!blog) {
    return <div className="text-center text-red-500 mt-10">Blog not found.</div>;
  }

  return (
    <div>
        <Navbar/>
        {/* Hero Section */}
              <div
                className="relative w-full h-[380px] bg-cover bg-center bg-black bg-opacity-40"
                style={{ backgroundImage: "url('https://uniqueproperties.ae/en/frontend/assets/images/banner/homeBg.webp')" }}
              >
                 {/* Black Transparent Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              </div>
    <div className="w-[90%] container mx-auto px-4 py-10">
      <img src={blog.image} alt={blog.title} className="w-full h-[400px] object-cover rounded-lg mb-6" />
      <p className="text-gray-500 text-sm mb-2">{blog.date}</p>
      <h1 className="text-3xl font-semibold mb-6">{blog.title}</h1>
      <div className="text-gray-800 whitespace-pre-line leading-relaxed">
        {blog.content}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default BlogDetails;
