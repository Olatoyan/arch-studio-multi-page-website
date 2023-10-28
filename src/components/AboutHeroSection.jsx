import DesktopImage from "/about/desktop/image-hero.jpg";
import TabletImage from "/about/tablet/image-hero.jpg";
import MobileImage from "/about/mobile/image-hero.jpg";

function AboutHeroSection() {
  return (
    <section className="grid grid-cols-2 items-end">
      <div className="relative">
        <picture>
          <source srcSet={MobileImage} media="(max-width: 37.5em)" />
          <source srcSet={TabletImage} media="(max-width: 62.5em)" />
          <img
            src={DesktopImage}
            alt="image of a man typing on a laptop"
            className="bg-gradient-to-r from-very-dark-blu to-very-light-grey"
          />
        </picture>
        <div className="absolute top-0 h-full w-full bg-black opacity-25"></div>
      </div>
      <div className="bg-white -ml-[15rem] pl-[18rem] pt-[16rem] relative">
        <h1 className="text-very-light-grey text-[25rem] font-bold leading-[20rem] tracking-[-0.5rem] absolute top-[-13rem] left-[-1rem]">
          About
        </h1>
        <div>
          <h2 className="max-w-[44.6rem] text-very-dark-blue text-[7.2rem] font-bold leading-[6.4rem] tracking-[-0.2rem] pb-20">
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
