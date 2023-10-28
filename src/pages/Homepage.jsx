import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeFeatured from "../components/HomeFeatured";
import HomeHeroSection from "../components/HomeHeroSection";
import HomeSmallTeam from "../components/HomeSmallTeam";
import HomeWelcome from "../components/HomeWelcome";
import PageName from "../components/PageName";

function Homepage() {
  return (
    <div>
      <PageName>Home</PageName>
      <Header />
      <HomeHeroSection />
      <HomeWelcome />
      <HomeSmallTeam />
      <HomeFeatured />
      <Footer />
    </div>
  );
}

export default Homepage;
