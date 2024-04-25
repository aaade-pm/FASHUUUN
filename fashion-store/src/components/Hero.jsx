import backgroundImage from "../assets/Fashuuun-hero.jpg";

const Hero = () => {
  return (
    <div
      className="mx-9 mt-8 h-[80vh] bg-cover bg-center bg-no-repeat relative "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hero-text absolute top-14 left-20">
        <h1 className="text-5xl font-bold text-black">Dress right &</h1>
        <h1 className="text-5xl font-bold text-black mt-2">Drip hard</h1>
        <p className="text-black text-xl mt-6">Fashion for everyone</p>
      </div>
    </div>
  );
};

export default Hero;
