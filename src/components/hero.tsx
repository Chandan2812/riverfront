
import Hero from "../assets/Hero.mp4"
import Navbar from "./nav";

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


      {/* Navbar at the Top */}
      <div className="relative z-20 w-full">
        <Navbar />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">

        <div className="absolute bottom-28 flex flex-col items-center">
          <h2 className="text-2xl font-bold">RIVERFRONT</h2>
          <p>In Partnership With <strong>Forbes</strong></p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
