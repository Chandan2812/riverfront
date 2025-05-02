function HaveAQuestion() {
  return (
    <div className="bg-black py-10 mt-10">
      <div className="w-[90%] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 border rounded px-10 py-10">
        {/* Text */}
        <div className="text-center md:text-left font-raleway font-thin">
          <h2 className="text-3xl text-white mb-2">Have a question?</h2>
          <p className="text-gray-200">Our team is happy to assist you</p>
        </div>

        {/* Contact Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button
            className="font-light hover:opacity-70 text-white px-6 py-2 rounded-md transition font-raleway "
            style={{ background: "var(--bg-primary-gradient)" }}
          >
            <a href="/contact">Contact Us</a>
          </button>
          <span className="text-lg font-sans font-thin text-gray-300">
            📞 +97147702260
          </span>
        </div>
      </div>
    </div>
  );
}

export default HaveAQuestion;
