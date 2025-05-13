function HaveAQuestion() {
  return (
    <div className="bg-white dark:bg-black py-10 mt-10 px-6">
      <div className="w-11/12  mx-auto flex flex-col md:flex-row items-center justify-between gap-6 border border-gray-300 dark:border-gray-700 rounded px-10 py-10 bg-gray-100 dark:bg-neutral-900">
        {/* Text */}
        <div className="text-center md:text-left font-raleway font-thin">
          <h2 className="text-3xl text-black dark:text-white mb-2">
            Have a question?
          </h2>
          <p className="text-gray-700 dark:text-gray-200 font-light dark:font-thin">
            Our team is happy to assist you
          </p>
        </div>

        {/* Contact Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button className="font-light hover:opacity-70 text-black px-6 py-2 text-lg text-light rounded-md transition font-raleway bg-[var(--primary-color)]">
            <a href="/contact">Contact Us</a>
          </button>
          <span className="text-lg font-sans font-thin text-gray-800 dark:text-gray-300">
            📞 +97147702260
          </span>
        </div>
      </div>
    </div>
  );
}

export default HaveAQuestion;
