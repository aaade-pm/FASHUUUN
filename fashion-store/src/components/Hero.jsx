import backgroundImage from "../assets/Fashuuun-hero.webp";

const Hero = () => {
  return (
    <>
      <div className="lg:mx-9 mx-0 lg:mt-8 mt-5 h-[80vh] relative ">
        <div className="h-full">
          <img
            src={backgroundImage}
            alt="Hero Image"
            style={{
              width: "100%",
              height: "80vh",
              objectFit: "cover",
              position: "relative",
            }}
            loading="lazy"
          />
        </div>
        <div className="hero-text absolute md:top-10 md:left-14 lg:top-10 top-3 lg:left-12 left-3">
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
    </>
  );
};

export default Hero;
