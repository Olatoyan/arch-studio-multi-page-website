import ArrowIcon from "./ArrowIcon";
import Cta from "./Cta";

function HomeHeroSectionBox({ title, text }) {
  return (
    <div className="z-10 relative pt-[12.6rem] pl-[19rem]">
      <h1 className="text-[9.6rem] font-bold leading-[9rem] tracking-[-0.2rem] max-w-[54.4rem] pb-4">
        {title}
      </h1>
      <p className="text-[1.8rem] font-medium leading-[2.4rem] max-w-[44.5rem] pb-[4.1rem]">
        {text}
      </p>
      <Cta to="/portfolio">
        <button className="text-white text-[1.8rem] font-bold leading-[2.5rem]">
          See Our Portfolio
        </button>
        <ArrowIcon />
      </Cta>
    </div>
  );
}

export default HomeHeroSectionBox;
