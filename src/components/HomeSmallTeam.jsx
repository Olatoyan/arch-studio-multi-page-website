import DesktopSmall from "/home/desktop/image-small-team.jpg";
import TabletSmall from "/home/tablet/image-small-team.jpg";
import MobileSmall from "/home/mobile/image-small-team.jpg";
import ArrowIcon from "./ArrowIcon";
import Cta from "./Cta";

function HomeSmallTeam() {
  const backgroundStyle = {
    backgroundImage: `url(${DesktopSmall})`,
  };
  return (
    <section
      className="min-h-[56rem] bg-cover relative mt-80"
      style={backgroundStyle}
    >
      <div className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-50"></div>
      <div className="z-10 relative px-[19rem] py-[13.6rem]">
        <h2 className="max-w-[44.5rem] text-[7.2rem] font-bold leading-[6.4rem] tracking-[-0.2rem] pb-16">
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
