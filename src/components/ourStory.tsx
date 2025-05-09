export default function OurStory() {
  return (
    <div className="w-full bg-white dark:bg-black py-10 px-6 md:px-16 font-raleway font-thin">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl text-black dark:text-white mb-6 text-center">
          Our Mission
        </h2>
        <p className="mt-4 text-lg text-gray-800 dark:text-gray-300 font-light dark:font-thin">
          At Riverfront Properties, we're passionate about transforming the
          Dubai real estate landscape! In our quest to redefine excellence, we
          provide unparalleled services in the buying, selling, and renting of
          properties. Through our dedication to integrity, our constant quest
          for innovation, and our commitment to inclusivity, we strive to build
          lifelong relationships with our clients. We’re not just doing
          business, we are contributing to a fairer and more vibrant real estate
          market – A mission we are incredibly proud of!
        </p>
        <a
          href="/about"
          className="inline-block px-6 py-2 text-lg font-light text-white  rounded-3xl hover:opacity-80 mt-6"
          style={{ background: "var(--bg-primary-gradient)" }}
        >
          About Us
        </a>
      </div>
    </div>
  );
}
