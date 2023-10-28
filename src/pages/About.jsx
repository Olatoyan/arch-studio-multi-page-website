import AboutHeritage from "../components/AboutHeritage";
import AboutHeroSection from "../components/AboutHeroSection";
import AboutLeaders from "../components/AboutLeaders";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PageName from "../components/PageName";

function About() {
  return (
    <div className="">
      <PageName>About us</PageName>
      <Header />
      <AboutHeroSection />
      <AboutHeritage />
      <AboutLeaders />
      <Footer />
    </div>
  );
}

export default About;
