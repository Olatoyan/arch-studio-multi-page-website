import DesktopImg from "/contact/desktop/image-hero.jpg";
import TabletImg from "/contact/tablet/image-hero.jpg";
import MobileImg from "/contact/mobile/image-hero.jpg";

function ContactHeroSection() {
  return (
    <section className="grid grid-cols-2 items-end">
      <div className="relative">
        <picture>
          <source srcSet={MobileImg} media="(max-width: 37.5em)" />
          <source srcSet={TabletImg} media="(max-width: 56.25em)" />
          <img src={DesktopImg} alt="a picture of a telephone" />
        </picture>
        <div className="absolute top-0 h-full w-full bg-black opacity-25"></div>
      </div>
      <div className="bg-white -ml-[15rem] pl-[18rem] pt-[16rem] relative">
        <h1 className="text-very-light-grey text-[25rem] font-bold leading-[20rem] tracking-[-0.5rem] absolute top-[-13rem] left-[-18rem]">
          Contact
        </h1>
        <div>
          <h2 className="max-w-[44.6rem] text-very-dark-blue text-[7.2rem] font-bold leading-[6.4rem] tracking-[-0.2rem] pb-20">
            Tell us about your project
          </h2>
          <p className="max-w-[44.5rem] text-[1.8rem] text-dark-grey font-medium leading-[2.4rem]">
            We’d love to hear more about your project. Please, leave a message
            below or give us a call. We have two offices, one in Texas and one
            in Tennessee. If you find yourself nearby, come say hello!
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactHeroSection;
