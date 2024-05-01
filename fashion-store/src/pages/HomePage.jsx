import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Trending from "../components/Trending";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <div>
      <>
        <Navbar />
        <Hero />
        <Trending />
        <Footer />
      </>
    </div>
  );
};

export default HomePage;
