import { useEffect, useState } from "react";
import { HomeSlides, useHome } from "../contexts/HomeContext";
import HomeHeroSectionBox from "./HomeHeroSectionBox";
import HomeSlidesNav from "./HomeSlidesNav";

function HomeHeroSection() {
  const { id } = useHome();
  const currentSlide = HomeSlides.find((slide) => slide.id === id);
  console.log(currentSlide.desktopImg);
  console.log(currentSlide.tabletImg);
  console.log(currentSlide.mobileImg);

  // Define media query conditions
  const isTablet = window.innerWidth <= 1200 && window.innerWidth >= 900;
  const isMobile = window.innerWidth < 900;

  // Define styles based on the conditions
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
      className="min-h-[72rem] relative bg-cover flex flex-col"
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
