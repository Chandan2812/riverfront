
import { useParams } from 'react-router-dom';
import blogsData from '../data/blogsData.json';
import Footer from '../components/footer';
import HeroSection from '../components/hero';

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogsData.find((b) => b.id.toString() === id);

  if (!blog) {
    return <div className="text-center text-red-500 mt-10">Blog not found.</div>;
  }

  return (
    <div>
        <HeroSection/>
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
