import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import WhyChooseUs from "../Components/WhyChooseme";
import FeaturedProducts from "../Components/FeaturedProducts";
import HowItWorks from "../Components/HowItWorks";
import Feedback from "../Components/Feedback";
import Footer from "../Components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <WhyChooseUs />
        <FeaturedProducts />
        <HowItWorks />
        <Feedback />
      </main>

      <Footer />
    </>
  );
}

export default Home;