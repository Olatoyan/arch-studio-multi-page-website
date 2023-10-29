import ArrowIcon from "./ArrowIcon";
import Cta from "./Cta";
import HomeFeaturedBox from "./HomeFeaturedBox";
import DesktopDelSol from "/portfolio/desktop/image-del-sol.jpg";
import DesktopTower from "/portfolio/desktop/image-228b.jpg";
import DesktopPrototype from "/portfolio/desktop/image-prototype.jpg";
import TabletDelSol from "/portfolio/tablet/image-del-sol.jpg";
import TabletTower from "/portfolio/tablet/image-228b.jpg";
import TabletPrototype from "/portfolio/tablet/image-prototype.jpg";
import MobileDelSol from "/portfolio/mobile/image-del-sol.jpg";
import MobileTower from "/portfolio/mobile/image-228b.jpg";
import MobilePrototype from "/portfolio/mobile/image-prototype.jpg";
import { Link } from "react-router-dom";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
function HomeFeatured() {
  const { inViewRef, inView } = useIntersectionObserver();
  return (
    <section
      className={`mt-80 px-64 xmax:px-44 tablet:px-12 mid:mt-40  fade-in ${
        inView ? "in-view" : ""
      }`}
      ref={inViewRef}
    >
      <div className="flex items-center justify-between mb-[6.5rem] ">
        <h2 className="text-[7.2rem] text-very-dark-blue leading-[6.4rem] tracking-[-0.2rem] font-bold mid:text-[4.8rem] mid:leading-[5.2rem] mid:tracking-[-0.1714rem] mid:max-w-[31.1rem]">
          Featured
        </h2>
        <div className="mid:hidden">
          <Cta to="/portfolio">
            <button className="text-[1.8rem] font-medium leading-[2.5rem]">
              See all
            </button>
            <ArrowIcon />
          </Cta>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8 max:grid-cols-1">
        <HomeFeaturedBox
          title="Project Del Sol"
          number="1"
          desktopImg={DesktopDelSol}
          tabletImg={TabletDelSol}
          mobileImg={MobileDelSol}
        />
        <HomeFeaturedBox
          title="228B Tower"
          number="2"
          desktopImg={DesktopTower}
          tabletImg={TabletTower}
          mobileImg={MobileTower}
        />
        <HomeFeaturedBox
          title="Le Prototype"
          number="3"
          desktopImg={DesktopPrototype}
          tabletImg={TabletPrototype}
          mobileImg={MobilePrototype}
        />
      </div>
      <div className="mid:block hidden mt-9">
        <Link
          className="bg-very-dark-blue flex items-center justify-center py-10 px-14 gap-8 cursor-pointer hover:bg-dark-grey transition-all duration-300"
          to={"/portfolio"}
        >
          <button className="text-[1.8rem] font-medium leading-[2.5rem]">
            See all
          </button>
          <ArrowIcon />
        </Link>
      </div>
    </section>
  );
}

export default HomeFeatured;
