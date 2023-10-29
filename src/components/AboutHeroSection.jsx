import DesktopImage from "/about/desktop/image-hero.jpg";
import TabletImage from "/about/tablet/image-hero.jpg";
import MobileImage from "/about/mobile/image-hero.jpg";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

function AboutHeroSection() {
  const { inViewRef, inView } = useIntersectionObserver();

  return (
    <section
      className={`grid grid-cols-2 items-end px-64 xmax:px-44 tablet:px-32  max:grid-cols-1 mid:px-0  fade-in ${
        inView ? "in-view" : ""
      }`}
      ref={inViewRef}
    >
      <div className="relative">
        <picture className="relative z-[1]">
          <source srcSet={MobileImage} media="(max-width: 25em)" />
          <source srcSet={TabletImage} media="(max-width: 62.5em)" />
          <img
            src={DesktopImage}
            alt="image of a man typing on a laptop"
            className="bg-gradient-to-r from-very-dark-blue to-very-light-grey w-full"
          />
        </picture>
        <div className="absolute top-0 h-full w-full bg-black opacity-25 z-[2]"></div>
      </div>
      <div className="bg-white -ml-[15rem] pl-[18rem] pt-[16rem] relative xmax:pl-[14rem] max:ml-[10rem] max:mt-[-45.7rem] tablet:pl-[10rem] tablet:pt-[12rem] mid:ml-0 mid:pt-20 mid:pl-12 mid:mt-[-31.5rem] xsm:mt-[-2rem] z-[3]">
        <h1 className="text-very-light-grey text-[25rem] font-bold leading-[20rem] tracking-[-0.5rem] absolute top-[-13rem] left-[-1rem] xmax:text-[20rem] tablet:text-[12rem]  tablet:top-[-10rem] tablet:left-[13rem] mid:hidden">
          About
        </h1>
        <div>
          <h2 className="max-w-[44.6rem] text-very-dark-blue text-[7.2rem] font-bold leading-[6.4rem] tracking-[-0.2rem] pb-20 mid:max-w-[31.1rem] mid:text-[4.8rem] nid:leading-[5.2rem] mid:tracking-[-0.12rem] mid:pb-9">
            Your team of professionals
          </h2>
          <p className="max-w-[44.5rem] text-[1.8rem] text-dark-grey font-medium leading-[2.4rem]">
            Our small team of world-class professionals will work with you every
            step of the way. Strong relationships are at the core of everything
            we do. This extends to the relationship our projects have with their
            surroundings.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutHeroSection;
