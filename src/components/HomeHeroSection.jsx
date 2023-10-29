import { HomeSlides, useHome } from "../contexts/HomeContext";
import HomeHeroSectionBox from "./HomeHeroSectionBox";
import HomeSlidesNav from "./HomeSlidesNav";

function HomeHeroSection() {
  const { id } = useHome();
  const currentSlide = HomeSlides.find((slide) => slide.id === id);

  const isTablet = window.innerWidth <= 1000 && window.innerWidth >= 700;
  const isMobile = window.innerWidth < 700;

  const backgroundStyle = {
    backgroundImage: `url(${
      isTablet
        ? currentSlide.tabletImg
        : isMobile
        ? currentSlide.mobileImg
        : currentSlide.desktopImg
    })`,
  };

  return (
    <section
      className="min-h-[72rem] relative bg-cover flex flex-col mx-64 xmax:mx-44 tablet:mx-32 mid:mx-0"
      style={backgroundStyle}
    >
      {currentSlide && (
        <div className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-50"></div>
      )}
      {currentSlide && (
        <HomeHeroSectionBox
          key={currentSlide.id}
          title={currentSlide.title}
          text={currentSlide.text}
        />
      )}
      <HomeSlidesNav />
    </section>
  );
}

export default HomeHeroSection;
