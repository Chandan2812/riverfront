
import Hero from "../assets/Hero.mp4"

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={Hero} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
        {/* <div className="absolute top-6 left-6 flex items-center">
          <button className="text-white text-xl flex items-center">
            &#9776; Menu
          </button>
        </div> */}
        
        {/* <div className="absolute top-6 flex justify-center w-full">
          <h1 className="text-3xl font-bold">UNIQUE PROPERTIES</h1>
        </div>

        <div className="absolute top-6 right-6 flex gap-4">
          <button className="border border-white px-4 py-2 rounded-full">Careers</button>
          <button className="flex items-center gap-2">
            🔍 Find a Property
          </button>
        </div> */}

        <div className="absolute bottom-12 flex flex-col items-center">
          <h2 className="text-2xl font-bold">RIVERFRONT</h2>
          <p>In Partnership With <strong>Forbes</strong></p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
