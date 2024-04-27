import backgroundImage from "../assets/Fashuuun-hero.jpg";

const Hero = () => {
  return (
    <div
      className="lg:mx-9 mx-0 lg:mt-8 mt-5 h-[80vh] bg-cover bg-center bg-no-repeat relative "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hero-text absolute md:top-10 md:left-14 lg:top-14 top-3 lg:left-20 left-3">
        <h1 className="text-5xl md:text-6xl font-bold text-black">
          Dress right &
        </h1>
        <h1 className="text-5xl md:text-6xl font-bold text-black mt-2">
          Drip hard
        </h1>
        <p className="text-black lg:text-xl md:text-2xl text-lg lg:mt-6 md:mt-4 mt-2 font-medium">
          Fashion for everyone
        </p>
      </div>
    </div>
  );
};

export default Hero;
