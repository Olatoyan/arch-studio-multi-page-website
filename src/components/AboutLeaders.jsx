import AboutLeadersBox from "./AboutLeadersBox";

function AboutLeaders() {
  return (
    <section className="grid grid-cols-2 items-start mt-80">
      <div>
        <h2 className="max-w-[44.6rem] text-[7.2rem] font-bold leading-[6.4rem] tracking-[-0.2rem] text-very-dark-blue">
          The Leaders
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-y-16 gap-x-12">
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
