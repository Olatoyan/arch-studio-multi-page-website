import desktopImg from "/home/desktop/image-small-team.jpg";
import tabletImg from "/home/tablet/image-small-team.jpg";
import mobileImg from "/home/mobile/image-small-team.jpg";
import ArrowIcon from "./ArrowIcon";
import Cta from "./Cta";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

function HomeSmallTeam() {
  const { inViewRef, inView } = useIntersectionObserver();
  const isTablet = window.innerWidth <= 1000 && window.innerWidth >= 700;
  const isMobile = window.innerWidth < 700;

  const backgroundStyle = {
    backgroundImage: `url(${
      isTablet ? tabletImg : isMobile ? mobileImg : desktopImg
    })`,
  };

  return (
    <section
      className={`min-h-[56rem] bg-cover relative mt-80 mx-64 xmax:mx-44 tablet:mx-32 mid:mx-0 mid:mt-40  fade-in ${
        inView ? "in-view" : ""
      }`}
      ref={inViewRef}
      style={backgroundStyle}
    >
      <div className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-50"></div>
      <div className="z-10 relative pl-[19rem] py-[13.6rem] max:pl-36 mid:pl-20 mobile:pl-12">
        <h2 className="max-w-[44.5rem] text-[7.2rem] font-bold leading-[6.4rem] tracking-[-0.2rem] pb-16 mid:text-[4.8rem] mid:leading-[5.2rem] mid:tracking-[-0.1714rem] mid:max-w-[31.1rem] mid:pb-[2.2rem]">
          Small team, big ideas
        </h2>
        <Cta to="/about">
          <button className="text-white text-[1.8rem] font-bold leading-[2.5rem]">
            About Us
          </button>
          <ArrowIcon />
        </Cta>
      </div>
    </section>
  );
}

export default HomeSmallTeam;
