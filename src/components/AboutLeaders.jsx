import useIntersectionObserver from "../hooks/useIntersectionObserver";
import AboutLeadersBox from "./AboutLeadersBox";

function AboutLeaders() {
  const { inViewRef, inView } = useIntersectionObserver();

  return (
    <section
      className={`grid grid-cols-2 items-start mt-80 px-64 xmax:px-44 tablet:px-32 mid:px-12 max:grid-cols-1 max:gap-16 mid:mt-40  fade-in ${
        inView ? "in-view" : ""
      }`}
      ref={inViewRef}
    >
      <div>
        <h2 className="max-w-[44.6rem] text-[7.2rem] font-bold leading-[6.4rem] tracking-[-0.2rem] text-very-dark-blue max:max-w-[31.1rem] mid:max-w-[24.1rem] mid:text-[4.8rem] nid:leading-[5.2rem] mid:tracking-[-0.1714rem]">
          The Leaders
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-y-16 gap-x-12 mid:gap-x-6 mobile:grid-cols-1">
        <AboutLeadersBox
          img="/about/desktop/avatar-jake.jpg"
          name="Jake Richards"
          position="Chief Architect"
        />
        <AboutLeadersBox
          img="/about/desktop/avatar-thompson.jpg"
          name="Thompson Smith"
          position="Head of Finance"
        />
        <AboutLeadersBox
          img="/about/desktop/avatar-jackson.jpg"
          name="Jackson Rourke"
          position="Lead Designer"
        />
        <AboutLeadersBox
          img="/about/desktop/avatar-maria.jpg"
          name="Maria Simpson"
          position="Senior Architect"
        />
      </div>
    </section>
  );
}

export default AboutLeaders;
